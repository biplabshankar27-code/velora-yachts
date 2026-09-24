import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const FAQS = [
  {
    q: 'HOW DOES MEMBERSHIP WORK?',
    a: 'MEMBERSHIP IS ANNUAL AND TIER-BASED. SIGNATURE, COMMODORE, AND FOUNDERS\u2019 CIRCLE EACH OFFER A DIFFERENT DEPTH OF ACCESS TO THE FLEET, THE ACADEMY, AND OUR EVENT PROGRAMME. APPLICATIONS ARE REVIEWED PERSONALLY BY OUR COMMITTEE.',
  },
  {
    q: 'WHAT VESSELS ARE IN THE FLEET?',
    a: 'THREE VESSELS: OCEAN ECLIPSE, BLACK SOVEREIGN, AND AZURE HORIZON. EACH IS MAINTAINED TO THE SAME STANDARD AND CREWED BY OUR OWN TEAMS.',
  },
  {
    q: 'CAN I CHARTER FOR CORPORATE EVENTS?',
    a: 'YES. WE SPECIALIZE IN FULL-SERVICE CORPORATE CHARTERS — BOARD MEETINGS, PRODUCT LAUNCHES, AND INCENTIVE RETREATS — WITH COMPLETE DISCRETION FROM PLANNING THROUGH DEPARTURE.',
  },
  {
    q: 'IS VELORA AVAILABLE INTERNATIONALLY?',
    a: 'OUR PROGRAMMES OPERATE ACROSS THE MEDITERRANEAN, THE CARIBBEAN, AND THE PACIFIC, WITH SEASONAL ITINERARIES CURATED BY OUR VOYAGE TEAM.',
  },
  {
    q: 'HOW DO I JOIN THE RACING PROGRAMME?',
    a: 'THE RACING PROGRAMME IS AVAILABLE FROM THE COMMODORE TIER UPWARD. MEMBERS JOIN OUR CLUB SERIES AND SELECTED INTERNATIONAL REGATTAS WITH PROFESSIONAL SUPPORT CREWS.',
  },
  {
    q: 'WHAT DOES THE CONCIERGE SERVICE COVER?',
    a: 'EVERYTHING FROM PROVISIONING, BERTHING, CUSTOMS AND CLEARANCE TO TRANSFERS, ENTERTAINMENT, AND SPECIAL OCCASIONS — A SINGLE TEAM, AVAILABLE AROUND THE CLOCK.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      style={{
        background: 'var(--bg-base)',
        maxWidth: 800,
        margin: '0 auto',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>FAQ</span>
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
          WHAT YOU NEED TO KNOW.
        </h2>
      </div>

      <div>
        {FAQS.map((item, i) => {
          const open = openIndex === i
          return (
            <div key={item.q} style={{ borderBottom: '1px solid rgba(12,12,14,0.08)' }}>
              <div
                onClick={() => setOpenIndex(open ? null : i)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  padding: '24px 0',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    letterSpacing: '0.12em',
                    color: open ? '#0c0c0e' : 'rgba(12,12,14,0.6)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontSize: 12, color: 'var(--accent)', display: 'inline-block' }}
                >
                  ↓
                </motion.span>
              </div>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        lineHeight: 1.9,
                        letterSpacing: '0.15em',
                        color: 'rgba(12,12,14,0.52)',
                        padding: '0 0 24px',
                      }}
                    >
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
