'use client'

import { useEffect, useState, RefObject } from 'react'

export function useSpotlight(ref: RefObject<HTMLElement | null>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setMousePosition({ x: 0, y: 0 })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref])

  // Update CSS custom properties
  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (isHovering) {
      element.style.setProperty('--mouse-x', `${mousePosition.x}px`)
      element.style.setProperty('--mouse-y', `${mousePosition.y}px`)
    }
  }, [mousePosition, isHovering, ref])

  return { mousePosition, isHovering }
}

// Hook for all glass cards
export function useGlobalSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const glassCard = target.closest('.glass-card, .interactive-hover') as HTMLElement
      
      if (glassCard) {
        const rect = glassCard.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        glassCard.style.setProperty('--mouse-x', `${x}px`)
        glassCard.style.setProperty('--mouse-y', `${y}px`)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])
}
