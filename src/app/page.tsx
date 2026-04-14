'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProjectGrid from '@/components/ProjectGrid'
import AgencySection from '@/components/AgencySection'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import styles from './page.module.css'

const executionCapabilities = [
  { number: '01', title: 'Web Development', desc: 'Full-stack builds, React, Next.js, custom platforms', deliverables: ['Next.js', 'React', 'TypeScript'] },
  { number: '02', title: 'Webflow Production', desc: 'Design-to-build, CMS setup, migrations', deliverables: ['CMS', 'Animations', 'SEO'] },
  { number: '03', title: 'Landing Pages & Funnels', desc: 'High-converting pages, A/B testing, lead capture', deliverables: ['Conversion', 'Speed', 'Mobile'] },
  { number: '04', title: 'AI Automation', desc: 'Workflow design, Zapier, n8n, custom integrations', deliverables: ['Zapier', 'n8n', 'Workflows'] },
  { number: '05', title: 'Internal Tools & Dashboards', desc: 'Custom admin panels, CRMs, data visualization', deliverables: ['React', 'Node.js', 'Data Viz'] },
  { number: '06', title: 'MVP Builds', desc: 'Fast validation builds for agency client ideas', deliverables: ['Speed to Market', 'Scalable', 'MVP'] },
]

const agencyPartners = [
  'Digital Agency', 'Performance Agency', 'Growth Agency', 'Design Studio', 'Tech Consultancy', 'Marketing Firm'
]

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function CapabilityCard({ cap, i }: { cap: any, i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x * 10);
    mouseY.set(y * -10);
  };

  const rotateX = useSpring(mouseY, { stiffness: 300, damping: 20 });
  const rotateY = useSpring(mouseX, { stiffness: 300, damping: 20 });

  return (
    <Reveal delay={i * 0.1}>
      <motion.div 
        className={`${styles.capabilityItem} glass-card interactive-hover`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
      >
        <div className={styles.capabilityTop}>
          <span className={styles.capabilityNumber}>{cap.number}</span>
          <ArrowRight className={styles.capabilityArrow} size={32} />
        </div>
        <h3 className="h3" style={{ margin: '24px 0 16px' }}>{cap.title}</h3>
        <p className="body-large" style={{ opacity: 0.6 }}>{cap.desc}</p>
        <div className={styles.deliverables}>
          {cap.deliverables.map((d: string, j: number) => (
            <span key={j} className={styles.tag}>{d}</span>
          ))}
        </div>
      </motion.div>
    </Reveal>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Marquee />

      <AgencySection />

      {/* Execution Capabilities Section */}
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Reveal>
              <span className="label" style={{ color: '#888' }}>Capabilities</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2" style={{ marginTop: 16 }}>What we deliver for agencies</h2>
            </Reveal>
          </div>

          <div className={styles.capabilitiesGrid}>
            {executionCapabilities.map((cap, i) => (
              <CapabilityCard key={i} cap={cap} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid - Already updated in component */}
      <ProjectGrid />

      {/* Process Section */}
      <Process />

      {/* Immersive Parallax Image */}
      <section style={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden', margin: '80px 0' }}>
        <motion.div
          initial={{ y: -100 }}
          whileInView={{ y: 100 }}
          viewport={{ margin: "200px", once: false }}
          transition={{ ease: "linear", duration: 1.5 }}
          style={{ position: 'absolute', top: -150, left: 0, width: '100%', height: 'calc(100% + 300px)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2500&auto=format&fit=crop" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} 
            alt="Agency setup" 
          />
        </motion.div>
        {/* Soft edge blend into the page */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-bg-dark), transparent 30%, transparent 70%, var(--color-bg-dark))' }} />
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Agency Partners Section */}
      <section className={styles.partnersSection}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ textAlign: 'center', marginBottom: 60 }}>Trusted by agency partners.</h2>
          </Reveal>
          <div className={styles.partnersGrid}>
            {agencyPartners.map((partner, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`${styles.partnerItem} glass-card`}>
                  <span>{partner}</span>
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
              <h2 className="display-hero" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
                Add delivery capacity<br />without hiring
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body-large" style={{ margin: '40px 0' }}>
                Scale your agency&apos;s delivery without the overhead of building an internal team.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <button className="btn-primary">
                Book a partner call
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