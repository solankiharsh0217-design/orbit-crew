'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
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
          OrbitCrew<span>.</span>
        </Link>
        
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
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
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
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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