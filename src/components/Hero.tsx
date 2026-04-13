'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styles from './Hero.module.css'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const charsRef = useRef<HTMLSpanElement[]>([])
  const subtextRef = useRef<HTMLParagraphElement>(null)

  const heading = "OrbitCrew."

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
          We design brands and interactive experiences for fast-growing startups
        </p>
      </div>

      <motion.div 
        className={styles.explore}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className={styles.exploreLabel}>Explore</span>
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