'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './ProjectGrid.module.css'

const projects = [
  { slug: 'ecommerce-platform', number: '01', name: 'E-commerce Platform Build', tag: 'White-label dev', image: '/images/project-1.png' },
  { slug: 'landing-pages', number: '02', name: '12 Landing Pages in 3 Weeks', tag: 'Execution support', image: '/images/project-2.png' },
  { slug: 'saas-mvp', number: '03', name: 'SaaS MVP in 8 Weeks', tag: 'Development partner', image: '/images/project-3.png' },
  { slug: 'webflow-migration', number: '04', name: 'Webflow Migration', tag: 'Agency delivery', image: '/images/project-1.png' },
]

export default function ProjectGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="label" style={{ color: '#888' }}>Portfolio</span>
          <h2 className={styles.title}>Execution delivered for agency partners</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              className={`${styles.card} glass-card`}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" as const }}
            >
              <Link href={`/work/${project.slug}`} className={styles.cardLink}>
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
                  <div className={styles.viewLink}>
                    Delivered white-label →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
