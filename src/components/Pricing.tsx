'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Pricing.module.css'
import SpotlightCard from './SpotlightCard'

const monthlyFeatures = [
  'Unlimited requests',
  'Fast turnaround',
  'Fixed monthly rate',
  'Async communication',
  'Flexible scope',
  'Pause anytime',
]

const testimonial = {
  name: 'Sarah Mitchell',
  role: 'Founder, Brand Studio',
  avatar: '/images/Gemini_Generated_Image_18unh018unh018un.png',
  quote: 'OrbitCrew has been instrumental in scaling our agency. We\'ve taken on 4x more clients without adding a single hire.',
}

export default function Pricing() {
  const [plan, setPlan] = useState<'monthly' | 'custom'>('monthly')

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.videoPlaceholder}>
            <div className={styles.gradient} />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.header}>
            <span className="label" style={{ color: '#888' }}>Investment</span>
            <h2 className={styles.title}>Pricing</h2>
          </div>

          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${plan === 'monthly' ? styles.toggleActive : ''}`}
              onClick={() => setPlan('monthly')}
            >
              Monthly
            </button>
            <button
              className={`${styles.toggleBtn} ${plan === 'custom' ? styles.toggleActive : ''}`}
              onClick={() => setPlan('custom')}
            >
              Custom
            </button>
          </div>

          <SpotlightCard className={styles.card}>
            {plan === 'monthly' ? (
              <>
                <div className={styles.priceBlock}>
                  <span className={styles.price}>$7,500</span>
                  <span className={styles.period}>/mo</span>
                </div>
                
                <Link href="/contact" className={styles.ctaButton}>
                  Book Free Discovery Call
                </Link>

                <p className={styles.note}>Booking Open — only 2 spots left</p>
                <p style={{ marginTop: 16, fontSize: 14, color: '#888', fontStyle: 'italic', lineHeight: 1.5 }}>
                  Cheaper than a mid-level hire. Output of an entire senior pod. Stop paying idle developers between client projects.
                </p>

                <ul className={styles.features}>
                  {monthlyFeatures.map((feature, i) => (
                    <li key={i} className={styles.feature}>
                      <span className={styles.check}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <div className={styles.customHeader}>
                  <span className={styles.customTitle}>Tailored to your needs</span>
                  <p className={styles.customDesc}>
                    Whether you need project-based pricing or custom retainers, 
                    let's discuss what works for your agency.
                  </p>
                </div>

                <Link href="/contact" className={styles.ctaButton}>
                  Let's Talk
                </Link>
              </>
            )}
          </SpotlightCard>

          <div className={styles.testimonial}>
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={48}
              height={48}
              className={styles.avatar}
            />
            <div className={styles.testimonialContent}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <span className={styles.author}>
                {testimonial.name} — {testimonial.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}