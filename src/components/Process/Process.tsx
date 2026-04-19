'use client'

import { motion } from 'framer-motion'
import styles from './Process.module.css'

const steps = [
  {
    number: '01',
    title: 'Branding e Atração',
    description:
      'Nascimento da marca: definimos sua identidade visual. Criamos lives e clipes (TikTok/Reels) gerando tráfego massivo.',
  },
  {
    number: '02',
    title: 'Produção Premium',
    description:
      'Lançamento de Sets exclusivos. Produzimos teasers e videos perfeitos (ganchos) para assinaturas.',
  },
  {
    number: '03',
    title: 'Lucro Real',
    description:
      'Convertendo o alcance gratuito em dinheiro: gerenciamos suas postagens, preços e vendas automáticas Privacy/OnlyFans.',
  },
  {
    number: '04',
    title: 'Modelo Shine',
    description:
      'Bônus de meta: academia, dias de estética, massagens, viagens e eventos vips exclusivos.',
  },
]

export default function Process() {
  return (
    <section id="processo" className={styles.section}>
      <div className={`glow-orb glow-orb-pink ${styles.orb}`} />

      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Carreira Shine</p>
          <h2 className={`heading-xl ${styles.title}`}>
            Foi selecionada,{' '}
            <span className="text-gradient-gold">agora vamos brilhar!</span>
          </h2>
          <p className={styles.subtitle}>
            Da viralização nas redes sociais ao alto numero de assinantes mensais.
          </p>
        </motion.div>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <motion.div
                    className={styles.connectorLine}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.12 + 0.4 }}
                  />
                </div>
              )}

              <div className={styles.stepInner}>
                {/* Number */}
                <div className={styles.stepNumber}>
                  <span className={styles.numberText}>{step.number}</span>
                  <div className={styles.numberRing} />
                </div>

                {/* Content */}
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
