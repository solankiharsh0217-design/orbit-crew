'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Process.module.css'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { number: '01', title: 'Brief Review', desc: 'Align on scope and timeline' },
  { number: '02', title: 'Resource Match', desc: 'Assign the right execution team' },
  { number: '03', title: 'Delivery', desc: 'Execute under your brand' },
  { number: '04', title: 'Handoff', desc: 'Seamless transition to you' },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    stepsRef.current.forEach((step, i) => {
      if (!step) return
      
      gsap.fromTo(
        step,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: 1,
          },
        }
      )
    }
  }, { scope: containerRef })

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
          <div ref={lineRef} className={styles.progressLine} />
          
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div 
                key={i} 
                ref={(el) => { stepsRef.current[i] = el }}
                className={styles.step}
              >
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}