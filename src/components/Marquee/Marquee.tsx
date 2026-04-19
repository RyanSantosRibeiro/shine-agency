'use client'

import { motion } from 'framer-motion'
import styles from './Marquee.module.css'

const items = [
  'Edição de Conteúdo',
  'Gestão de Redes',
  'Engajamento',
  'Produção',
  'Academia',
  'Suporte Emocional',
  'Estética',
  'Proteção DMCA',
  'Estratégia',
  'Monetização',
  'Crescimento',
  'Branding',
]

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className={`${styles.track} ${reverse ? styles.trackReverse : ''}`}>
      {doubled.map((item, i) => (
        <span key={i} className={styles.item}>
          <span className={styles.dot} aria-hidden="true" />
          {item}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className={styles.section} aria-hidden="true">
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
      <MarqueeTrack />
      {/* <MarqueeTrack reverse /> */}
    </section>
  )
}
