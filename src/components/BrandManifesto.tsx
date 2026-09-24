import { motion } from 'motion/react'
import AutoVideo from './AutoVideo'

export default function BrandManifesto() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <AutoVideo
        src="/videos/manifesto-bg.mp4"
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
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card"
          style={{
            maxWidth: '360px',
            padding: 'clamp(20px,2.5vw,32px)',
            borderRadius: 4,
            textAlign: 'left',
            background: 'rgba(255,255,255,0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 18, height: 1, background: 'rgba(147,197,253,0.6)' }} />
            <span style={{ fontSize: 8.5, letterSpacing: '0.3em', color: 'rgba(147,197,253,0.85)' }}>
              THE VELORA PHILOSOPHY
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(22px,2.4vw,36px)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: 'white',
              margin: '0 0 20px',
            }}
          >
            PRIVATE ACCESS.
            <br />
            <em>OPEN HORIZONS.</em>
          </h2>
          <p
            style={{
              fontSize: 9.5,
              lineHeight: 1.85,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.6)',
              margin: 0,
            }}
          >
            WE CURATE EXPERIENCES FOR THOSE WHO EXPECT STILLNESS, POWER, AND PRECISION AT SEA.
            SINCE 1975, THOSE WHO DEMAND THE FINEST HAVE TRUSTED ONE NAME.
          </p>
          <button
            style={{
              marginTop: 24,
              padding: '11px 24px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 2,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: 'white',
              fontSize: 10,
              letterSpacing: '0.25em',
              cursor: 'pointer',
              fontFamily: 'var(--font-serif)',
              transition: 'background 0.4s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            OUR STORY
          </button>
        </motion.div>
      </div>
    </section>
  )
}

