import styles from '../page.module.css'

export default function AgenciesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.ctaSection} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h1 className="h1" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: 24 }}>Built for Agencies.</h1>
            <p className="body-large" style={{ maxWidth: 600, margin: '0 auto 40px' }}>
              We are a strictly white-label execution partner. We never compete for your clients. We just deliver outstanding digital products under your brand.
            </p>
            <button className="btn-primary interactive-hover">Partner Details</button>
          </div>
        </div>
        <div className={styles.ctaBg}>
          <div className={styles.dotGrid} />
        </div>
      </section>
    </main>
  )
}
