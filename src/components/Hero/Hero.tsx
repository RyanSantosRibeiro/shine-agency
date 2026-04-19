'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, ChevronRight } from 'lucide-react'
import styles from './Hero.module.css'
import heroBg from '@/assets/hero-banner.jpg'
const stats = [
  { value: '4+', label: 'Redes Sociais gerenciadas' },
  { value: '5x', label: 'Crescimento médio' },
  { value: '44K', label: 'Visualizações' },
]

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} style={{ backgroundImage: `url(${heroBg.src})` }}>
      {/* Background */} 
      <div className={styles.bg}  />

      {/* Glow orbs */}
      <div className={`glow-orb glow-orb-gold ${styles.orb1}`} />
      <div className={`glow-orb glow-orb-accent ${styles.orb2}`} />
      <div className={`glow-orb glow-orb-pink ${styles.orb3}`} />

      {/* Grid pattern */}
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Sparkles size={14} className={styles.badgeIcon} />
          <span>A agência que faz você brilhar</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className={`heading-display ${styles.headline}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Engajamos suas redes,{' '}
          <span className={styles.headlineBreak}>
            <span className="text-gradient-gold">fornecemos suporte</span>
          </span>{' '}
          para você só focar no que importa.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Estruturamos sua estratégia, posicionamento e monetização para
          transformar sua audiência em receita recorrente — com método,
          cuidado e acompanhamento total.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="#contato" className="btn btn-primary">
            Quero estruturar meu crescimento
            <ChevronRight size={18} />
          </Link>
          <Link href="#servicos" className="btn btn-secondary " style={{color: 'white'}}>
            Saiba mais
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
            >
              <span className={`${styles.statValue} text-gradient-gold`}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#servicos"
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Role para baixo"
      >
        <ArrowDown size={18} className={styles.scrollArrow} />
      </motion.a>
    </section>
  )
}
