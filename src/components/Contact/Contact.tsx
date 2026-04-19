'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send } from 'lucide-react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`glow-orb glow-orb-gold ${styles.orb1}`} />
      <div className={`glow-orb glow-orb-pink ${styles.orb2}`} />

      <div className="container">
        <div className={styles.grid}>
          {/* Left — info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Contato</p>
            <h2 className={`heading-xl ${styles.title}`}>
              Pronta para{' '}
              <span className="text-gradient-gold">brilhar</span>?
            </h2>
            <p className={styles.lead}>
              Entre em contato e descubra como a Shine pode transformar
              sua carreira. Primeira conversa é gratuita e sem compromisso.
            </p>

            <div className={styles.channels}>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channel}
              >
                <div className={`${styles.channelIcon} ${styles.channelWhatsapp}`}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className={styles.channelLabel}>WhatsApp</p>
                  <p className={styles.channelValue}>Resposta em minutos</p>
                </div>
              </a>

              <a
                href="mailto:hello@shineagency.com.br"
                className={styles.channel}
              >
                <div className={`${styles.channelIcon} ${styles.channelEmail}`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={styles.channelLabel}>E-mail</p>
                  <p className={styles.channelValue}>hello@shineagency.com.br</p>
                </div>
              </a>

              <a
                href="https://instagram.com/shineagency"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channel}
              >
                <div className={`${styles.channelIcon} ${styles.channelInsta}`}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className={styles.channelLabel}>MessageCircle</p>
                  <p className={styles.channelValue}>@shineagency</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Nome</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome artístico"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>WhatsApp</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+55 (00) 00000-0000"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>E-mail</label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="platforms" className={styles.label}>Plataformas que usa</label>
                <input
                  id="platforms"
                  type="text"
                  placeholder="Ex: OnlyFans, Privacy, MessageCircle…"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Me conte um pouco sobre você</label>
                <textarea
                  id="message"
                  placeholder="Há quanto tempo cria conteúdo? Qual é seu maior desafio hoje?"
                  className={`${styles.input} ${styles.textarea}`}
                  rows={4}
                />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                Participar da seleção
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
