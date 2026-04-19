'use client'

import { motion } from 'framer-motion'
import {
  Video,
  BarChart3,
  Users,
  Camera,
  Dumbbell,
  Heart,
  Sparkles,
  BadgeCheck,
  Shield
} from 'lucide-react'
import styles from './Services.module.css'

const services = [
  {
    icon: <Sparkles size={28} />,
    title: 'Identidade Visual & Branding',
    description:
      'Criação do seu logo, paleta, "media kit" profissional e templates (overlays/alertas para lives na Twitch e Kick).',
    color: 'gold',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Distribuição Multicanais',
    description:
      'Operação de clipagem! Pegamos uma live e criamos dezenas de cortes curtos (TikTok/Shorts) para alcance viral.',
    color: 'accent',
  },
  {
    icon: <Video size={28} />,
    title: 'Produção Audiovisual',
    description:
      'Direção, fotografia e vídeo em estúdio para criar conteúdo adulto de alta retenção e "ganchos" infalíveis.',
    color: 'pink',
  },
  {
    icon: <BadgeCheck size={28} />,
    title: 'Gestão Privacy e OF',
    description:
      'Uplods semanais, descrição provocante com gatilhos de vendas e precificação agressiva. Nós lidamos com a burocracia.',
    color: 'gold',
  },
  {
    icon: <Heart size={28} />,
    title: 'Suporte Psicológico',
    description:
      'O nosso maior diferencial. Proteção anti-burnout com sessões exclusivas de terapia. Sua saúde mental vem em primeiro lugar.',
    color: 'accent',
  },
  {
    icon: <Camera size={28} />,
    title: 'Estética Completa',
    description:
      'Tudo pago pela agência: dias de depilação a laser, cabeleireiro, unhas e massagens relaxantes para renovar seu visual.',
    color: 'pink',
  },
  {
    icon: <Dumbbell size={28} />,
    title: 'Performance Viva',
    description:
      'Assinatura de academia e acompanhamento nutricional integrados, blindando seu corpo, que é o seu maior ativo profissional.',
    color: 'gold',
  },
  {
    icon: <Shield size={28} />,
    title: 'Anti-Vazamentos (DMCA)',
    description:
      'Time forense para encontrar e derrubar conteúdos "piratas", protegendo seu direito autoral em fóruns e canais grátis.',
    color: 'accent',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      {/* Decorative orb */}
      <div className={`glow-orb glow-orb-accent ${styles.orb}`} />

      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Metodo Shine</p>
          <h2 className={`heading-xl ${styles.title}`}>
            Metodo Shine,{' '}
            <span className="text-gradient-gold">o processo para seu crescimento!</span>
          </h2>
          <p className={styles.subtitle}>
            Um processo único que une alta viralização , engajamento e monetização. Não se preocupe com nada, nós cuidamos de tudo para você.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className={`card ${styles.card} ${styles[`card-${service.color}`]}`}
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div className={`${styles.iconWrapper} ${styles[`icon-${service.color}`]}`}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
