'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoadAnimation({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Small delay to ensure fonts and assets are ready
    const loadTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 1800)

    return () => {
      clearTimeout(loadTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#FFFFFF',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              {/* Animated Logo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {'OrbitCrew'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 5vw, 3rem)',
                      fontWeight: 700,
                      color: '#102B4E',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 700,
                    color: '#1760C2',
                  }}
                >
                  .
                </motion.span>
              </div>

              {/* Loading Progress */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 120, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, #1760C2, #60A5FA)',
                  borderRadius: '2px',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ 
          opacity: showContent ? 1 : 0, 
          scale: showContent ? 1 : 0.98 
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  )
}
