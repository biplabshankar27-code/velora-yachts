import { motion } from 'motion/react'
import AutoVideo from './AutoVideo'

const TIERS = [
  {
    name: 'SIGNATURE',
    level: 'ENTRY LEVEL',
    price: '$12,000',
    period: 'PER YEAR',
    description:
      'YOUR INTRODUCTION TO THE CLUB — ESSENTIAL ACCESS TO THE FLEET, THE PROGRAMMES, AND THE SERVICE.',
    features: ['DEDICATED BERTH ACCESS', 'RACE ENTRY DISCOUNTS', 'CONCIERGE HOTLINE', '2 GUEST PASSES / YEAR'],
    accent: false,
  },
  {
    name: 'COMMODORE',
    level: 'MOST POPULAR',
    price: '$32,000',
    period: 'PER YEAR',
    description:
      'THE COMPLETE CLUB EXPERIENCE — UNLIMITED CHARTER PRIORITY, RACING SEATS, AND FULL CONCIERGE SERVICE.',
    features: ['PRIORITY CHARTER BOOKING', 'RACE PROGRAMME INCLUDED', 'PERSONAL SHORE CONCIERGE', '4 GUEST PASSES / YEAR'],
    accent: true,
  },
  {
    name: "FOUNDERS' CIRCLE",
    level: 'INVITATION ONLY',
    price: 'BY INVITATION',
    period: '',
    description:
      'FOR THE FEW WHO WILL SHAPE OUR NEXT FIFTY YEARS — EVERY PRIVILEGE, EVERY VESSEL, EVERY HORIZON.',
    features: ['JOINT OWNERSHIP OPPORTUNITIES', 'PRIVATE REGATTA HOSTING', 'VESSEL PRIORITY ACROSS FLEET', 'UNLIMITED GUEST PRIVILEGES'],
    accent: false,
  },
]

export default function Membership() {
  return (
    <section
      style={{
        background: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>
            MEMBERSHIP
          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            color: '#0c0c0e',
            margin: 0,
          }}
        >
          SELECT YOUR TIER.
        </h2>
      </div>

      <div className="split-2" style={{ alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={tier.accent ? 'card-accent' : 'card'}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: 32 }}
            >
              {tier.accent && (
                <div
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    fontSize: 8,
                    letterSpacing: '0.3em',
                    padding: '4px 12px',
                    borderRadius: 2,
                    marginBottom: 16,
                    display: 'inline-block',
                  }}
                >
                  MOST POPULAR
                </div>
              )}
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'rgba(12,12,14,0.4)',
                  marginBottom: 4,
                }}
              >
                {tier.name}
              </div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.25em',
                  color: 'var(--accent)',
                  marginBottom: 16,
                }}
              >
                {tier.level}
              </div>
              <div
                style={{
                  fontSize: 40,
                  color: tier.accent ? 'var(--accent)' : '#0c0c0e',
                  lineHeight: 1,
                  marginBottom: tier.period ? 4 : 20,
                }}
              >
                {tier.price}
              </div>
              {tier.period && (
                <div style={{ fontSize: 9, color: 'rgba(12,12,14,0.4)', marginBottom: 20 }}>
                  {tier.period}
                </div>
              )}
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  letterSpacing: '0.12em',
                  color: 'rgba(12,12,14,0.55)',
                  margin: '0 0 20px',
                }}
              >
                {tier.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                {tier.features.map((f) => (
                  <div key={f} style={{ fontSize: 9, letterSpacing: '0.15em', color: 'rgba(12,12,14,0.7)' }}>
                    — {f}
                  </div>
                ))}
              </div>
              <button
                style={{
                  background: 'var(--accent)',
                  color: 'white',
                  width: '100%',
                  padding: 12,
                  fontSize: 9,
                  letterSpacing: '0.25em',
                  border: 'none',
                  borderRadius: 2,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-serif)',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#253f63')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
              >
                APPLY NOW
              </button>
            </motion.div>
          ))}
        </div>

        <div className="membership-side">
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
            <AutoVideo
              src="/videos/interior-tour.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: 560,
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60%',
                background:
                  'linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.6) 40%, transparent 80%)',
              }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 32 }}>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'rgba(147,197,253,0.85)',
                  marginBottom: 10,
                }}
              >
                OCEAN ECLIPSE — MAIN SALON
              </div>
              <div
                style={{
                  fontSize: 11,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: 280,
                  marginBottom: 0,
                }}
              >
                "THE SALON IS WHERE EVERY VOYAGE BEGINS AND ENDS — LIGHT, TEAK, AND THE SOUND OF THE
                SEA."
              </div>
              <button
                className="glass-mid"
                style={{
                  marginTop: 20,
                  padding: '12px 28px',
                  color: 'white',
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  borderRadius: 2,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                APPLY FOR MEMBERSHIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

