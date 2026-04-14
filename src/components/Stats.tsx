'use client'

import { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'framer-motion'
import styles from './Stats.module.css'

const stats = [
  { value: 50, label: 'Agency Partners', suffix: '+' },
  { value: 8, label: 'Years of Delivery', suffix: '' },
  { value: 200, label: 'Projects Delivered', suffix: '+' },
  { value: 15, label: 'Active Pods', suffix: '' },
]

export default function Stats() {
  const [localTime, setLocalTime] = useState('')
  const [userTime, setUserTime] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date()
      
      const localOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Europe/Belgrade'
      }
      setLocalTime(now.toLocaleTimeString('en-US', localOptions))
      
      const userOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }
      setUserTime(now.toLocaleTimeString('en-US', userOptions))
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div ref={ref} className={styles.statsBlock}>
            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <div key={i} className={styles.statItem}>
                  <span className={styles.statValue}>
                    {inView ? (
                      <CountUp
                         end={stat.value}
                         duration={2}
                         delay={i * 0.2}
                      />
                    ) : (
                      0
                    )}
                    {stat.suffix}
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <p className={styles.description}>
              OrbitCrewDigital is a Europe-based execution partner for agencies worldwide. 
              We help agencies scale delivery without the hiring risk — providing 
              senior-level production capacity under your brand.
            </p>
          </div>

          <div className={styles.timeCard}>
            <h3 className={styles.timeTitle}>Time Zone</h3>
            
            <div className={styles.timeRow}>
              <span className={styles.timeLabel}>Local Time</span>
              <span className={styles.timeValue}>{localTime}</span>
            </div>
            
            <div className={styles.timeRow}>
              <span className={styles.timeLabel}>Your Time</span>
              <span className={styles.timeValue}>{userTime}</span>
            </div>
            
            <div className={styles.timeRow}>
              <span className={styles.timeLabel}>Location</span>
              <span className={styles.timeValue}>Central Europe</span>
            </div>
            
            <div className={styles.timeRow}>
              <span className={styles.timeLabel}>Availability</span>
              <span className={styles.timeValueGreen}>Booking Open</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}