import { motion, AnimatePresence } from 'motion/react'
import { yachts } from '../data/yachts'

interface SpecDrawerProps {
  yachtId: string | null
  onClose: () => void
}

export default function SpecDrawer({ yachtId, onClose }: SpecDrawerProps) {
  const yacht = yachts.find((y) => y.id === yachtId) || null

  return (
    <AnimatePresence>
      {yacht && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(0,0,0,0.4)',
            }}
          />
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="spec-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 'min(440px, 100vw)',
              maxWidth: '100vw',
              height: '100vh',
              zIndex: 200,
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: 40 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginBottom: 32,
                }}
              >
                <button
                  onClick={onClose}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(12,12,14,0.15)',
                    color: '#0c0c0e',
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    fontSize: 16,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-serif)',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = 'rgba(12,12,14,0.5)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = 'rgba(12,12,14,0.15)')
                  }
                >
                  ×
                </button>
              </div>

              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.3em',
                  color: 'var(--accent)',
                  marginBottom: 8,
                }}
              >
                {yacht.tagline}
              </div>
              <h2
                style={{
                  fontSize: 'clamp(28px,3vw,38px)',
                  fontWeight: 400,
                  color: '#0c0c0e',
                  margin: '0 0 12px',
                  lineHeight: 1,
                }}
              >
                {yacht.name}
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3,1fr)',
                  gap: 12,
                  padding: '20px 0',
                  borderTop: '1px solid rgba(12,12,14,0.08)',
                  borderBottom: '1px solid rgba(12,12,14,0.08)',
                  marginBottom: 32,
                }}
              >
                {yacht.quickSpecs.map((spec) => (
                  <div key={spec.label}>
                    <div
                      style={{
                        fontSize: 7,
                        letterSpacing: '0.2em',
                        color: 'rgba(12,12,14,0.38)',
                        marginBottom: 3,
                      }}
                    >
                      {spec.label}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--accent)' }}>{spec.value}</div>
                  </div>
                ))}
              </div>

              {yacht.fullSpecs.map((group) => (
                <div key={group.category} style={{ marginBottom: 32 }}>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.3em',
                      color: 'var(--accent)',
                      borderBottom: '1px solid rgba(12,12,14,0.08)',
                      paddingBottom: 8,
                      marginBottom: 14,
                    }}
                  >
                    {group.category}
                  </div>
                  {group.specs.map((spec) => (
                    <div
                      key={spec.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '7px 0',
                      }}
                    >
                      <span style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.45)' }}>
                        {spec.label}
                      </span>
                      <span style={{ fontSize: 10, letterSpacing: '0.1em', color: '#0c0c0e' }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
