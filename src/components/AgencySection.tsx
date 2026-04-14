'use client'

import { motion } from 'framer-motion'
import styles from './AgencySection.module.css'

const partnershipModels = [
  {
    title: 'Project-based delivery support',
    desc: 'Scale capacity for specific client engagements. We execute within your timeline and under your brand.',
  },
  {
    title: 'Dedicated execution pods',
    desc: 'Ongoing resources that integrate into your team. Same people, same workflow, dedicated to your pipeline.',
  },
  {
    title: 'Capability expansion support',
    desc: 'Fill gaps in your delivery — from webflow builds to custom development to AI automation.',
  },
]

const builtForAgencies = [
  'White-label execution',
  'NDA-first partnerships',
  'No client poaching',
  'Works inside your stack',
  'Async collaboration friendly',
  'Scales with your pipeline',
]

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {children}
    </motion.div>
  )
}

export default function AgencySection() {
  return (
    <>
      <section className={styles.notAgency}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              Not another development agency
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-large" style={{ textAlign: 'center', maxWidth: '700px', margin: '32px auto 0' }}>
              OrbitCrew works behind the scenes inside agency workflows as a silent execution partner. 
              Agencies keep client ownership. OrbitCrew handles delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.partnership}>
        <div className="container">
          <Reveal>
            <span className="label" style={{ color: '#888' }}>Partnership</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2" style={{ marginTop: 20 }}>How agencies partner with OrbitCrew</h2>
          </Reveal>

          <div className={styles.modelsGrid}>
            {partnershipModels.map((model, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <div className={styles.modelCard}>
                  <span className={styles.modelNumber}>0{i + 1}</span>
                  <h3 className="h3" style={{ marginTop: 16 }}>{model.title}</h3>
                  <p style={{ marginTop: 12, opacity: 0.6 }}>{model.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.builtForAgencies}>
        <div className="container">
          <Reveal>
            <span className="label" style={{ color: '#888' }}>Why OrbitCrew</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h2" style={{ marginTop: 20 }}>Built for agencies only</h2>
          </Reveal>

          <div className={styles.bulletsGrid}>
            {builtForAgencies.map((item, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <div className={styles.bulletItem}>
                  <span className={styles.check}>✓</span>
                  <span>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}