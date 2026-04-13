'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProjectGrid from '@/components/ProjectGrid'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Pricing from '@/components/Pricing'
import Process from '@/components/Process'
import styles from './page.module.css'

const services = [
  { number: '01', title: 'Web Development', desc: 'Full-stack builds, React, Next.js, custom platforms', deliverables: ['Next.js', 'React', 'TypeScript'] },
  { number: '02', title: 'Webflow Production', desc: 'Design-to-build, CMS setup, migrations', deliverables: ['CMS', 'Animations', 'SEO'] },
  { number: '03', title: 'Landing Pages', desc: 'High-converting pages, A/B testing, lead capture', deliverables: ['Conversion', 'Speed', 'Mobile'] },
  { number: '04', title: 'AI Automation', desc: 'Workflow design, Zapier, n8n, custom integrations', deliverables: ['Zapier', 'n8n', 'Workflows'] }
]

const clients = [
  'Branding Studio', 'Performance Agency', 'Growth Agency', 'Design Co', 'Tech Startup', 'Retail Brand'
]

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Marquee />

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Reveal>
              <span className="label">Capabilities</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h1" style={{ marginTop: 20 }}>How we back you.</h2>
            </Reveal>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceTop}>
                    <span className={styles.serviceNumber}>{service.number}</span>
                    <ArrowRight className={styles.serviceArrow} size={32} />
                  </div>
                  <h3 className="h2" style={{ margin: '24px 0 16px' }}>{service.title}</h3>
                  <p className="body-large" style={{ opacity: 0.6 }}>{service.desc}</p>
                  <div className={styles.deliverables}>
                    {service.deliverables.map((d, j) => (
                      <span key={j} className={styles.tag}>{d}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <ProjectGrid />

      {/* Services Accordion */}
      <Services />

      {/* Process Section */}
      <Process />

      {/* Stats Section */}
      <Stats />

      {/* Pricing Section */}
      <Pricing />

      {/* Clients Section */}
      <section className={styles.clientsSection}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ textAlign: 'center', marginBottom: 60 }}>Trusted by partners.</h2>
          </Reveal>
          <div className={styles.clientsGrid}>
            {clients.map((client, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={styles.clientItem}>
                  <span>{client}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <Reveal>
              <h2 className="display-hero" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
                Scale<br />Now
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body-large" style={{ margin: '40px 0' }}>
                No hiring cycles. No management overhead.<br />Just pure execution power.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <button className="btn-primary">
                Get Started
              </button>
            </Reveal>
          </div>
        </div>
        <div className={styles.ctaBg}>
          <div className={styles.dotGrid} />
        </div>
      </section>
    </main>
  )
}