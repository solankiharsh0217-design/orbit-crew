'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import AgencySection from '@/components/AgencySection'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const stats = [
  { value: '100%', label: 'White-label delivery' },
  { value: '3x', label: 'Faster than hiring' },
  { value: '50+', label: 'Agency partnerships' },
  { value: '0', label: 'Client conflicts' },
]

const faqs = [
  {
    q: 'Will you contact our clients directly?',
    a: 'Never. We operate as a silent partner, strictly within your brand and under your business. Every deliverable is yours to present.',
  },
  {
    q: 'What does a typical engagement look like?',
    a: 'You brief us, we execute, you deliver. We integrate directly into your existing tools — Slack, Notion, Figma, GitHub — staying invisible to your client.',
  },
  {
    q: 'Can we scale up rapidly for a surge in demand?',
    a: 'Yes. Our pod model means we can bring additional capacity online within days, not weeks, without long-term commitments.',
  },
  {
    q: 'What are your NDA terms?',
    a: 'We sign NDAs before viewing any client materials. Confidentiality is a non-negotiable foundation of every partnership.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: '32px 0',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600, marginBottom: 12 }}>{q}</h3>
      <p className="body-large" style={{ opacity: 0.55 }}>{a}</p>
    </motion.div>
  )
}

export default function AgenciesPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <main style={{ minHeight: '100vh' }}>

      {/* HERO */}
      <section ref={heroRef} style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* Parallax orb */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="aurora-bg"
          aria-hidden
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '140px', paddingBottom: '80px' }}>
          <Reveal>
            <span className="label">For Agencies</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h1" style={{ maxWidth: '900px', marginTop: 20, lineHeight: 1.05 }}>
              Your invisible<br />execution partner.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-large" style={{ maxWidth: '580px', marginTop: 28, opacity: 0.6 }}>
              We operate deep inside your workflow — delivering white-label builds that let you scale revenue without scaling headcount.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Start a partnership</Link>
              <Link href="/portfolio" className="btn-secondary">See our work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                style={{ textAlign: 'center' }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--color-accent)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</p>
                <p className="label" style={{ marginTop: 8, opacity: 0.5 }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY SECTION (Partnership Models + Why OrbitCrew Journey) */}
      <AgencySection />

      {/* FAQ */}
      <section style={{ padding: 'clamp(4rem,8vw,8rem) 0', background: 'var(--color-bg-dark)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="label" style={{ color: '#888' }}>Questions</span>
            <h2 className="h2" style={{ marginTop: 20, maxWidth: 600 }}>What agencies ask us</h2>
          </motion.div>
          <div style={{ marginTop: 60, maxWidth: 900 }}>
            {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(5rem,10vw,10rem) 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card"
            style={{ padding: 'clamp(40px,6vw,80px)', borderRadius: 20, maxWidth: 800, margin: '0 auto' }}
          >
            <h2 className="h2">Ready to scale your pipeline?</h2>
            <p className="body-large" style={{ marginTop: 20, opacity: 0.6 }}>Let's talk about how OrbitCrew fits inside your delivery model.</p>
            <Link href="/contact" className="btn-primary" style={{ marginTop: 40, display: 'inline-flex' }}>
              Start the conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
