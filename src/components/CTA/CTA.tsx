'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Sparkles } from 'lucide-react'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={`glow-orb glow-orb-gold ${styles.orb1}`} />
      <div className={`glow-orb glow-orb-accent ${styles.orb2}`} />

      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={14} />
            <span>Vagas limitadas</span>
          </motion.div>

          <h2 className={`heading-display ${styles.title}`}>
            Comece hoje a{' '}
            <span className="text-gradient-gold">brilhar</span>
          </h2>

          <p className={styles.subtitle}>
            Junte-se às criadoras que já transformaram seus resultados com
            a Shine. A primeira conversa é gratuita.
          </p>

          <div className={styles.actions}>
            <Link href="#contato" className={`btn btn-primary ${styles.btnPrimary}`}>
              Quero estruturar meu crescimento
              <ChevronRight size={18} />
            </Link>
            <Link href="/blog" className={`btn btn-ghost ${styles.btnSecondary}`}>
              Leia nosso blog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
