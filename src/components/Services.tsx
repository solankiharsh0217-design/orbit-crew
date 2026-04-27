'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Services.module.css'

const services = [
  {
    number: '01',
    name: 'Brand Identity',
    subServices: ['Logo Design', 'Typography & Color', 'Brand Guidelines', 'Visual Identity'],
    image: '/images/service-brand.jpg',
  },
  {
    number: '02',
    name: 'Creative Strategy',
    subServices: ['Brand Positioning', 'Market Research', 'Content Strategy', 'Brand Architecture'],
    image: '/images/service-strategy.jpg',
  },
  {
    number: '03',
    name: 'Web Design',
    subServices: ['UI/UX Design', 'Website Development', 'Interactive Experiences', 'Design Systems'],
    image: '/images/service-web.jpg',
  },
  {
    number: '04',
    name: 'Art Direction',
    subServices: ['Campaign Design', 'Photo Direction', 'Visual Storytelling', 'Creative Briefing'],
    image: '/images/service-art.jpg',
  },
  {
    number: '05',
    name: 'Illustration',
    subServices: ['Custom Illustration', 'Editorial Art', 'Pattern Design', 'Iconography'],
    image: '/images/service-illustration.jpg',
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="label" style={{ color: '#888' }}>Expertise</span>
          <h2 className={styles.title}>Services</h2>
        </div>

        <div className={styles.list}>
          {services.map((service, i) => {
            const isOpen = activeIndex === i;
            return (
              <div key={i} className={styles.item}>
                <button 
                  className={styles.itemHeader}
                  onClick={() => toggleService(i)}
                >
                  <span className={styles.number}>{service.number}</span>
                  <span className={styles.name}>{service.name}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeOut" as const } },
                        collapsed: { opacity: 0, height: 0, transition: { duration: 0.4, ease: "easeIn" as const } }
                      }}
                      className={styles.content}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className={styles.contentInner}>
                        <ul className={styles.subServices}>
                          {service.subServices.map((sub, j) => (
                            <li key={j}>{sub}</li>
                          ))}
                        </ul>
                        <div className={styles.imageWrapper}>
                          <Image
                            src={service.image}
                            alt={service.name}
                            width={600}
                            height={400}
                            className={styles.image}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
