'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'Eu preciso pagar alguma taxa para entrar na agência?',
    answer: 'Não. A Shine Agency atua em um modelo de parceria (revenue share). Nós só ganhamos se você ganhar. Investimos nossa infraestrutura, tráfego e time de gestão em você, em troca de um percentual justo acordado previamente do seu faturamento. Sem surpresas ou taxas ocultas.',
  },
  {
    question: 'A minha conta do OnlyFans/Privacy fica sendo de vocês?',
    answer: 'De forma alguma. As contas continuam sendo legalmente suas, registradas no seu nome e dados bancários. Nós apenas temos acesso administrativo para realizar postagens, chats e aplicar nosso Método de funil de vendas.',
  },
  {
    question: 'Como funciona a questão de Academia, Estética e Psicólogo?',
    answer: 'Tratar a modelo como o talento principal exige cuidado físico e mental real. No Modelo Shine, ao entrar ou atingir metas básicas estabelecidas, os custos com manicure, cabeleireiro, depilação a laser, academia e sessões regulares de terapia com psicóloga são fornecidos gratuitamente pela agência como nosso pacote de aceleração.',
  },
  {
    question: 'Não quero mostrar o meu rosto. Posso me candidatar assim mesmo?',
    answer: 'Sim! Nosso time avalia e aceita perfis "Faceless" (Sem Rosto) baseados na sua personalidade. Estratégias Faceless necessitam de um "ângulo forte" e uma gestão muito incisiva nas redes sociais, área onde nosso time atua ativamente.',
  },
  {
    question: 'O meu conteúdo sofre risco de vazamento?',
    answer: 'Toda criadora lida com esse risco na carreira, mas nossa prioridade é a sua paz. Temos recursos direcionados (DMCA) operando em varredura para rastrear fotos vazadas ou pirataria, entrando com solicitações jurídicas de forma consistente para remover materiais não-autorizados do Google, Fóruns ou Telegram.',
  }
]

export default function FAQ() {
  const [openIndex, setIndex] = useState<number | null>(null)

  const toggleOpen = (index: number) => {
    setIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.section}>
      <div className={`glow-orb glow-orb-accent ${styles.orb1}`} />
      
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Tire suas dúvidas</p>
          <h2 className={`heading-xl ${styles.title}`}>
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className={styles.subtitle}>
            Ainda não tem certeza se o Método Shine serve para você? Respostas transparentes para as perguntas de quem está pronta para dar o próximo passo.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <div 
                key={i} 
                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
              >
                <button 
                  className={styles.faqQuestion} 
                  onClick={() => toggleOpen(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={`${styles.iconWrap} ${isOpen ? styles.iconOpen : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className={styles.answerWrapper}
                    >
                      <div className={styles.faqAnswer}>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
