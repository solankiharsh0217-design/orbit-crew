'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './ProjectGrid.module.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { number: '01', name: 'Scaled Agency 4x', tag: 'Webflow + AI', image: '/images/project-1.png' },
  { number: '02', name: '12 Pages in 3 Weeks', tag: 'Landing Pages', image: '/images/project-2.png' },
  { number: '03', name: 'SaaS MVP in 8 Weeks', tag: 'Product Design', image: '/images/project-3.png' },
  { number: '04', name: 'Brand Identity System', tag: 'Branding', image: '/images/project-1.png' },
]

export default function ProjectGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, { scope: containerRef })

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="label" style={{ color: '#888' }}>Portfolio</span>
          <h2 className={styles.title}>Selected Work</h2>
        </div>

        <div ref={containerRef} className={styles.grid}>
          {projects.map((project, i) => (
            <div 
              key={i} 
              ref={(el) => { if (el) cardsRef.current[i] = el }}
              className={styles.card}
            >
              <Link href="/work" className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={project.image}
                    alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.number}>{project.number}</span>
                    <span className={styles.tag}>{project.tag}</span>
                  </div>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{ color: '#e8533a' }}
                    className={styles.viewLink}
                  >
                    View Project →
                  </motion.div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}