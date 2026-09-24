import { useState } from 'react'
import { motion } from 'motion/react'

const inputStyle: React.CSSProperties = {
  background: 'rgba(12,12,14,0.04)',
  border: '1px solid rgba(12,12,14,0.1)',
  color: '#0c0c0e',
  fontSize: 11,
  letterSpacing: '0.12em',
  padding: '14px 16px',
  borderRadius: 2,
  width: '100%',
  fontFamily: 'var(--font-serif)',
  outline: 'none',
  transition: 'border-color 0.3s ease',
}

const labelStyle: React.CSSProperties = {
  fontSize: 8,
  letterSpacing: '0.3em',
  color: 'rgba(12,12,14,0.5)',
  marginBottom: 6,
  display: 'block',
}

export default function ConciergeForm() {
  const [submitHovered, setSubmitHovered] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      style={{
        background: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>
            PRIVATE CONCIERGE
          </span>
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
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
          CHARTER A
          <br />
          MOMENT.
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: 720,
          margin: '0 auto',
          background: 'white',
          border: '1px solid rgba(12,12,14,0.06)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          borderRadius: 4,
          padding: 'clamp(32px,5vw,56px)',
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: 24, color: '#0c0c0e', marginBottom: 12 }}>
              REQUEST RECEIVED.
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>
              OUR CONCIERGE TEAM WILL BE IN TOUCH WITHIN 24 HOURS.
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <div className="form-row" style={{ marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>FULL NAME</label>
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  style={{ ...inputStyle, textTransform: 'none' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(12,12,14,0.1)')}
                />
              </div>
              <div>
                <label style={labelStyle}>EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="NAME@EMAIL.COM"
                  style={{ ...inputStyle, textTransform: 'none' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(12,12,14,0.1)')}
                />
              </div>
            </div>
            <div className="form-row" style={{ marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>PHONE NUMBER</label>
                <input
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                  style={{ ...inputStyle, textTransform: 'none' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(12,12,14,0.1)')}
                />
              </div>
              <div>
                <label style={labelStyle}>PREFERRED VESSEL</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option>OCEAN ECLIPSE</option>
                  <option>BLACK SOVEREIGN</option>
                  <option>AZURE HORIZON</option>
                  <option>NO PREFERENCE</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>DESTINATION OR REGION</label>
              <input
                type="text"
                placeholder="E.G. MEDITERRANEAN, CARIBBEAN"
                style={{ ...inputStyle, textTransform: 'none' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(12,12,14,0.1)')}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>PREFERRED DATES</label>
              <input
                type="text"
                placeholder="Please specify or note flexibility"
                style={{ ...inputStyle, textTransform: 'none' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(12,12,14,0.1)')}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>ADDITIONAL REQUESTS</label>
              <textarea
                rows={4}
                placeholder="Share any particular wishes or requirements..."
                style={{ ...inputStyle, resize: 'vertical', textTransform: 'none' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(12,12,14,0.1)')}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onMouseEnter={() => setSubmitHovered(true)}
              onMouseLeave={() => setSubmitHovered(false)}
              style={{
                width: '100%',
                background: submitHovered ? '#253f63' : 'var(--accent)',
                color: 'white',
                padding: 16,
                fontSize: 10,
                letterSpacing: '0.25em',
                border: 'none',
                borderRadius: 2,
                marginTop: 8,
                cursor: 'pointer',
                fontFamily: 'var(--font-serif)',
              }}
            >
              SUBMIT REQUEST
            </motion.button>
            <div
              style={{
                fontSize: 8,
                letterSpacing: '0.2em',
                color: 'rgba(12,12,14,0.35)',
                textAlign: 'center',
                marginTop: 16,
              }}
            >
              ALL ENQUIRIES ARE HANDLED WITH THE STRICTEST CONFIDENCE.
            </div>
          </form>
        )}
      </motion.div>
    </section>
  )
}

