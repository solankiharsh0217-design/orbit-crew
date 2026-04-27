'use client'

import { useRef } from 'react'
import { motion, useInView, useSpring, useTransform, useScroll } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  type?: 'fade' | 'blur' | 'clip' | 'scale' | 'slide'
  className?: string
  distance?: number
}

export function EnhancedReveal({
  children,
  delay = 0,
  direction = 'up',
  type = 'blur',
  className = '',
  distance = 60,
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getInitialState = () => {
    const base = { opacity: 0 }

    switch (type) {
      case 'fade':
        return base
      case 'blur':
        return { ...base, y: distance, filter: 'blur(10px)' }
      case 'clip':
        return { ...base, clipPath: getClipPath(direction, true) }
      case 'scale':
        return { ...base, scale: 0.9, filter: 'blur(5px)' }
      case 'slide':
        return { ...base, ...getSlideOffset(direction, distance) }
      default:
        return { ...base, y: distance, filter: 'blur(10px)' }
    }
  }

  const getAnimateState = () => {
    switch (type) {
      case 'fade':
        return { opacity: 1 }
      case 'blur':
        return { opacity: 1, y: 0, filter: 'blur(0px)' }
      case 'clip':
        return { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }
      case 'scale':
        return { opacity: 1, scale: 1, filter: 'blur(0px)' }
      case 'slide':
        return { opacity: 1, x: 0, y: 0 }
      default:
        return { opacity: 1, y: 0, filter: 'blur(0px)' }
    }
  }

  const getClipPath = (dir: string, hidden: boolean) => {
    if (!hidden) return 'inset(0% 0% 0% 0%)'
    switch (dir) {
      case 'up':
        return 'inset(100% 0% 0% 0%)'
      case 'down':
        return 'inset(0% 0% 100% 0%)'
      case 'left':
        return 'inset(0% 100% 0% 0%)'
      case 'right':
        return 'inset(0% 0% 0% 100%)'
      default:
        return 'inset(100% 0% 0% 0%)'
    }
  }

  const getSlideOffset = (dir: string, dist: number) => {
    switch (dir) {
      case 'up':
        return { y: dist, x: 0 }
      case 'down':
        return { y: -dist, x: 0 }
      case 'left':
        return { x: dist, y: 0 }
      case 'right':
        return { x: -dist, y: 0 }
      default:
        return { y: dist, x: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={isInView ? getAnimateState() : getInitialState()}
  transition={{
    duration: 1,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered reveal container for lists
interface StaggerRevealProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  baseDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.1,
  baseDelay = 0,
  direction = 'up',
}: StaggerRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 40 }
      case 'down':
        return { y: -40 }
      case 'left':
        return { x: 40 }
      case 'right':
        return { x: -40 }
      default:
        return { y: 40 }
    }
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, ...getOffset(), filter: 'blur(10px)' }}
          animate={
            isInView
              ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, ...getOffset(), filter: 'blur(10px)' }
          }
      transition={{
        duration: 0.8,
        delay: baseDelay + i * staggerDelay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// Parallax wrapper
interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function Parallax({ children, className = '', speed = 0.5 }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}


