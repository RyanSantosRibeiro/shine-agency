'use client'

import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import styles from './Footer.module.css'

const footerLinks = {
  Agência: [
    { label: 'Início', href: '/#inicio' },
    { label: 'Nossos serviços', href: '/#servicos' },
    { label: 'Como funciona', href: '/#processo' },
    { label: 'Depoimentos', href: '/#depoimentos' },
  ],
  Recursos: [
    { label: 'Blog', href: '/blog' },
    { label: 'Para criadoras', href: '/#servicos' },
    { label: 'FAQ', href: '/#contato' },
  ],
  Legal: [
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className="text-gradient-gold" style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
                SHINE
              </span>
              <span style={{ fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.3em', color: 'rgba(240,237,232,0.35)', textTransform: 'uppercase', display: 'block', marginTop: '2px' }}>
                AGENCY
              </span>
            </Link>
            <p className={styles.tagline}>
              Estruturando o sucesso de criadoras de conteúdo com estratégia,
              cuidado e resultado real.
            </p>
            <div className={styles.socials}>
              <a href="#contato" className={styles.social} aria-label="Contato">
                <MessageCircle size={18} />
              </a>
              <a href="mailto:artificialwebservices@gmail.com" className={styles.social} aria-label="E-mail">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>{category}</h3>
              <ul className={styles.linkList}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} Shine Agency. Todos os direitos reservados.
          </p>
          <p className={styles.madeWith}>
            Feito com ✨ para criadoras que querem brilhar
          </p>
        </div>
      </div>
    </footer>
  )
}
