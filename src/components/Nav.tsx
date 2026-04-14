'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Nav.module.css'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'For Agencies', href: '/agencies' },
  { name: 'Execution', href: '/work' },
  { name: 'Partner', href: '/contact' },
]

const socialLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
]

const overlayVariants = {
  closed: { x: '100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  open: { x: '0%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
}

const linkVars = {
  closed: { opacity: 0, y: 40 },
  open: (i: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.2 + (i * 0.08), duration: 0.5, ease: 'easeOut' }
  })
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
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
        >
          Menu
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.overlay}
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.button 
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Close
            </motion.button>

            <div className={styles.content}>
              <div className={styles.links}>
                {navLinks.map((link, i) => (
                  <motion.div custom={i} variants={linkVars} initial="closed" animate="open" exit="closed" key={link.name}>
                    <Link
                      href={link.href}
                      className={styles.navLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className={styles.socials}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={styles.socialLink}
                  >
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