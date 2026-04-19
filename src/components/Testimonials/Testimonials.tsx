'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Sofia R.',
    handle: '@sofia.creates',
    quote:
      'Em 3 meses com a Shine minha receita triplicou. Mas mais do que isso, me sinto apoiada e com direção clara. Não é só dinheiro, é qualidade de vida.',
    stars: 5,
    role: 'Criadora — OnlyFans & Privacy',
  },
  {
    name: 'Luna M.',
    handle: '@lunaxm',
    quote:
      'Antes eu ficava perdida em postagens sem estratégia. A equipe cuida de tudo: edição, horários, resposta de DMs. Sobrou tempo para eu criar conteúdo de verdade.',
    stars: 5,
    role: 'Streamer Adulta',
  },
  {
    name: 'Valentina K.',
    handle: '@valen_k',
    quote:
      'O suporte emocional foi o que me fez ficar. Sentia que estava sozinha nessa indústria. A Shine me mostrou que posso crescer com saúde mental preservada.',
    stars: 5,
    role: 'Criadora Independente',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className={styles.section}>
      <div className={`glow-orb glow-orb-accent ${styles.orb}`} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Depoimentos</p>
          <h2 className={`heading-xl ${styles.title}`}>
            Histórias reais de{' '}
            <span className="text-gradient-gold">transformação</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`card ${styles.card}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Quote size={24} className={styles.quoteIcon} aria-hidden="true" />

              <div className={styles.stars} aria-label={`${t.stars} estrelas`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>

              <blockquote className={styles.quote}>"{t.quote}"</blockquote>

              <div className={styles.author}>
                <div className={styles.avatar}>{t.name[0]}</div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorHandle}>{t.handle}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
