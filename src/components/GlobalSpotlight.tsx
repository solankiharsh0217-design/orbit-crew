'use client'

import { useEffect, ReactNode } from 'react'

export function GlobalSpotlightProvider({ children }: { children: ReactNode }) {
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

  return <>{children}</>
}
