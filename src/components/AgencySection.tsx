'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import styles from './AgencySection.module.css'
import SpotlightCard from './SpotlightCard'

const partnershipModels = [
  {
    title: 'Project-based delivery support',
    desc: 'Stop turning away lucrative client projects because your team is at capacity. We act as an elastic extension of your agency.',
  },
  {
    title: 'Dedicated execution pods',
    desc: 'Instantly spin up a full-stack dev team. No recruiting fees, no onboarding drag, and zero idle overhead between projects.',
  },
  {
    title: 'Capability expansion support',
    desc: 'Fill gaps in your delivery — from webflow builds to custom development to AI automation.',
  },
]

const builtForAgencies = [
  { 
    title: 'White-label execution', 
    shortDesc: 'We operate invisibly under your brand',
    fullDesc: 'All work is delivered under your agency\'s brand. We never contact your clients directly. They think you have an incredible in-house team.',
    details: ['Your branding', 'Direct communication', 'Client ownership', 'Professional tone']
  },
  { 
    title: 'NDA-first partnerships', 
    shortDesc: 'Your secrets stay safe with us',
    fullDesc: 'We sign NDAs before any discussion. Your client relationships, processes, and strategies are fully protected.',
    details: ['Signed NDAs', 'Confidentiality', 'Data protection', 'Secure processes']
  },
  { 
    title: 'No client poaching', 
    shortDesc: 'We never compete with your clients',
    fullDesc: 'We have a strict no-poaching policy. We will never approach, pitch, or work with your clients — now or in the future.',
    details: ['Contract bound', 'Ethical standards', 'Long-term commitment', 'Trust first']
  },
  { 
    title: 'Works inside your stack', 
    shortDesc: 'We adapt to your tools and workflows',
    fullDesc: 'We integrate seamlessly with your existing tools — Slack, Notion, Jira, Asana, GitHub, or whatever you use. No friction, just smooth collaboration.',
    details: ['Tool agnostic', 'Flexible setup', 'Quick onboarding', 'Your workflow']
  },
  { 
    title: 'Async collaboration friendly', 
    shortDesc: 'Work happens on your terms',
    fullDesc: 'We thrive in async environments. Detailed briefs, Loom videos, written updates — we keep things moving without constant meetings.',
    details: ['Written updates', 'Video briefs', 'Timezone friendly', 'Low meeting load']
  },
  { 
    title: 'Scales with your pipeline', 
    shortDesc: 'Grow delivery without growing overhead',
    fullDesc: 'Need more hands? We scale up. Need less? We scale down. You only pay for what you use, with complete flexibility.',
    details: ['Flexible capacity', 'Cost effective', 'Rapid scaling', 'No hiring stress']
  },
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

function VerticalTimeline({ items }: { items: { title: string; shortDesc: string; fullDesc: string; details: string[] }[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={styles.timelineContainer}>
      <div className={styles.timelineLine} />
      <motion.div 
        className={styles.timelineProgress}
        style={{ height: progressHeight }}
      />
      {items.map((item, i) => (
        <TimelineItem 
          key={i} 
          index={i} 
          item={item}
          isActive={activeIndex === i}
          onMouseEnter={() => setActiveIndex(i)}
          onMouseLeave={() => setActiveIndex(null)}
        />
      ))}
    </div>
  );
}

function TimelineItem({ index, item, isActive, onMouseEnter, onMouseLeave }: { 
  index: number; 
  item: { title: string; shortDesc: string; fullDesc: string; details: string[] };
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div 
      className={styles.timelineItem}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-active={isActive}
      style={{ paddingTop: index === 0 ? 0 : 20 }}
    >
      <motion.div 
        className={styles.timelineDot}
        animate={{ 
          scale: isActive ? 1.8 : 1,
          boxShadow: isActive ? '0 0 30px #1760C2' : '0 0 0px transparent',
          borderColor: isActive ? '#1760C2' : '#1760C2',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div 
        className={styles.timelineContent}
        animate={{ 
          x: isActive ? 10 : 0,
          borderColor: isActive ? 'rgba(23, 96, 194, 0.5)' : 'rgba(16, 43, 78, 0.08)',
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '8px', textAlign: 'left' }}>
          {item.title}
        </h3>
        <p className="body-large" style={{ opacity: 0.8, textAlign: 'left' }}>{item.shortDesc}</p>
      </motion.div>
      
      <motion.div 
        className={`${styles.hoverCard} glass-card`}
        initial={{ opacity: 0, x: -20, scale: 0.95 }}
        animate={{ 
          opacity: isActive ? 1 : 0,
          x: isActive ? 0 : -20,
          scale: isActive ? 1 : 0.95,
          pointerEvents: isActive ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3, ease: "easeOut" as const }}
      >
        <p className={styles.cardDesc}>{item.fullDesc}</p>
        <div className={styles.cardDetails}>
          {item.details.map((detail, j) => (
            <span key={j} className={styles.detailTag}>{detail}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
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
                <SpotlightCard className={styles.modelCard}>
                  <span className={styles.modelNumber}>0{i + 1}</span>
                  <h3 className="h3" style={{ marginTop: 16 }}>{model.title}</h3>
                  <p style={{ marginTop: 12, opacity: 0.6 }}>{model.desc}</p>
                </SpotlightCard>
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

          <VerticalTimeline items={builtForAgencies as any} />
        </div>
      </section>
    </>
  )
}