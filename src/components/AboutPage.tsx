import { motion } from 'motion/react'
import PageOverlay from './PageOverlay'

interface AboutPageProps {
  isOpen: boolean
  onClose: () => void
}

const STATS = [
  { value: '50+', label: 'YEARS AT SEA' },
  { value: '3', label: 'VESSELS' },
  { value: '12', label: 'COUNTRIES' },
  { value: '1,400+', label: 'MEMBERS' },
]

const VALUES = [
  { title: 'DISCRETION', desc: 'What happens aboard stays aboard. Our crews are trained and contracted to the highest standards of confidentiality.' },
  { title: 'PRECISION', desc: 'Every itinerary, every berthing window, every provisioning run is planned and verified before you arrive.' },
  { title: 'HERITAGE', desc: 'Fifty years of family ownership. We answer to our members, not to shareholders or market cycles.' },
  { title: 'ADVENTURE', desc: 'The sea rewards the curious. Our programmes go further than comfort alone would suggest — safely, always.' },
]

const TIMELINE = [
  { year: '1975', event: 'FOUNDED IN MONACO BY ÉDOUARD MARCHETTI WITH A SINGLE VESSEL AND TWELVE FOUNDING FAMILIES.' },
  { year: '1981', event: 'EXPANDED TO A THREE-VESSEL FLEET SERVING THE MEDITERRANEAN EXCLUSIVELY.' },
  { year: '1994', event: 'TRANSATLANTIC OPERATIONS LAUNCHED; INAUGURAL CARIBBEAN SEASON COMPLETED.' },
  { year: '2003', event: 'PACIFIC PROGRAMME INTRODUCED; POLYNESIA AND NEW ZEALAND ROUTES ESTABLISHED.' },
  { year: '2012', event: 'ACADEMY PROGRAMME LAUNCHED, FORMALISING OUR SAILING EDUCATION OFFERING.' },
  { year: '2025', event: 'CELEBRATING FIFTY YEARS, VELORA CONTINUES TO DEFINE PRIVATE MARITIME EXCELLENCE.' },
]

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
  return (
    <PageOverlay isOpen={isOpen} onClose={onClose} pageName="ABOUT">
      <div
        className="about-intro"
        style={{ padding: 'clamp(48px,6vw,80px)' }}
      >
        <div>
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
            FIFTY YEARS
            <br />
            AT SEA.
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            alignContent: 'center',
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 'clamp(32px,3.5vw,52px)', color: 'var(--accent)', lineHeight: 1, marginBottom: 8 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.45)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="cols-4"
        style={{ padding: 'clamp(32px,4vw,48px)', borderTop: '1px solid rgba(12,12,14,0.07)' }}
      >
        {VALUES.map((value) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ borderTop: '2px solid var(--accent)', paddingTop: 20 }}
          >
            <div style={{ fontSize: 11, letterSpacing: '0.25em', color: '#0c0c0e', marginBottom: 10 }}>
              {value.title}
            </div>
            <div style={{ fontSize: 10, lineHeight: 1.85, color: 'rgba(12,12,14,0.6)', textTransform: 'none' }}>
              {value.desc}
            </div>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: 'clamp(32px,4vw,48px)',
          marginBottom: 40,
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            color: 'var(--accent)',
            marginBottom: 24,
          }}
        >
          OUR HISTORY
        </div>
        {TIMELINE.map((row, i) => (
          <motion.div
            key={row.year}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 1fr',
              gap: 24,
              borderBottom: '1px solid rgba(12,12,14,0.08)',
              padding: '20px 0',
            }}
          >
            <div style={{ fontSize: 13, letterSpacing: '0.1em', color: 'var(--accent)' }}>
              {row.year}
            </div>
            <div style={{ fontSize: 11, lineHeight: 1.8, color: 'rgba(12,12,14,0.7)' }}>{row.event}</div>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: 'clamp(32px,4vw,48px)',
          paddingBottom: 'clamp(48px,6vw,80px)',
        }}
      >
        <div
          style={{
            background: 'white',
            border: '1px solid rgba(12,12,14,0.06)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
            borderRadius: 4,
            padding: 'clamp(24px,4vw,40px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 10 }}>
              THIS WEBSITE
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', lineHeight: 1.9, color: 'rgba(12,12,14,0.55)' }}>
              OPEN-SOURCE FRONTEND — REACT 19 · VITE 8 · MOTION · GSAP · TAILWIND CSS
            </div>
          </div>
          <a
            href="https://github.com/biplabshankar27-code/velora-yachts"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '12px 28px',
              fontSize: 9,
              letterSpacing: '0.22em',
              color: 'white',
              background: 'var(--accent)',
              border: 'none',
              borderRadius: 2,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#253f63')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
          >
            VIEW SOURCE ↗
          </a>
        </div>
      </div>
    </PageOverlay>
  )
}



