import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shine Agency | Estruturando o Sucesso de Criadoras de Conteúdo',
  description:
    'A Shine Agency é especializada em dar toda a estrutura para criadoras de conteúdo adulto crescerem: edição, gerenciamento de redes, produção, suporte à modelo, academia e estética.',
  keywords: [
    'agência criadora de conteúdo',
    'only fans agency',
    'gestão de criadoras',
    'shine agency',
    'agência conteúdo adulto brasil',
  ],
  openGraph: {
    title: 'Shine Agency | Estruturando o Sucesso de Criadoras de Conteúdo',
    description:
      'Edição, gerenciamento de redes, produção, suporte à modelo e muito mais. Venha brilhar com a Shine.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Shine Agency',
  },
  robots: { index: true, follow: true },
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
