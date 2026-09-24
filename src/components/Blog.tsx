import { motion } from 'motion/react'
import PageOverlay from './PageOverlay'

interface BlogProps {
  isOpen: boolean
  onClose: () => void
}

const ARTICLES = [
  {
    num: '01',
    category: 'DESTINATIONS',
    date: 'JANUARY 2025',
    title: 'THE AMALFI CORRIDOR',
    excerpt: 'TRACING THE MOST PHOTOGRAPHED COASTLINE IN THE MEDITERRANEAN — AND THE ANCHORAGES ONLY CREW KNOW.',
    gradient: 'linear-gradient(135deg, #1c2d45 0%, #2a4a73 100%)',
  },
  {
    num: '02',
    category: 'SEAMANSHIP',
    date: 'DECEMBER 2024',
    title: 'ON STILL WATER',
    excerpt: 'WHAT FIFTY YEARS OF DEAD CALMS HAVE TAUGHT OUR CAPTAINS ABOUT PATIENCE, TIMING, AND THE SEA.',
    gradient: 'linear-gradient(135deg, #22344d 0%, #33567e 100%)',
  },
  {
    num: '03',
    category: 'VOYAGES',
    date: 'NOVEMBER 2024',
    title: 'THE AEGEAN REWRITTEN',
    excerpt: 'A SEVEN-DAY ROUTE THROUGH THE CYCLADES THAT AVOIDS EVERY HARBOUR EVERYONE ELSE HEADS FOR.',
    gradient: 'linear-gradient(135deg, #1e3348 0%, #2d5180 100%)',
  },
  {
    num: '04',
    category: 'DESIGN',
    date: 'OCTOBER 2024',
    title: 'HULL DESIGN IN THE AGE OF SILENCE',
    excerpt: 'HOW HYBRID PROPULSION IS CHANGING WHAT A QUIET YACHT SOUNDS LIKE UNDERWAY.',
    gradient: 'linear-gradient(135deg, #17253a 0%, #274467 100%)',
  },
]

export default function Blog({ isOpen, onClose }: BlogProps) {
  return (
    <PageOverlay isOpen={isOpen} onClose={onClose} pageName="JOURNAL">
      <div className="blog-featured" style={{ marginBottom: 0 }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #1c2d45, #2a4a73)',
            padding: 'clamp(48px,6vw,80px)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              fontSize: 8,
              letterSpacing: '0.3em',
              marginBottom: 24,
              width: 'fit-content',
            }}
          >
            FEATURED
          </div>
          <div style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)', marginBottom: 16 }}>
            FEBRUARY 2025 · VOYAGE NOTES
          </div>
          <div style={{ width: 32, height: 1, background: 'rgba(147,197,253,0.6)', marginBottom: 24 }} />
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 400, lineHeight: 1.05, margin: '0 0 24px' }}>
            MONACO, THREE WAYS.
          </h2>
          <p style={{ fontSize: 11, lineHeight: 1.9, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', margin: 0, textTransform: 'none' }}>
            One port, three entirely different weekends: the regatta crowd, the collector's berth, and the season-old families who arrive by tender from the roadstead. Our voyage team explains how to choose yours.
          </p>
        </div>
        <div
          style={{
            background: 'white',
            padding: 'clamp(48px,6vw,80px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 24 }}>
            FROM THE EDITOR
          </div>
          <p
            style={{
              fontStyle: 'italic',
              fontSize: 'clamp(18px,2vw,26px)',
              lineHeight: 1.5,
              color: '#0c0c0e',
              margin: '0 0 32px',
              textTransform: 'none',
            }}
          >
            "The sea does not reward those who are too anxious, too greedy, or too impatient. One should lie empty, open, choiceless — waiting for a season at anchor to teach what no marina ever will."
          </p>
          <div style={{ width: 32, height: 1, background: 'var(--accent)', marginBottom: 24 }} />
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              fontSize: 10,
              letterSpacing: '0.22em',
              color: '#1c3557',
              textDecoration: 'none',
            }}
          >
            CONTINUE READING →
          </a>
        </div>
      </div>

      <div className="blog-grid" style={{ padding: 'clamp(40px,5vw,64px)' }}>
        {ARTICLES.map((article, i) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="card"
            style={{ overflow: 'hidden', borderRadius: 4 }}
          >
            <div
              style={{
                height: 180,
                background: article.gradient,
                position: 'relative',
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)' }}>
                  {article.category}
                </span>
                <span style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>
                  {article.num}
                </span>
              </div>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                VELORA JOURNAL
              </div>
            </div>
            <div style={{ background: 'white', padding: 24 }}>
              <div style={{ fontSize: 8, letterSpacing: '0.25em', color: 'rgba(12,12,14,0.4)', marginBottom: 12 }}>
                {article.date}
              </div>
              <div style={{ fontSize: 16, color: '#0c0c0e', marginBottom: 12, lineHeight: 1.2 }}>
                {article.title}
              </div>
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  letterSpacing: '0.08em',
                  color: 'rgba(12,12,14,0.55)',
                  margin: '0 0 20px',
                  textTransform: 'none',
                }}
              >
                {article.excerpt.charAt(0)}
                {article.excerpt.slice(1).toLowerCase()}
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                READ MORE →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </PageOverlay>
  )
}

