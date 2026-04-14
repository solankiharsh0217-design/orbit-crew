'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const trustSignals = [
  '100% white-label',
  'Built for agencies only',
  'No client poaching',
  'Flexible delivery capacity',
]

const containerVars = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.035 } 
  }
}

const charVars = {
  hidden: { y: 120, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { ease: [0.16, 1, 0.3, 1] as const, duration: 1 } 
  }
}

const subtextVars = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.4, ease: "easeOut" as const, duration: 0.8 } 
  }
}

export default function Hero() {
  const heading = "Agencies win. We deliver."
  const words = heading.split(' ')

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <img src="/images/hero-main.png" alt="OrbitCrew" className={styles.heroImage} />
      
      <div className={styles.content}>
        <motion.h1 
          className={styles.heading}
          variants={containerVars}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}>
              {word.split('').map((char, charIndex) => (
                <motion.span 
                  key={charIndex} 
                  variants={charVars}
                  className={styles.char}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        
        <motion.p 
          className={styles.subtext}
          initial="hidden"
          animate="visible"
          variants={subtextVars}
        >
          A white-label execution partner helping agencies scale delivery without hiring in-house developers.
        </motion.p>

        <motion.div 
          className={styles.trustSignals}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {trustSignals.map((signal, i) => (
            <span key={i} className={styles.trustBadge}>
              {signal}
            </span>
          ))}
        </motion.div>
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