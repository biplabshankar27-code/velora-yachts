import { motion } from 'motion/react'
import AutoVideo from './AutoVideo'

const MODULES = [
  { num: '01', title: 'OCEAN NAVIGATION', pct: 75 },
  { num: '02', title: 'METEOROLOGY', pct: 60 },
  { num: '03', title: 'SEAMANSHIP', pct: 85 },
  { num: '04', title: 'RACE TACTICS', pct: 50 },
  { num: '05', title: 'ENGINEERING SYSTEMS', pct: 40 },
  { num: '06', title: 'LEADERSHIP AT SEA', pct: 70 },
]

export default function Academy() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <AutoVideo
        src="/videos/academy-bg.mp4"
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
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        }}
      >
        <div style={{ marginBottom: 60 }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              color: 'rgba(147,197,253,0.85)',
              marginBottom: 16,
            }}
          >
            VELORA ACADEMY
          </div>
          <h2
            style={{
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 0.9,
              color: 'white',
              maxWidth: 600,
              margin: 0,
            }}
          >
            MASTER THE
            <br />
            SEA.
            <br />
            <em>
              MASTER
              <br />
              YOURSELF.
            </em>
          </h2>
        </div>

        <div
          className="mods-3"
          style={{ marginTop: 48 }}
        >
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.num}
              className="glass-mid"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '28px 28px 24px', borderRadius: 4 }}
            >
              <div
                style={{
                  fontSize: 64,
                  color: 'rgba(255,255,255,0.08)',
                  lineHeight: 1,
                  marginBottom: -8,
                }}
              >
                {mod.num}
              </div>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.35em',
                  color: 'rgba(147,197,253,0.6)',
                  marginBottom: 10,
                }}
              >
                MODULE
              </div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: '0.12em',
                  color: 'white',
                  marginBottom: 8,
                }}
              >
                {mod.title}
              </div>
              <div
                style={{
                  fontSize: 9,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                A STRUCTURED MODULE COMBINING THEORY, SIMULATION, AND SEA TIME WITH OUR SENIOR
                INSTRUCTORS ABOARD THE FLEET.
              </div>
              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    height: 2,
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: 1,
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${mod.pct}%` }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: '100%', background: 'var(--accent)' }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 8,
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.35)',
                    marginTop: 8,
                  }}
                >
                  {mod.pct}% COMPLETE
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

