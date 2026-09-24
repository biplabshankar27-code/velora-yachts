import { motion } from 'motion/react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section
      style={{
        background: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) 0',
      }}
    >
      <div style={{ paddingLeft: 'clamp(24px,6vw,96px)', marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>
            MEMBER VOICES
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
          THOSE WHO KNOW.
        </h2>
      </div>

      <div
        className="testimonial-rail scrollbar-hide"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: 20,
          paddingLeft: 'clamp(24px,6vw,96px)',
          paddingRight: 'clamp(24px,6vw,96px)',
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flexShrink: 0,
              width: 'clamp(280px,30vw,380px)',
              padding: 36,
              scrollSnapAlign: 'start',
            }}
          >
            <div
              style={{
                fontStyle: 'italic',
                fontSize: 12,
                lineHeight: 1.9,
                color: 'rgba(12,12,14,0.7)',
                marginBottom: 28,
                textTransform: 'none',
              }}
            >
              {t.quote.charAt(0)}
              {t.quote.slice(1).toLowerCase()}
            </div>
            <div
              style={{
                width: 24,
                height: 1,
                background: 'var(--accent)',
                marginBottom: 20,
              }}
            />
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#0c0c0e', marginBottom: 4 }}>
              {t.name}
            </div>
            <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)' }}>
              {t.role} · {t.tag}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
