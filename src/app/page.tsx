'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import AgencySection from '@/components/AgencySection'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import styles from './page.module.css'

const executionCapabilities = [
  { number: '01', title: 'Web Development', desc: 'Full-stack headless builds explicitly designed for agency handoffs.', deliverables: ['Next.js', 'React', 'TypeScript'] },
  { number: '02', title: 'Webflow Production', desc: 'Pixel-perfect Figma translation equipped with powerful CMS architectures.', deliverables: ['CMS', 'Animations', 'SEO'] },
  { number: '03', title: 'Landing Pages & Funnels', desc: 'Rapid-deployment, A/B tested pipelines that slash CPA for your media buyers.', deliverables: ['Conversion', 'Speed', 'Mobile'] },
  { number: '04', title: 'AI Automation', desc: 'Secure n8n and Zapier connective tissue mapped to your LLMs.', deliverables: ['Zapier', 'n8n', 'Workflows'] },
  { number: '05', title: 'Internal Tools & Dashboards', desc: 'White-labeled React portals securely wired to their operational databases.', deliverables: ['React', 'Node.js', 'Data Viz'] },
  { number: '06', title: 'MVP Builds', desc: 'Zero-to-One validation builds shipped in 21 days for early stage agency clients.', deliverables: ['Speed to Market', 'Scalable', 'MVP'] },
]

const agencyPartners = [
  'B2B Growth Firms', 'Enterprise Branding Studios', 'Shopify Plus Agencies', 'Performance Ad Agencies', 'Creative Boutiques', 'Tech Consultancies'
]

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }}
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

  const slug = cap.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <Reveal delay={i * 0.1}>
      <div style={{ transformStyle: 'preserve-3d', perspective: 1000 }}>
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
            width: '100%',
          }}
        >
          <Link href={`/capabilities/${slug}`} style={{ textDecoration: 'none', height: '100%', display: 'flex' }}>
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
          </Link>
        </motion.div>
      </div>
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


      {/* Process Section */}
      <Process />

      {/* Immersive Parallax Image */}
      <section style={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden', margin: '80px 0' }}>
        <motion.div
          initial={{ y: -100 }}
          whileInView={{ y: 100 }}
          viewport={{ margin: "200px", once: false }}
          transition={{ ease: "linear" as const, duration: 1.5 }}
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

            {/* Eyebrow label */}
            <Reveal>
              <span className="label" style={{ display: 'inline-block', marginBottom: 28 }}>Ready to scale?</span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="display-hero" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
                Add delivery capacity<br />without hiring
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="body-large" style={{ margin: '36px auto', maxWidth: 560 }}>
                Scale your agency&apos;s delivery without the overhead of building an internal team. We slot in, stay invisible, and ship.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.25}>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={`btn-primary ${styles.ctaBtnPrimary}`}>
                  Book a partner call
                  <ArrowRight size={18} style={{ marginLeft: 8 }} />
                </Link>
                <Link href="/portfolio" className={`btn-secondary ${styles.ctaBtnSecondary}`}>
                  See our work
                </Link>
              </div>
            </Reveal>

            {/* Trust signals */}
            <Reveal delay={0.35}>
              <div className={styles.ctaTrust}>
                {['NDA signed upfront', 'No client poaching', 'Async-friendly', 'Cancel anytime'].map((t, i) => (
                  <span key={i} className={styles.ctaTrustBadge}>
                    <span className={styles.ctaTrustDot} />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
        <div className={styles.ctaBg}>
          <div className={styles.dotGrid} />
          <div className={styles.ctaGlow} />
        </div>
      </section>
    </main>
  )
}