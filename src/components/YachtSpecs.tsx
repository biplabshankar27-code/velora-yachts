import { useState } from 'react'
import { motion } from 'motion/react'
import { yachts } from '../data/yachts'
import SpecDrawer from './SpecDrawer'
import AutoVideo from './AutoVideo'

export default function YachtSpecs() {
  const [selectedYacht, setSelectedYacht] = useState<string | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const [compareHovered, setCompareHovered] = useState(false)
  const [quickHovered, setQuickHovered] = useState<number | null>(null)
  const [fullHovered, setFullHovered] = useState<number | null>(null)

  const openDrawer = (id: string) => setSelectedYacht(id)

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>
            THE FLEET
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
          THREE VESSELS.
          <br />
          ONE STANDARD.
        </h2>
      </div>

      <div className="yacht-grid">
        {yachts.map((yacht, i) => (
          <motion.div
            key={yacht.id}
            className="yacht-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 4,
              border: '1px solid rgba(12,12,14,0.06)',
              background: 'white',
              transform: hovered === i ? 'translateY(-4px)' : 'none',
              boxShadow: hovered === i ? '0 16px 56px rgba(0,0,0,0.12)' : '0 2px 20px rgba(0,0,0,0.05)',
              transition: 'transform 0.5s var(--ease-luxury), box-shadow 0.5s var(--ease-luxury)',
            }}
          >
            <div style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative' }}>
              <AutoVideo
                className="yacht-card-video"
                src={`/videos/fleet-${yacht.id}.mp4`}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s var(--ease-luxury)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(10,15,26,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: 100,
                  padding: '6px 14px',
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {`V-0${i + 1}`}
              </div>
              <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                <div
                  style={{
                    fontSize: 8,
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 4,
                  }}
                >
                  {yacht.tagline}
                </div>
                <div style={{ fontSize: 17, letterSpacing: '0.08em', color: 'white' }}>
                  {yacht.name}
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '24px 24px 28px' }}>
              <div className="stats-4" style={{ marginBottom: 20 }}>
                {yacht.quickSpecs.map((spec) => (
                  <div key={spec.label}>
                    <div
                      style={{
                        fontSize: 8,
                        letterSpacing: '0.25em',
                        color: 'rgba(12,12,14,0.38)',
                        marginBottom: 2,
                      }}
                    >
                      {spec.label}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        letterSpacing: '0.1em',
                        color: 'var(--accent)',
                        fontWeight: 400,
                      }}
                    >
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => openDrawer(yacht.id)}
                  onMouseEnter={() => setQuickHovered(i)}
                  onMouseLeave={() => setQuickHovered(null)}
                  style={{
                    background: quickHovered === i ? '#253f63' : 'var(--accent)',
                    color: 'white',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    borderRadius: 2,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-serif)',
                    transition: 'background 0.3s ease',
                  }}
                >
                  QUICK SPECS
                </button>
                <button
                  onClick={() => openDrawer(yacht.id)}
                  onMouseEnter={() => setFullHovered(i)}
                  onMouseLeave={() => setFullHovered(null)}
                  style={{
                    background: 'transparent',
                    border: `1px solid ${fullHovered === i ? 'rgba(12,12,14,0.8)' : 'rgba(12,12,14,0.5)'}`,
                    color: fullHovered === i ? '#0c0c0e' : 'rgba(12,12,14,0.5)',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    borderRadius: 2,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-serif)',
                    transition: 'color 0.3s ease, border-color 0.3s ease',
                  }}
                >
                  FULL SHEET
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <button
          onClick={() => openDrawer(yachts[0].id)}
          onMouseEnter={() => setCompareHovered(true)}
          onMouseLeave={() => setCompareHovered(false)}
          style={{
            background: compareHovered ? '#253f63' : 'var(--accent)',
            color: 'white',
            padding: '14px 40px',
            fontSize: 10,
            letterSpacing: '0.22em',
            borderRadius: 2,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-serif)',
            transition: 'background 0.3s ease',
          }}
        >
          COMPARE ALL THREE
        </button>
      </div>

      <SpecDrawer yachtId={selectedYacht} onClose={() => setSelectedYacht(null)} />
    </section>
  )
}

