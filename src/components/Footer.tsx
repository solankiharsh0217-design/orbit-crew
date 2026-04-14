import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <h2 className={styles.ctaTitle}>Let&apos;s partner</h2>
        <div className={styles.ctaLinks}>
          <Link href="/contact" className={styles.ctaLink}>Book a call</Link>
          <a href="mailto:partners@orbitcrew.com" className={styles.ctaLink}>Email us</a>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.middle}>
        <div className={styles.col}>
          <span className={styles.logo}>OrbitCrew<span>.</span></span>
          <p className={styles.tagline}>White-label execution for agencies.</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>For Agencies</Link>
            <Link href="/work" className={styles.navLink}>Execution</Link>
            <Link href="/contact" className={styles.navLink}>Partner</Link>
          </nav>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Connect</h4>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
            <a href="#" className={styles.socialLink}>Twitter</a>
            <a href="#" className={styles.socialLink}>Instagram</a>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <span className={styles.copyright}>© 2025 OrbitCrewDigital. All rights reserved.</span>
        <span className={styles.madeWith}>NDA-first. White-label by default.</span>
      </div>
    </footer>
  )
}