'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { LogIn, Shield } from 'lucide-react'
import styles from './Nav.module.css'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Focus', href: '/agencies' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
]

// External login links
const loginLinks = [
  { name: 'Staff Login', href: 'https://orbit-crew-hrms.pages.dev/login', icon: LogIn },
  { name: 'Client Login', href: 'https://orbitcrew-dashboard.pages.dev/', icon: Shield },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png?v=3"
            alt="OrbitCrew"
            width={280}
            height={80}
            className={styles.logoImage}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Login Buttons */}
        <div className={styles.desktopLogin}>
          <a
            href="https://orbit-crew-hrms.pages.dev/login"
            className={`${styles.loginBtn} ${styles.staffBtn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogIn size={16} />
            <span>Staff Login</span>
          </a>
          <a
            href="https://orbitcrew-dashboard.pages.dev/"
            className={`${styles.loginBtn} ${styles.adminBtn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Shield size={16} />
            <span>Client Login</span>
          </a>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }}
          >
            <motion.button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              aria-label="Close menu"
            >
              Close
            </motion.button>

            <div className={styles.content}>
              <nav className={styles.links}>
                {navLinks.map((link, i) => (
                  <div key={link.name} className={styles.linkWrapper} style={{ overflow: 'hidden' }}>
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '100%' }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <Link
                        href={link.href}
                        className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className={styles.navLinkNum}>0{i + 1}</span>
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}

                {/* Mobile Login Links */}
                <div className={styles.linkWrapper} style={{ overflow: 'hidden', marginTop: '20px' }}>
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    transition={{ delay: 0.15 + navLinks.length * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <a
                      href="https://orbit-crew-hrms.pages.dev/login"
                      className={`${styles.navLink} ${styles.loginLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={styles.navLinkNum}>0{navLinks.length + 1}</span>
                      <span className={styles.loginLinkContent}>
                        <LogIn size={24} style={{ marginRight: '12px' }} />
                        Staff Login
                      </span>
                    </a>
                  </motion.div>
                </div>

                <div className={styles.linkWrapper} style={{ overflow: 'hidden' }}>
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    transition={{ delay: 0.15 + (navLinks.length + 1) * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <a
                      href="https://orbitcrew-dashboard.pages.dev/"
                      className={`${styles.navLink} ${styles.loginLink} ${styles.adminLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={styles.navLinkNum}>0{navLinks.length + 2}</span>
                      <span className={styles.loginLinkContent}>
                        <Shield size={24} style={{ marginRight: '12px' }} />
                        Client Login
                      </span>
                    </a>
                  </motion.div>
                </div>
              </nav>

              <motion.div
                className={styles.socials}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} className={styles.socialLink}>
                    {link.name}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
