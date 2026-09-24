import { useEffect, useRef } from 'react';

const POOL_SIZE = 80;
const MIN_DISTANCE = 25;
const EXPAND_FROM = 20;
const EXPAND_TO = 300;
const AGE_INCREMENT = 0.012;

// Skip entirely on touch/primary-coarse devices (desktop behavior unchanged)
const IS_TOUCH_PRIMARY =
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

interface Ripple {
  active: boolean;
  x: number;
  y: number;
  age: number; // 0 → 1 (1 = fully faded)
}

export default function RippleTrail() {
  const poolRef = useRef<HTMLDivElement[]>([]);
  const ripplesRef = useRef<Ripple[]>(
    Array.from({ length: POOL_SIZE }, () => ({ active: false, x: 0, y: 0, age: 0 }))
  );
  const nextIndexRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (IS_TOUCH_PRIMARY) return;
    // Spawn a ripple when cursor moves far enough
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      if (Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE) return;

      lastPosRef.current = { x: e.clientX, y: e.clientY };
      const idx = nextIndexRef.current % POOL_SIZE;
      ripplesRef.current[idx] = { active: true, x: e.clientX, y: e.clientY, age: 0 };
      nextIndexRef.current++;
    };

    // Single rAF loop — advances every active ripple by AGE_INCREMENT per frame
    const animate = () => {
      const ripples = ripplesRef.current;
      const pool = poolRef.current;

      for (let i = 0; i < POOL_SIZE; i++) {
        const r = ripples[i];
        const el = pool[i];
        if (!el) continue;

        if (r.active) {
          r.age += AGE_INCREMENT;
          if (r.age >= 1) {
            r.active = false;
            el.style.opacity = '0';
            continue;
          }
          const size = EXPAND_FROM + r.age * (EXPAND_TO - EXPAND_FROM);
          const opacity = 1 - Math.pow(r.age, 1.2); // ease-out opacity curve
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
          el.style.left = `${r.x - size / 2}px`;
          el.style.top = `${r.y - size / 2}px`;
          el.style.opacity = `${opacity}`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (IS_TOUCH_PRIMARY) return null;

  return (
    <div className="fixed inset-0 z-30 pointer-events-none">
      {/*
        Hidden SVG filter — warps ring edges to look liquid.
        baseFrequency controls how "noisy" the distortion is (try 0.01–0.04).
        scale controls how far pixels are displaced (try 10–50).
      */}
      <svg className="hidden">
        <filter id="liquid-trail">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Pre-created pool — each div is one possible ring */}
      {Array.from({ length: POOL_SIZE }, (_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) poolRef.current[i] = el; }}
          className="absolute rounded-full"
          style={{
            opacity: 0,
            backdropFilter: 'url(#liquid-trail) blur(1px)',
            WebkitBackdropFilter: 'url(#liquid-trail) blur(1px)',
            // Inner glow + outer blue haze — change colours freely
            boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(147,197,253,0.15)',
            willChange: 'transform, opacity, width, height, left, top',
          }}
        />
      ))}
    </div>
  );
}
