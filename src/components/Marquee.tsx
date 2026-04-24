import styles from './Marquee.module.css'

const items = [
  'WHITE-LABEL EXECUTION',
  '◆',
  'AGENCY PARTNERS',
  '◆',
  'SCALABLE DELIVERY',
  '◆',
  'NO CLIENT POACHING',
  '◆',
]

export default function Marquee() {
  // Duplicate 4 times for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {duplicatedItems.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
