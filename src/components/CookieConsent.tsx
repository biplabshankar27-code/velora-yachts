import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface CookieConsentProps {
  onAccept?: () => void
}

export default function CookieConsent(_: CookieConsentProps) {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="glass-mid"
          style={{
            position: 'fixed',
            bottom: 24,
            left: 24,
            zIndex: 999,
            borderRadius: 4,
            padding: '20px 24px',
            maxWidth: 320,
          }}
        >
          <div
            style={{
              fontSize: 9,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            THIS SITE USES COOKIES TO IMPROVE YOUR EXPERIENCE.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => setVisible(false)}
              style={{
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                fontSize: 8,
                letterSpacing: '0.2em',
                padding: '8px 16px',
                borderRadius: 2,
                cursor: 'pointer',
                fontFamily: 'var(--font-serif)',
              }}
            >
              ACCEPT
            </button>
            <button
              onClick={() => setVisible(false)}
              style={{
                background: 'transparent',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                fontSize: 8,
                letterSpacing: '0.2em',
                padding: '8px 16px',
                borderRadius: 2,
                cursor: 'pointer',
                fontFamily: 'var(--font-serif)',
              }}
            >
              DECLINE
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
