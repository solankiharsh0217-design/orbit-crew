'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Process.module.css'
import SpotlightCard from './SpotlightCard'

const processSteps = [
  { 
    number: '01', 
    title: 'Brief Review', 
    shortDesc: 'Align on scope and timeline',
    fullDesc: 'We deeply review your project brief to understand requirements. No assumptions are made without your explicit approval.',
    details: ['Scope analysis', 'Timeline estimation', 'Resource planning']
  },
  { 
    number: '02', 
    title: 'Resource Match', 
    shortDesc: 'Assign the right execution team',
    fullDesc: 'We assign dedicated developers and PMs who best fit the technical complexity and stack required by your client.',
    details: ['Developer matching', 'PM assignment', 'Stack alignment']
  },
  { 
    number: '03', 
    title: 'Delivery', 
    shortDesc: 'Execute under your brand',
    fullDesc: 'Development occurs transparently through your Slack and Jira. We use your agency emails if client contact is necessary.',
    details: ['Agile sprints', 'White-label comms', 'Daily updates']
  },
  { 
    number: '04', 
    title: 'Handoff', 
    shortDesc: 'Seamless transition to you',
    fullDesc: 'We provide full source code, comprehensive documentation, and training so your internal team can take over effortlessly.',
    details: ['Code transfer', 'Documentation', 'Training session']
  },
]

function HorizontalTimelineItem({ index, step, isActive, onMouseEnter, onMouseLeave }: {
  index: number;
  step: typeof processSteps[0];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div 
      className={styles.timelineNode}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-active={isActive}
    >
      <div className={styles.dotContainer}>
        <motion.div 
          className={styles.timelineDot}
          animate={{ 
            scale: isActive ? 1.8 : 1,
            boxShadow: isActive ? '0 0 30px #FF4B1F' : '0 0 0px transparent',
            borderColor: isActive ? '#FF4B1F' : '#FF4B1F',
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>

      <motion.div 
        className={styles.nodeContent}
        animate={{ 
          y: isActive ? 5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <span className={styles.stepNumber}>{step.number}</span>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.shortDesc}</p>
      </motion.div>

      <motion.div 
        className={`${styles.hoverCard} glass-card`}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ 
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 20,
          scale: isActive ? 1 : 0.95,
          pointerEvents: isActive ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <p className={styles.cardDesc}>{step.fullDesc}</p>
        <div className={styles.cardDetails}>
          {step.details.map((detail, j) => (
            <span key={j} className={styles.detailTag}>{detail}</span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function HorizontalTimeline({ steps }: { steps: typeof processSteps }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"]
  })

  // Desktop horizontal line tracking
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  // Mobile vertical line tracking
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className={styles.timelineContainer}>
      <div className={styles.timelineLineHorizontal} />
      <motion.div 
        className={styles.timelineProgressHorizontal} 
        style={{ scaleX, transformOrigin: 'left center' }}
      />
      
      <div className={styles.timelineLineVertical} />
      <motion.div 
        className={styles.timelineProgressVertical} 
        style={{ scaleY, transformOrigin: 'top center' }}
      />

      <div className={styles.nodesWrapper}>
        {steps.map((step, i) => (
          <HorizontalTimelineItem 
            key={i} 
            index={i} 
            step={step} 
            isActive={activeIndex === i}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
          />
        ))}
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="label" style={{ color: '#888' }}>Methodology</span>
          <h2 className={styles.title}>Process</h2>
          <p className={styles.subtitle}>
            Built for seamless agency integration — we adapt to your workflow, 
            timeline, and brand standards.
          </p>
        </div>

        <HorizontalTimeline steps={processSteps} />
      </div>
    </section>
  )
}