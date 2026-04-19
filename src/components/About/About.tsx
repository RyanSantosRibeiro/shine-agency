'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import styles from './About.module.css'
import aboutImg from '@/assets/about-banner.jpg'

const differentials = [
  'Modelo Shine: Conforme você cresce, nós investimos - Eventos exclusivos, viagens e muito mais.',
  'Profissionalização: Você é nossa maior estrela, então cuidamos de toda parte técnica para você focar no que importa.',
  'Ajuda: Temos todo suporte necessário para sua saúde, academia e rede de estética.',
  'Geração de Conteúdo: Produção de conteúdo de alta qualidade para as redes sociais.',
  'Operação Invisível: Fazemos todo o gerenciamento, upload, descrições e precificação nas plataformas. Você só atua.',
]

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={`glow-orb glow-orb-gold ${styles.orb}`} />

      <div className="container">
        <div className={styles.grid}>
          {/* Left — visual */}
          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.visualInner}>
              {/* Floating label cards */}
              {/* <motion.div
                className={styles.floatCard}
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className={styles.floatIcon}>✨</span>
                <div>
                  <p className={styles.floatTitle}>Método Shine 360</p>
                  <p className={styles.floatSub}>Você como Empresa de Mídia</p>
                </div>
              </motion.div> */}

              {/* <motion.div
                className={`${styles.floatCard} ${styles.floatCard2}`}
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className={styles.floatIcon}>💰</span>
                <div>
                  <p className={styles.floatTitle}>Todo suporte necessário</p>
                  <p className={styles.floatSub}>Para o seu crescimento</p>
                </div>
              </motion.div> */}

              {/* Decorative rings */}
              <div className={styles.ring1} />
              <div className={styles.ring2} />

              {/* Main visual content */}
              <div className={styles.visualCenter}>
               <img src={aboutImg.src} alt="About" className={styles.aboutImg} />
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="section-label">Modelos Shine</p>
            <h2 className={`heading-lg ${styles.title}`}>
              Nós cuidamos da parte técnica, {' '}
              <span className="text-gradient-gold">e você cuida de si mesma</span>
            </h2>
            <p className={styles.lead}>
              A Shine Agency não é uma agência comum. Nosso modelo é cuidar de toda parte burocrática e técnica, unindo <strong>alta viralização</strong> e 
              <strong> cuidado com seu bem-estar</strong> para garantir <strong>lucros reais</strong> e um <strong>estilo de vida leve</strong>.
            </p>

            <ul className={styles.list}>
              {differentials.map((item, i) => (
                <motion.li
                  key={i}
                  className={styles.listItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <CheckCircle2
                    size={18}
                    className={styles.checkIcon}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="#contato" className={`btn btn-primary ${styles.cta}`}>
              Quero fazer parte
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
