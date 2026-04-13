'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styles from './Nav.module.css'

const navLinks = [
  { name: 'Home', href: '/' },
]

const socialLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        x: '0%',
        duration: 0.6,
        ease: 'power4.inOut',
      })
      
      gsap.fromTo(
        closeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.3 }
      )

      gsap.fromTo(
        linksRef.current?.children || [],
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.08,
          delay: 0.2,
          ease: 'power3.out'
        }
      )

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.5 }
      )

      gsap.fromTo(
        socialRef.current?.children || [],
        { opacity: 0 },
        { opacity: 1, duration: 0.3, stagger: 0.05, delay: 0.6 }
      )
    } else {
      gsap.to(overlayRef.current, {
        x: '100%',
        duration: 0.6,
        ease: 'power4.inOut',
      })
    }
  }, [isOpen])

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

      <div 
        ref={overlayRef}
        className={styles.overlay}
        style={{ transform: 'translateX(100%)' }}
      >
        <button 
          ref={closeRef}
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>

        <div className={styles.content}>
          <div ref={linksRef} className={styles.links}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          

          <div ref={socialRef} className={styles.socials}>
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={styles.socialLink}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}