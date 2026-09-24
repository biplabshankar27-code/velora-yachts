import { motion } from 'motion/react'
import PageOverlay from './PageOverlay'

interface MembershipPageProps {
  isOpen: boolean
  onClose: () => void
}

const TIERS = [
  {
    name: 'SIGNATURE',
    price: '$24,000',
    period: '/ YEAR',
    dark: false,
    features: ['DEDICATED BERTH ACCESS', 'RACE ENTRY DISCOUNTS', 'CONCIERGE HOTLINE', '2 GUEST PASSES / YEAR'],
    cta: 'APPLY',
    ctaStyle: 'navy',
  },
  {
    name: 'COMMODORE',
    price: '$62,000',
    period: '/ YEAR',
    dark: true,
    features: ['PRIORITY CHARTER BOOKING', 'RACE PROGRAMME INCLUDED', 'PERSONAL SHORE CONCIERGE', '4 GUEST PASSES / YEAR'],
    cta: 'APPLY',
    ctaStyle: 'white',
  },
  {
    name: "FOUNDERS' CIRCLE",
    price: 'BY INVITATION ONLY',
    period: '',
    dark: false,
    features: ['JOINT OWNERSHIP OPPORTUNITIES', 'PRIVATE REGATTA HOSTING', 'FLEET-WIDE PRIORITY', 'UNLIMITED GUEST PRIVILEGES'],
    cta: 'ENQUIRE',
    ctaStyle: 'outline',
  },
]

const PERKS = [
  { num: '01', label: 'PRIVATE BERTHS', desc: 'Reserved berths at our home marinas, held year-round for members.' },
  { num: '02', label: 'CAPTAIN ON CALL', desc: 'A senior master assigned to your file, reachable at any hour.' },
  { num: '03', label: 'RACE ENTRIES', desc: 'Club-series berth placements and regatta support crews.' },
  { num: '04', label: 'PROVISIONING', desc: 'Full provisioning on arrival — from cellars to linen, handled.' },
]

export default function MembershipPage({ isOpen, onClose }: MembershipPageProps) {
  return (
    <PageOverlay isOpen={isOpen} onClose={onClose} pageName="MEMBERSHIP">
      <div style={{ padding: 'clamp(48px,6vw,80px)', paddingBottom: 'clamp(32px,4vw,48px)' }}>
        <h2
          style={{
            fontSize: 'clamp(36px,5vw,72px)',
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            color: '#0c0c0e',
            margin: 0,
          }}
        >
          MEMBERSHIP HAS
          <br />
          THREE DOORS.
        </h2>
        <p
          style={{
            fontSize: 11,
            lineHeight: 1.9,
            letterSpacing: '0.12em',
            color: 'rgba(12,12,14,0.55)',
            margin: '24px 0 28px',
            maxWidth: 560,
          }}
        >
          EVERY TIER CARRIES THE SAME STANDARD OF SERVICE — WHAT CHANGES IS HOW DEEP INTO THE CLUB
          YOU WISH TO GO. APPLICATIONS ARE REVIEWED BY THE COMMITTEE WITHIN FOURTEEN DAYS.
        </p>
        <button
          style={{
            background: 'var(--accent)',
            color: 'white',
            padding: '14px 36px',
            fontSize: 10,
            letterSpacing: '0.22em',
            borderRadius: 2,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-serif)',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#253f63')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
        >
          APPLY NOW
        </button>
      </div>

      <div
        className="tiers-page"
        style={{ padding: 'clamp(32px,4vw,48px)' }}
      >
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: tier.dark ? '#1c3557' : 'white',
              color: tier.dark ? 'white' : '#0c0c0e',
              padding: 40,
              borderRadius: 3,
              border: tier.dark ? 'none' : '1px solid rgba(12,12,14,0.06)',
              boxShadow: tier.dark
                ? '0 8px 48px rgba(28,53,87,0.3)'
                : '0 2px 20px rgba(0,0,0,0.05)',
            }}
            className={tier.dark ? undefined : 'card'}
          >
            <div
              style={{
                fontSize: 8,
                letterSpacing: '0.3em',
                color: tier.dark ? 'rgba(147,197,253,0.85)' : 'rgba(12,12,14,0.4)',
                marginBottom: tier.dark ? 8 : 0,
                display: tier.dark ? 'inline-block' : undefined,
                background: tier.dark ? 'rgba(147,197,253,0.15)' : undefined,
                padding: tier.dark ? '4px 12px' : undefined,
                borderRadius: tier.dark ? 2 : undefined,
              }}
            >
              {tier.dark ? 'MOST POPULAR' : tier.name}
            </div>
            {tier.dark && (
              <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.6)', marginTop: 12 }}>
                {tier.name}
              </div>
            )}
            <div
              style={{
                fontSize: 32,
                color: tier.dark ? 'white' : tier.name === "FOUNDERS' CIRCLE" ? '#0c0c0e' : 'var(--accent)',
                margin: '20px 0 4px',
                lineHeight: 1,
              }}
            >
              {tier.price}
            </div>
            {tier.period && (
              <div style={{ fontSize: 9, letterSpacing: '0.2em', marginBottom: 0, color: tier.dark ? 'rgba(255,255,255,0.5)' : 'rgba(12,12,14,0.4)' }}>
                {tier.period}
              </div>
            )}
            <div style={{ height: tier.period ? 24 : 32 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {tier.features.map((f) => (
                <div
                  key={f}
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.15em',
                    color: tier.dark ? 'rgba(255,255,255,0.75)' : 'rgba(12,12,14,0.7)',
                  }}
                >
                  — {f}
                </div>
              ))}
            </div>
            <button
              style={{
                width: '100%',
                padding: 12,
                fontSize: 9,
                letterSpacing: '0.25em',
                borderRadius: 2,
                cursor: 'pointer',
                fontFamily: 'var(--font-serif)',
                background:
                  tier.ctaStyle === 'navy'
                    ? 'var(--accent)'
                    : tier.ctaStyle === 'white'
                      ? 'white'
                      : 'transparent',
                color: tier.ctaStyle === 'white' ? '#1c3557' : tier.ctaStyle === 'outline' ? '#1c3557' : 'white',
                border:
                  tier.ctaStyle === 'outline'
                    ? '1px solid var(--accent)'
                    : 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {tier.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <div
        className="cols-4"
        style={{ padding: 'clamp(32px,4vw,48px)', borderTop: '1px solid rgba(12,12,14,0.07)' }}
      >
        {PERKS.map((perk) => (
          <div key={perk.label}>
            <div
              style={{
                fontSize: 22,
                color: 'rgba(12,12,14,0.15)',
                marginBottom: 10,
              }}
            >
              {perk.num}
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.25em', color: '#0c0c0e', marginBottom: 6 }}>
              {perk.label}
            </div>
            <div style={{ fontSize: 10, lineHeight: 1.8, color: 'rgba(12,12,14,0.55)', textTransform: 'none' }}>
              {perk.desc}
            </div>
          </div>
        ))}
      </div>
    </PageOverlay>
  )
}


