import styles from './Marquee.module.css'

const items = [
  'WE ARE ORBITCREW',
  '◆',
  'QUALITY-FIRST STUDIO',
  '◆',
  'BRAND IDENTITY',
  '◆',
  'DIGITAL DESIGN',
  '◆',
]

export default function Marquee() {
  const duplicatedItems = [...items, ...items]

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