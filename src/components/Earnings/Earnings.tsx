'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Sparkles,
  Heart,
  Dumbbell,
  Camera,
  Scale,
  Headset,
  Gift,
  MonitorPlay,
  HandCoins,
  Megaphone,
  Users,
  MessageCircle,
  Handshake,
} from 'lucide-react'
import styles from './Earnings.module.css'

const scenarios = [
  {
    id: 'starter',
    label: '5K-15K seguidores',
    description: 'Streamer em crescimento, 3-6 meses de operação Shine',
    revenues: [
      { icon: <MonitorPlay size={16} />, name: 'Subs Twitch / Kick', value: 'R$ 2.000 — R$ 6.000' },
      { icon: <HandCoins size={16} />, name: 'Donates / Bits', value: 'R$ 500 — R$ 3.000' },
      { icon: <Megaphone size={16} />, name: 'Publis em live e redes', value: 'R$ 800 — R$ 4.000' },
      { icon: <TrendingUp size={16} />, name: 'Monetização dos cortes', value: 'R$ 200 — R$ 1.500' },
      { icon: <MessageCircle size={16} />, name: 'Telegram Premium', value: 'R$ 500 — R$ 2.000' },
      { icon: <Handshake size={16} />, name: 'Parcerias de marca', value: 'R$ 0 — R$ 3.000' },
    ],
    total: 'R$ 4.000 — R$ 19.500',
  },
  {
    id: 'pro',
    label: '30K+ seguidores',
    description: 'Streamer estabelecida, 6-12 meses de operação Shine',
    revenues: [
      { icon: <MonitorPlay size={16} />, name: 'Subs Twitch / Kick', value: 'R$ 8.000 — R$ 25.000' },
      { icon: <HandCoins size={16} />, name: 'Donates / Bits', value: 'R$ 2.000 — R$ 8.000' },
      { icon: <Megaphone size={16} />, name: 'Publis em live e redes', value: 'R$ 3.000 — R$ 15.000' },
      { icon: <TrendingUp size={16} />, name: 'Monetização dos cortes', value: 'R$ 1.000 — R$ 5.000' },
      { icon: <MessageCircle size={16} />, name: 'Telegram Premium', value: 'R$ 2.000 — R$ 6.000' },
      { icon: <Handshake size={16} />, name: 'Parcerias de marca', value: 'R$ 2.000 — R$ 10.000' },
    ],
    total: 'R$ 18.000 — R$ 69.000',
  },
]

const benefits = [
  {
    icon: <Heart size={20} />,
    title: 'Psicólogo Exclusivo',
    desc: 'Sessões de terapia para proteção contra burnout. Sua saúde mental é prioridade.',
    color: 'accent',
  },
  {
    icon: <Camera size={20} />,
    title: 'Estética Completa',
    desc: 'Cabeleireiro, unhas, depilação e massagens — tudo pago pela agência.',
    color: 'pink',
  },
  {
    icon: <Dumbbell size={20} />,
    title: 'Academia & Nutrição',
    desc: 'Assinatura de academia e acompanhamento nutricional integrados.',
    color: 'gold',
  },
  {
    icon: <Scale size={20} />,
    title: 'Jurídico & Contábil',
    desc: 'Contratos de parceria, impostos e MEI — nossa assessoria terceirizada resolve.',
    color: 'accent',
  },
  {
    icon: <Headset size={20} />,
    title: 'Suporte Técnico Total',
    desc: 'Setup de OBS, overlays, alertas, qualidade de áudio e vídeo perfeitos.',
    color: 'pink',
  },
  {
    icon: <Gift size={20} />,
    title: 'Eventos VIP & Viagens',
    desc: 'Conforme você cresce, desbloqueamos experiências exclusivas.',
    color: 'gold',
  },
]

const colorMap: Record<string, string> = {
  gold: styles.benefitIconGold,
  accent: styles.benefitIconAccent,
  pink: styles.benefitIconPink,
}

export default function Earnings() {
  const [activeScenario, setActiveScenario] = useState(0)
  const scenario = scenarios[activeScenario]

  return (
    <section id="estimativa" className={styles.section}>
      <div className={`glow-orb glow-orb-accent ${styles.orb1}`} />
      <div className={`glow-orb glow-orb-gold ${styles.orb2}`} />

      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>Estimativa de Ganhos</span>
          </div>
          <h2 className={`heading-xl ${styles.title}`}>
            Quanto você pode{' '}
            <span className="text-gradient-gold">ganhar?</span>
          </h2>
          <p className={styles.subtitle}>
            Sozinha, você monetiza 1-2 canais. Com a Shine,{' '}
            <span className={styles.subtitleHighlight}>ativamos 6+ fontes de receita simultâneas</span>{' '}
            — multiplicando seu potencial de ganho em até 5x.
          </p>
        </motion.div>

        {/* Main content: Earnings + Benefits */}
        <div className={styles.content}>
          {/* LEFT — Earnings projection */}
          <motion.div
            className={styles.earningsCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.earningsLabel}>Projeção mensal</p>

            {/* Scenario tabs */}
            <div className={styles.scenarioTabs}>
              {scenarios.map((s, i) => (
                <button
                  key={s.id}
                  className={`${styles.scenarioTab} ${activeScenario === i ? styles.scenarioTabActive : ''}`}
                  onClick={() => setActiveScenario(i)}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <p className={styles.earningsScenario}>{scenario.description}</p>

            {/* Revenue rows */}
            <div className={styles.revenueList}>
              {scenario.revenues.map((rev, i) => (
                <motion.div
                  key={`${scenario.id}-${i}`}
                  className={styles.revenueRow}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div className={styles.revenueSource}>
                    <div className={styles.revenueIcon}>{rev.icon}</div>
                    <span className={styles.revenueName}>{rev.name}</span>
                  </div>
                  <span className={styles.revenueValue}>{rev.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Total */}
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Total estimado / mês</span>
              <span className={`${styles.totalValue} text-gradient-gold`}>
                {scenario.total}
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Benefits */}
          <motion.div
            className={styles.benefitsSide}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Quote message */}
            <div className={styles.benefitsMessage}>
              <p className={styles.benefitsQuote}>
                "Só se preocupe em{' '}
                <span className={`${styles.benefitsQuoteHighlight} text-gradient-gold`}>
                  fazer suas lives
                </span>
                . Nós cuidamos de você e de todo o resto."
              </p>
              <p className={styles.benefitsSubtext}>
                Branding, cortes, redes, parcerias, estética, psicólogo, contabilidade — tudo resolvido pela Shine.
                Você foca no seu talento, a gente faz o resto acontecer.
              </p>
            </div>

            {/* Benefit cards */}
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                whileHover={{ y: -3 }}
              >
                <div className={`${styles.benefitIcon} ${colorMap[benefit.color]}`}>
                  {benefit.icon}
                </div>
                <div className={styles.benefitContent}>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDesc}>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          className={styles.bottomBanner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.bannerTitle}>
            ✨ Sozinha = 1-2 fontes de renda.{' '}
            <span className="text-gradient-gold">Com a Shine = 6+ fontes simultâneas.</span>
          </p>
          <p className={styles.bannerSubtitle}>
            Não cobramos nada para você começar. Investimos em você desde o dia 1 — por isso nosso processo seletivo é rigoroso.
            Só ganhamos quando você ganha.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
