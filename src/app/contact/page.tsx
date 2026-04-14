export default function ContactPage() {
  return (
    <main style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="glass-card" style={{ maxWidth: 600, width: '100%', padding: '40px', borderRadius: 16 }}>
          <h1 className="h2" style={{ marginBottom: 16 }}>Let's talk scale.</h1>
          <p className="body-large" style={{ opacity: 0.7, marginBottom: 40 }}>
            Fill out the form below and we'll be in touch within 24 hours.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <textarea placeholder="How can we help?" style={{ ...inputStyle, minHeight: 120 }} />
            <button className="btn-primary interactive-hover" style={{ marginTop: 16 }}>Submit Inquiry</button>
          </div>
        </div>
      </div>
    </main>
  )
}

const inputStyle = {
  width: '100%',
  padding: '16px 20px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  color: '#f0efe8',
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none'
}
