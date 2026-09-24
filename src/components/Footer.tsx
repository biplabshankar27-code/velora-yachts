

const NAV_LINKS = ['JOURNEYS', 'FLEET', 'MEMBERSHIP', 'ACADEMY', 'BLOG']
const SERVICES = ['PRIVATE CHARTER', 'CORPORATE EVENTS', 'RACE PROGRAMME', 'CONCIERGE', 'PRESS & MEDIA']

export default function Footer() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 480,
        background: 'linear-gradient(to bottom, #12203a 0%, #0a1526 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,10,20,0.75) 0%, rgba(5,10,20,0.82) 100%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1fr',
            gap: 80,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <svg width="22" height="22" viewBox="0 0 20 20">
                <circle cx="10" cy="5" r="2.4" stroke="white" strokeWidth="1.5" fill="none" />
                <line x1="10" y1="7.4" x2="10" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 11 Q10 14 15 11" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <line x1="7" y1="16" x2="13" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 20, letterSpacing: '0.28em', color: 'white' }}>VELORA</span>
            </div>
            <div
              style={{
                fontSize: 9,
                letterSpacing: '0.28em',
                color: 'rgba(255,255,255,0.4)',
                marginTop: 16,
              }}
            >
              SINCE 1975. THE SEA IS YOURS.
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: 8,
                letterSpacing: '0.35em',
                color: 'rgba(147,197,253,0.7)',
                marginBottom: 20,
              }}
            >
              NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: 8,
                letterSpacing: '0.35em',
                color: 'rgba(147,197,253,0.7)',
                marginBottom: 20,
              }}
            >
              SERVICES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SERVICES.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span style={{ fontSize: 8, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)' }}>
            Â© 2025 VELORA PRIVATE YACHT CLUB. ALL RIGHTS RESERVED.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['PRIVACY POLICY', 'TERMS'].map((legal) => (
              <a
                key={legal}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontSize: 8,
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.25)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
              >
                {legal}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

