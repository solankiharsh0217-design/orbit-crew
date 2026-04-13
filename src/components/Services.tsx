'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
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
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleService = (index: number) => {
    const isOpen = activeIndex === index
    setActiveIndex(isOpen ? null : index)

    contentRefs.current.forEach((content, i) => {
      if (!content) return
      
      if (i === index) {
        if (!isOpen) {
          gsap.fromTo(content, 
            { opacity: 0, height: 0 },
            { opacity: 1, height: 'auto', duration: 0.5, ease: 'power3.out' }
          )
        } else {
          gsap.to(content, {
            opacity: 0,
            height: 0,
            duration: 0.4,
            ease: 'power3.in'
          })
        }
      } else if (contentRefs.current[i] && activeIndex === index) {
        gsap.to(content, {
          opacity: 0,
          height: 0,
          duration: 0.4,
          ease: 'power3.in'
        })
      }
    })
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="label" style={{ color: '#888' }}>Expertise</span>
          <h2 className={styles.title}>Services</h2>
        </div>

        <div className={styles.list}>
          {services.map((service, i) => (
            <div key={i} className={styles.item}>
              <button 
                className={styles.itemHeader}
                onClick={() => toggleService(i)}
              >
                <span className={styles.number}>{service.number}</span>
                <span className={styles.name}>{service.name}</span>
                <span className={`${styles.icon} ${activeIndex === i ? styles.iconOpen : ''}`}>
                  {activeIndex === i ? '−' : '+'}
                </span>
              </button>
              
              <div 
                ref={(el) => { contentRefs.current[i] = el }}
                className={styles.content}
                style={{ 
                  maxHeight: activeIndex === i ? 400 : 0,
                  opacity: activeIndex === i ? 1 : 0
                }}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}