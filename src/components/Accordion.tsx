import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Accordion.module.css'

interface AccordionItem {
  q: string
  a: string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={styles.container}>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className={styles.trigger}
          >
            <h3 className={styles.question}>{item.q}</h3>
            <div className={`${styles.icon} ${openIndex === i ? styles.open : ''}`}>
              <span className={styles.horizontal} />
              <span className={styles.vertical} />
            </div>
          </button>
          
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={styles.answerWrapper}
              >
                <p className={styles.answer}>{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
