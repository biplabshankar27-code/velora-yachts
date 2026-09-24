import { useEffect, useRef, useState } from 'react'

interface HeaderProps {
  menuOpen: boolean
  onBlogOpen: () => void
  onFleetOpen: () => void
  onJourneysOpen: () => void
  onMembershipOpen: () => void
  onAboutOpen: () => void
}

const NAV_LINKS = [
  { label: 'JOURNEYS', handler: 'onJourneysOpen' },
  { label: 'FLEET', handler: 'onFleetOpen' },
  { label: 'MEMBERSHIP', handler: 'onMembershipOpen' },
  { label: 'ABOUT US', handler: 'onAboutOpen' },
  { label: 'BLOG', handler: 'onBlogOpen' },
] as const

export default function Header({
  menuOpen,
  onBlogOpen,
  onFleetOpen,
  onJourneysOpen,
  onMembershipOpen,
  onAboutOpen,
}: HeaderProps) {
  const pillRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [ctaHovered, setCtaHovered] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (!pillRef.current) return
      if (window.scrollY > 50) {
        pillRef.current.classList.add('scrolled')
      } else {
        pillRef.current.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handlers: Record<(typeof NAV_LINKS)[number]['handler'], () => void> = {
    onJourneysOpen,
    onFleetOpen,
    onMembershipOpen,
    onAboutOpen,
    onBlogOpen,
  }

  const links = NAV_LINKS.map((l) => ({
    ...l,
    action: handlers[l.handler],
  }))

  return (
    <div ref={pillRef} className="navbar-pill">
      <div
        style={{
          borderRight: '1px solid rgba(12,12,14,0.08)',
          padding: '0 20px 0 14px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 20 20">
          <circle cx="10" cy="5" r="2.4" stroke="#1c3557" strokeWidth="1.5" fill="none" />
          <line x1="10" y1="7.4" x2="10" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 11 Q10 14 15 11" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <line x1="7" y1="16" x2="13" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 16, letterSpacing: '0.28em', color: '#0c0c0e' }}>VELORA</span>
      </div>
      <nav className="header-links">
      {links.map((link) => (
        <a
          key={link.label}
          href="#"
          onClick={(e) => {
            e.preventDefault()
            link.action()
          }}
          onMouseEnter={() => setHovered(link.label)}
          onMouseLeave={() => setHovered(null)}
          style={{
            padding: '0 16px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            fontSize: 10,
            letterSpacing: '0.18em',
            color: hovered === link.label ? '#0c0c0e' : 'rgba(12,12,14,0.55)',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
          }}
        >
          {link.label}
        </a>
      ))}
      </nav>
      <div style={{ padding: '0 6px', flexShrink: 0, marginLeft: 'auto' }}>
        <button
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          style={{
            background: ctaHovered ? '#253f63' : '#1c3557',
            borderRadius: 100,
            padding: '9px 22px',
            fontSize: 10,
            letterSpacing: '0.18em',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-serif)',
            transform: menuOpen ? 'translateX(calc(-1 * clamp(260px, 38vw, 420px)))' : 'none',
            transition: 'background 0.3s ease, transform 0.3s ease',
          }}
        >
          JOIN THE CLUB
        </button>
      </div>
    </div>
  )
}

