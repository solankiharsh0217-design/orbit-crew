'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  splitBy?: 'chars' | 'words' | 'lines'
}

export default function AnimatedText({
  children,
  className = '',
  delay = 0,
  as: Tag = 'span',
  splitBy = 'words',
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: splitBy === 'chars' ? 0.02 : 0.08,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
      filter: 'blur(10px)',
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  const splitContent = () => {
    if (splitBy === 'chars') {
      return children.split('')
    } else if (splitBy === 'words') {
      return children.split(' ')
    }
    return [children]
  }

  const items = splitContent()

  return (
    <Tag ref={ref} className={className} style={{ display: 'inline' }}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{ display: 'inline-flex', flexWrap: 'wrap' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              marginRight: splitBy === 'words' ? '0.25em' : undefined,
            }}
          >
            <motion.span
              variants={itemVariants}
              style={{ display: 'inline-block' }}
            >
              {item}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}

// Clip-path reveal component for sections
export function ClipReveal({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const getClipPath = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: 'inset(100% 0% 0% 0%)',
          visible: 'inset(0% 0% 0% 0%)',
        }
      case 'down':
        return {
          hidden: 'inset(0% 0% 100% 0%)',
          visible: 'inset(0% 0% 0% 0%)',
        }
      case 'left':
        return {
          hidden: 'inset(0% 100% 0% 0%)',
          visible: 'inset(0% 0% 0% 0%)',
        }
      case 'right':
        return {
          hidden: 'inset(0% 0% 0% 100%)',
          visible: 'inset(0% 0% 0% 0%)',
        }
    }
  }

  const clipPaths = getClipPath()

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: clipPaths.hidden }}
      animate={isInView ? { clipPath: clipPaths.visible } : { clipPath: clipPaths.hidden }}
  transition={{
      duration: 1,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic text that reacts to cursor
export function MagneticText({
  children,
  className = '',
}: {
  children: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 8
    const y = (e.clientY - rect.top - rect.height / 2) / 8
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={className}
      style={{ display: 'inline-block', cursor: 'default' }}
    >
      {children}
    </motion.span>
  )
}
