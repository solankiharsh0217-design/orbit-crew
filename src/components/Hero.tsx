'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import styles from './Hero.module.css'

const trustSignals = [
  '100% white-label',
  'Built for agencies only',
  'No client poaching',
  'Flexible delivery capacity',
]

export default function Hero() {
  const heading = "Agencies win. We deliver."
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -30])

  return (
    <section ref={sectionRef} className={styles.hero}>
      {/* Static background image */}
      <div className={styles.imageWrapper}>
        <img
          src="/images/hero-bg.png"
          alt="OrbitCrew"
          className={styles.heroImage}
        />
        {/* Simple dark overlay */}
        <div className={styles.overlay} />
      </div>

      {/* Main content - simplified animations */}
      <motion.div
        className={styles.content}
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Eyebrow label */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          White-Label Execution Partner
        </div>

        {/* Simple heading - no character animation */}
        <h1 className={styles.heading}>
          {heading}
        </h1>

        <p className={styles.subtext}>
          Ship client projects 3x faster without the overhead of hiring in-house developers. We act as your invisible execution arm.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <Link href="/contact" className={styles.ctaPrimary}>
            Book a Discovery Call
            <ArrowRight size={18} />
          </Link>
          <Link href="/agencies" className={styles.ctaSecondary}>
            See How It Works
          </Link>
        </div>

        {/* Trust signals - static */}
        <div className={styles.trustSignals}>
          {trustSignals.map((signal, i) => (
            <span key={i} className={styles.trustBadge}>
              <span className={styles.checkmark}>✓</span>
              {signal}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Simple scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}>
          <div className={styles.scrollProgress} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
