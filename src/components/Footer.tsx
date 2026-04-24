import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <h2 className={styles.ctaTitle}>Let&apos;s partner</h2>
        <div className={styles.ctaLinks}>
          <Link href="/contact" className={styles.ctaLinkPrimary}>
            Book a call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 10, transition: 'transform 0.3s ease' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <a href="mailto:partners@orbitcrew.com" className={styles.ctaLinkSecondary}>
            Email us
          </a>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.middle}>
<div className={styles.col}>
      <Link href="/" className={styles.logo}>
        <Image 
          src="/logo.png?v=3" 
          alt="OrbitCrew" 
          width={200} 
          height={55} 
          className={styles.logoImage}
          unoptimized
        />
      </Link>
      <p className={styles.tagline}>White-label execution for agencies.</p>
    </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/agencies" className={styles.navLink}>Our Focus</Link>
            <Link href="/capabilities/web-development" className={styles.navLink}>Capabilities</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
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