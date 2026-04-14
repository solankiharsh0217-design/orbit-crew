'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styles from './Hero.module.css'

const trustSignals = [
  '100% white-label',
  'Built for agencies only',
  'No client poaching',
  'Flexible delivery capacity',
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const charsRef = useRef<HTMLSpanElement[]>([])
  const subtextRef = useRef<HTMLParagraphElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  const img1X = useTransform(springX, [-500, 500], [-30, 30])
  const img1Y = useTransform(springY, [-500, 500], [-30, 30])
  const img2X = useTransform(springX, [-500, 500], [50, -50])
  const img2Y = useTransform(springY, [-500, 500], [50, -50])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  const heading = "Agencies win. We deliver."

  useGSAP(() => {
    gsap.fromTo(
      charsRef.current,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.035,
        ease: 'power4.out',
      }
    )

    gsap.fromTo(
      subtextRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className={styles.hero}>
      <div className={styles.overlay} />
      <img src="/images/hero-main.png" alt="OrbitCrew" className={styles.heroImage} />
      
      {/* Floating Interactive Images */}
      <motion.img 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
        className={`${styles.floatingImage} ${styles.float1}`}
        style={{ x: img1X, y: img1Y }}
        alt="abstract bubble"
      />
      <motion.img 
        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" 
        className={`${styles.floatingImage} ${styles.float2}`}
        style={{ x: img2X, y: img2Y }}
        alt="abstract grid"
      />
      
      <div className={styles.content}>
        <h1 className={styles.heading}>
          {heading.split('').map((char, i) => (
            <span 
              key={i} 
              ref={(el) => { if (el) charsRef.current[i] = el }}
              className={styles.char}
            >
              {char}
            </span>
          ))}
        </h1>
        
        <p ref={subtextRef} className={styles.subtext}>
          A white-label execution partner helping agencies scale delivery without hiring in-house developers.
        </p>

        <div className={styles.trustSignals}>
          {trustSignals.map((signal, i) => (
            <span key={i} className={styles.trustBadge}>
              {signal}
            </span>
          ))}
        </div>
      </div>

      <motion.div 
        className={styles.explore}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className={styles.exploreLabel}>Partner with us</span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}