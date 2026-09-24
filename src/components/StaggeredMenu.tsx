import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import './StaggeredMenu.css';

interface StaggeredMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onFleetOpen: () => void;
}

// ── Edit your nav links here ──────────────────────────────────────────────────
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Fleet', href: '/fleet' },
  { label: 'Membership', href: '/membership' },
  { label: 'Regattas & Events', href: '/events' },
  { label: 'Academy', href: '/academy' },
  { label: 'Contact', href: '/contact' },
];

// ── Edit your social links here ───────────────────────────────────────────────
const socialItems = [
  { label: 'Instagram', href: 'https://instagram.com/yourhandle' },
  { label: 'Facebook', href: 'https://facebook.com/yourpage' },
  { label: 'Twitter', href: 'https://twitter.com/yourhandle' },
];

export default function StaggeredMenu({ isOpen, onToggle, onFleetOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prelayer1Ref = useRef<HTMLDivElement>(null);
  const prelayer2Ref = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialsRef = useRef<HTMLDivElement>(null);
  const menuLabelRef = useRef<HTMLSpanElement>(null);
  const closeLabelRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const animateOpen = useCallback(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;

    // Swap label: MENU slides up, CLOSE follows
    tl.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' });
    tl.to(closeLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, '<');

    // Pre-layers flash in (staggered 80ms apart)
    tl.to(prelayer1Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0);
    tl.to(prelayer2Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0.08);

    // Main panel slides in
    tl.to(panelRef.current, { x: 0, duration: 0.8, ease: 'power4.out' }, 0.15);

    // Pre-layers retreat behind panel
    tl.to([prelayer1Ref.current, prelayer2Ref.current], { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5);

    // Nav items stagger up from below their clip container
    const items = navItemsRef.current.filter(Boolean);
    tl.fromTo(
      items,
      { yPercent: 140, rotate: 10 },
      { yPercent: 0, rotate: 0, duration: 1, stagger: 0.06, ease: 'power4.out' },
      0.3
    );

    // Socials fade in
    tl.fromTo(
      socialsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      0.7
    );
  }, []);

  const animateClose = useCallback(() => {
    const tl = gsap.timeline();
    tlRef.current = tl;

    // Swap label back
    tl.to(menuLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' });
    tl.to(closeLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, '<');

    // Socials + items exit
    tl.to(socialsRef.current, { opacity: 0, y: 20, duration: 0.3, ease: 'power3.in' }, 0);
    const items = navItemsRef.current.filter(Boolean);
    tl.to(items, { yPercent: 140, rotate: -5, duration: 0.5, stagger: 0.03, ease: 'power3.in' }, 0);

    // Panel slides out
    tl.to(panelRef.current, { x: '100%', duration: 0.7, ease: 'power3.inOut' }, 0.2);

    // Reset pre-layers off-screen
    tl.set([prelayer1Ref.current, prelayer2Ref.current], { x: '100%' });
  }, []);

  useEffect(() => {
    tlRef.current?.kill(); // always kill the previous timeline before starting a new one
    if (isOpen) animateOpen();
    else animateClose();
  }, [isOpen, animateOpen, animateClose]);

  const handleItemClick = (item: (typeof menuItems)[number]) => {
    if (item.href === '/fleet') {
      onFleetOpen();
      onToggle();
    }
  };

  return (
    <div className="staggered-menu">
      {/* Toggle button */}
      <button className={`menu-toggle ${isOpen ? 'is-open' : ''}`} onClick={onToggle}>
        <span className="menu-toggle-label">
          <span ref={menuLabelRef}>MENU</span>
          <span ref={closeLabelRef} style={{ top: '100%' }}>CLOSE</span>
        </span>
        <span className="menu-toggle-icon">+</span>
      </button>

      {/* Invisible overlay — clicking outside closes the menu */}
      {isOpen && <div className="menu-overlay" onClick={onToggle} />}

      {/* Colour pre-layers */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* Main panel */}
      <div ref={panelRef} className="menu-panel">
        <ul className="menu-nav">
          {menuItems.map((item, i) => (
            <li key={item.label} ref={(el) => { navItemsRef.current[i] = el; }}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div ref={socialsRef} className="menu-socials" style={{ opacity: 0 }}>
          <div className="menu-socials-title">Socials</div>
          <div className="menu-socials-links">
            {socialItems.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
