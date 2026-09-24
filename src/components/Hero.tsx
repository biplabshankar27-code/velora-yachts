import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

interface HeroProps {
  fleetOpen: boolean
  menuOpen: boolean
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const HEADLINE_LINES = [
  { text: 'THE OCEAN', italic: false },
  { text: 'IS YOURS.', italic: true },
  { text: 'CLAIM IT', italic: false },
  { text: 'NOW.', italic: true },
]

export default function Hero({ fleetOpen, menuOpen }: HeroProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ctaTransform = menuOpen
    ? 'translateX(calc(-1 * clamp(260px,38vw,420px)))'
    : fleetOpen
      ? 'translateX(200px)'
      : 'none'

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          filter: fleetOpen ? 'blur(100px)' : 'blur(0px)',
          transition: fleetOpen
            ? 'filter 1.56s cubic-bezier(0.19,1,0.22,1)'
            : 'filter 1.3s cubic-bezier(0.19,1,0.22,1)',
        }}
      >
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.45) 100%)',
          }}
        />
      </div>

      <div style={{ position: 'fixed', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={fleetOpen ? 'hidden' : 'visible'}
          style={{
            position: 'absolute',
            top: '50%',
            left: 'clamp(24px, 6vw, 96px)',
            transform: 'translateY(-52%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: 'clamp(340px, 48vw, 640px)',
          }}
        >
          <motion.div
            variants={textVariants}
            style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <div style={{ width: 28, height: 1, background: 'rgba(255,255,255,0.5)' }} />
            <span style={{ fontSize: 9, letterSpacing: '0.35em', color: 'rgba(255,255,255,0.7)' }}>
              PRIVATE MEMBERSHIP · EST. 1975
            </span>
          </motion.div>

          {HEADLINE_LINES.map((line) => (
            <div key={line.text} style={{ overflow: 'hidden' }}>
              <motion.div
                variants={textVariants}
                style={{
                  fontSize: 'clamp(40px, 8vw, 108px)',
                  fontWeight: 400,
                  lineHeight: 0.91,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  color: 'white',
                  fontStyle: line.italic ? 'italic' : 'normal',
                  textShadow: '0 4px 32px rgba(0,0,0,0.35)',
                }}
              >
                {line.text}
              </motion.div>
            </div>
          ))}

          <motion.div
            variants={textVariants}
            style={{
              marginTop: 28,
              fontSize: 'clamp(10px,1vw,11px)',
              letterSpacing: '0.2em',
              maxWidth: '340px',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.6)',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            A PRIVATE WORLD ON OPEN WATER. CURATED VOYAGES, THREE EXTRAORDINARY VESSELS, AND A
            CIRCLE OF MEMBERS WHO UNDERSTAND THAT TRUE LUXURY HAS NO HORIZON.
          </motion.div>
        </motion.div>

        {!scrolled && (
          <div
          className="hero-copy"
          style={{
            position: 'absolute',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 1,
                height: 48,
                background: 'rgba(255,255,255,0.2)',
                overflow: 'hidden',
              }}
            >
              <div
                className="scroll-dot"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 3,
                  height: 3,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.6)',
                }}
              />
            </div>
            <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)' }}>
              SCROLL
            </span>
          </div>
        )}
      </div>

      <a
        className="glass-mid github-badge"
        href="https://github.com/biplabshankar27-code/velora-yachts"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          padding: '0 14px',
          height: 36,
          borderRadius: 100,
          fontSize: 8,
          letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.85)',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path
            fill="rgba(255,255,255,0.9)"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
          />
        </svg>
        <span>GITHUB</span>
      </a>

      <div
        className="glass-mid hero-cta"
        style={{
          padding: 'clamp(12px,1.2vw,16px) clamp(24px,3vw,40px)',
          fontSize: 'clamp(11px,1vw,14px)',
          letterSpacing: '0.2em',
          color: 'white',
          borderRadius: 100,
          cursor: 'pointer',
          transform: ctaTransform,
          opacity: fleetOpen ? 0 : 1,
          transition:
            'transform 0.6s cubic-bezier(0.19,1,0.22,1), opacity 0.5s ease',
        }}
      >
        JOIN THE CLUB
      </div>
    </>
  )
}

