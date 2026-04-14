'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Process.module.css'

const steps = [
  { number: '01', title: 'Brief Review', desc: 'Align on scope and timeline' },
  { number: '02', title: 'Resource Match', desc: 'Assign the right execution team' },
  { number: '03', title: 'Delivery', desc: 'Execute under your brand' },
  { number: '04', title: 'Handoff', desc: 'Seamless transition to you' },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"]
  })

  // Scrub progress line scale from 0 to 1
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="label" style={{ color: '#888' }}>Methodology</span>
          <h2 className={styles.title}>Process</h2>
          <p className={styles.subtitle}>
            Built for seamless agency integration — we adapt to your workflow, 
            timeline, and brand standards.
          </p>
        </div>

        <div className={styles.stepsWrapper}>
          <motion.div 
            className={styles.progressLine} 
            style={{ scaleX, transformOrigin: 'left center' }}
          />
          
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                className={styles.step}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              >
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}