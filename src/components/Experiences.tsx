import { motion } from 'motion/react'
import AutoVideo from './AutoVideo'

const CARDS = [
  {
    category: 'PRIVATE CHARTER',
    title: 'VESSEL & CREW',
    description:
      'CUSTOM ITINERARIES ACROSS THE MEDITERRANEAN TO THE PACIFIC — CHARTER ANY VESSEL IN THE FLEET WITH A DEDICATED CREW.',
  },
  {
    category: 'RACING PROGRAM',
    title: 'OFFSHORE & INSHORE',
    description:
      'JOIN OUR COMPETITIVE RACING CALENDAR — COASTAL REGATTAS, OFFSHORE PASSAGES, AND THE ANNUAL CLUB SERIES.',
  },
  {
    category: 'CONCIERGE',
    title: '24 / 7 ACCESS',
    description:
      'EVERY DETAIL HANDLED — PROVISIONING, BERTHING, CUSTOMS, AND TRANSFERS — SO YOU STEP ABOARD AND SIMPLY SAIL.',
  },
]

export default function Experiences() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <AutoVideo src="/videos/experiences-bg.mp4"
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
          opacity: 1,
        }}
      />
      <div
        className="split-2"
        style={{
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          alignContent: 'center',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 24, height: 1, background: 'rgba(147,197,253,0.6)' }} />
            <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)' }}>
              CURATED FOR MEMBERS
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px,4.5vw,72px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: 'white',
              margin: 0,
            }}
          >
            LIFE BEYOND
            <br />
            THE HORIZON
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.category}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card"
              style={{ padding: '24px 28px', borderRadius: 4 }}
            >
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'rgba(147,197,253,0.7)',
                  marginBottom: 8,
                }}
              >
                {card.category}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: 'white',
                  letterSpacing: '0.05em',
                  marginBottom: 12,
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

