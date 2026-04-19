'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', platforms: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'' | 'success' | 'error'>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // COLE A URL DO SEU GOOGLE APPS SCRIPT AQUI DENTRO DAS ASPAS
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyz2XJzxYZ8k7zHJKk4i94fD_Ifd6ZkJQsuhrCp6aGm3KLgUdX8CfRiNZs_08qFUIdXqA/exec'

    if(!GOOGLE_SCRIPT_URL) {
      alert("⚠️ Atenção: A URL do Google Sheets não foi configurada no código!")
      setIsSubmitting(false)
      return
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      setStatus('success')
      setFormData({ name: '', phone: '', email: '', platforms: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }

    setIsSubmitting(false)
    setTimeout(() => setStatus(''), 6000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
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
                href="#contato"
                className={styles.channel}
              >
                <div className={`${styles.channelIcon} ${styles.channelWhatsapp}`}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className={styles.channelLabel}>Formulário</p>
                  <p className={styles.channelValue}>Preencha ao lado</p>
                </div>
              </a>

              <a
                href="mailto:artificialwebservices@gmail.com"
                className={styles.channel}
              >
                <div className={`${styles.channelIcon} ${styles.channelEmail}`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={styles.channelLabel}>E-mail</p>
                  <p className={styles.channelValue}>artificialwebservices@<br/>gmail.com</p>
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
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Nome</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome artístico"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="platforms" className={styles.label}>Plataformas que usa</label>
                <input
                  id="platforms"
                  type="text"
                  placeholder="Ex: OnlyFans, Privacy, Instagram…"
                  className={styles.input}
                  value={formData.platforms}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Me conte um pouco sobre você</label>
                <textarea
                  id="message"
                  placeholder="Há quanto tempo cria conteúdo? Qual é seu maior desafio hoje?"
                  className={`${styles.input} ${styles.textarea}`}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {status === 'success' && (
                <div style={{color: '#25D366', display: 'flex', gap: '8px', fontSize: '14px', alignItems: 'center'}}>
                  <CheckCircle2 size={18} /> Sua candidatura foi enviada com sucesso! Entraremos em contato.
                </div>
              )}
              {status === 'error' && (
                <div style={{color: '#e91e8c', display: 'flex', gap: '8px', fontSize: '14px', alignItems: 'center'}}>
                  <AlertCircle size={18} /> Ocorreu um erro ao enviar. Tente novamente mais tarde.
                </div>
              )}

              <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={isSubmitting}>
                {isSubmitting ? 'Enviando aguarde...' : 'Participar da seleção'}
                {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
