'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '18px 20px',
  borderRadius: '10px',
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.04)',
  color: '#f0efe8',
  fontSize: '1rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.3s ease',
}

const contactInfo = [
  { label: 'Email', value: 'hello@orbitcrew.io' },
  { label: 'Response time', value: 'Within 24 hours' },
  { label: 'Timezone', value: 'IST / GMT+5:30' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg-dark)' }}>

      {/* BACKGROUND */}
      <div className="mesh-bg" aria-hidden>
        <div className="blob" />
      </div>

      <div className="container" style={{ paddingTop: '140px', paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* LEFT: Info */}
          <div>
            <Reveal>
              <span className="label">Contact</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="h1" style={{ marginTop: 20, lineHeight: 1.05 }}>
                Let's build<br />together.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="body-large" style={{ marginTop: 28, opacity: 0.6, maxWidth: 420 }}>
                Tell us about your agency and your pipeline. We'll let you know if we're a fit — no pressure, no pitch.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 28 }}>
                {contactInfo.map((item, i) => (
                  <div key={i}>
                    <p className="label" style={{ color: '#888', marginBottom: 6 }}>{item.label}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div style={{ marginTop: 60, padding: '24px', borderRadius: 12, border: '1px solid rgba(255,75,31,0.2)', background: 'rgba(255,75,31,0.05)' }}>
                <p className="label" style={{ marginBottom: 8 }}>NDA first</p>
                <p style={{ opacity: 0.6, fontSize: '0.95rem' }}>We sign NDAs before reviewing any client materials. Your client relationships are fully protected.</p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="glass-card"
                style={{ padding: 60, borderRadius: 20, textAlign: 'center' }}
              >
                <div style={{ fontSize: 48, marginBottom: 24 }}>✓</div>
                <h2 className="h2" style={{ fontSize: '2rem' }}>Message sent.</h2>
                <p className="body-large" style={{ marginTop: 16, opacity: 0.6 }}>We'll be in touch within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: 32 }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <div className="glass-card" style={{ padding: 'clamp(32px,4vw,52px)', borderRadius: 20 }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: 32 }}>
                  Start the conversation
                </h2>
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <span className="label" style={{ color: '#888' }}>Your name</span>
                      <input
                        required
                        type="text"
                        placeholder="Alex Chen"
                        style={{ ...inputStyle, borderColor: focusedField === 'name' ? 'rgba(255,75,31,0.5)' : 'rgba(255,255,255,0.1)' }}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <span className="label" style={{ color: '#888' }}>Agency name</span>
                      <input
                        required
                        type="text"
                        placeholder="Studio XYZ"
                        style={{ ...inputStyle, borderColor: focusedField === 'agency' ? 'rgba(255,75,31,0.5)' : 'rgba(255,255,255,0.1)' }}
                        onFocus={() => setFocusedField('agency')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </label>
                  </div>

                  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span className="label" style={{ color: '#888' }}>Email</span>
                    <input
                      required
                      type="email"
                      placeholder="alex@studioxyz.com"
                      style={{ ...inputStyle, borderColor: focusedField === 'email' ? 'rgba(255,75,31,0.5)' : 'rgba(255,255,255,0.1)' }}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </label>

                  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span className="label" style={{ color: '#888' }}>What do you need?</span>
                    <select
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={() => setFocusedField('need')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="">Select an option</option>
                      <option>Project-based delivery support</option>
                      <option>Dedicated execution pod</option>
                      <option>Capability expansion</option>
                      <option>Not sure — let's talk</option>
                    </select>
                  </label>

                  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span className="label" style={{ color: '#888' }}>Tell us about your pipeline</span>
                    <textarea
                      rows={5}
                      placeholder="What kind of work are you looking to offload? What's your typical timeline? Monthly volume?"
                      style={{ ...inputStyle, borderColor: focusedField === 'msg' ? 'rgba(255,75,31,0.5)' : 'rgba(255,255,255,0.1)', resize: 'vertical' }}
                      onFocus={() => setFocusedField('msg')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </label>

                  <button type="submit" className="btn-primary" style={{ marginTop: 8 }}>
                    Send inquiry →
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
