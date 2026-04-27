'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const capabilities = [
  { slug: 'web-development', title: 'Web Development', desc: 'High-performance React & Next.js applications', icon: '🌐' },
  { slug: 'webflow-production', title: 'Webflow Production', desc: 'End-to-end design translation and CMS', icon: '🎨' },
  { slug: 'landing-pages-funnels', title: 'Landing Pages & Funnels', desc: 'High-converting pages focused on ROI', icon: '🎯' },
  { slug: 'ai-automation', title: 'AI Automation', desc: 'N8N, Make, and Zapier workflows', icon: '🤖' },
  { slug: 'internal-tools-dashboards', title: 'Internal Tools & Dashboards', desc: 'Custom applications for operations', icon: '📊' },
  { slug: 'mvp-builds', title: 'MVP Builds', desc: 'Lightning-fast validation products', icon: '🚀' },
]

export default function CapabilitiesPage() {
  return (
    <main style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="label" style={{ color: '#888' }}>Expertise</span>
          <h1 className="h1" style={{ marginTop: 20, maxWidth: 800 }}>
            What we build for agencies.
          </h1>
          <p className="body-large" style={{ marginTop: 24, maxWidth: 600, opacity: 0.6 }}>
            From web development to AI automation, we deliver white-label execution across the full digital stack.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 24, 
          marginTop: 60 
        }}>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link 
                href={`/capabilities/${cap.slug}`}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div className="glass-card" style={{ 
                  padding: 32, 
                  borderRadius: 16,
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{ fontSize: '2rem' }}>{cap.icon}</span>
                  <h3 className="h3" style={{ marginTop: 20, fontSize: '1.5rem' }}>{cap.title}</h3>
                  <p className="body-large" style={{ marginTop: 12, opacity: 0.6 }}>{cap.desc}</p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 8, 
                    marginTop: 20,
                    color: 'var(--color-accent)',
                    fontWeight: 600
                  }}>
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
