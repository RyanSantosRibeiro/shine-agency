import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../legal.module.css'

export const metadata = {
  title: 'Termos de Uso | Shine Agency',
  description: 'Termos e condições de uso do site corporativo da Shine Agency.',
}

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <article className={styles.article}>
            <h1 className={styles.title}>Termos de Uso</h1>
            
            <div className={styles.content}>
              <p>
                Bem-vindo ao site corporativo da <strong>Shine Agency</strong>. 
                Ao acessar e navegar pelo nosso website, você concorda em cumprir e sujeitar-se aos seguintes termos e condições de uso.
              </p>

              <h2>1. Natureza do Site e do Serviço</h2>
              <p>
                A Shine Agency é uma agência de representação e desenvolvimento, prestando serviços restritos para criadoras de conteúdo. 
                Este site atua primariamente como uma peça central de informações institucionais, além de fornecer um portal eletrônico de recrutamento.
              </p>
              <p>
                O ato de acessar o nosso site ou enviar suas informações pelo formulário de "Seleção" <strong>não garante</strong> qualquer tipo 
                de aprovação, contrato comercial ou associação automática entre o usuário e a Shine Agency.
              </p>

              <h2>2. Conduta do Usuário</h2>
              <p>Ao enviar informações por meio deste site, o usuário atesta que:</p>
              <ul>
                <li>Possui 18 (dezoito) anos completos ou mais. Nós não recrutamentos nem processamos intencionalmente informações de menores.</li>
                <li>Todas as informações (incluindo perfis de redes sociais) submetidas são verdadeiras e pertencem legalmente ao solicitante.</li>
                <li>Não utilizará os canais de contato da agência para envio de spams, conteúdos maliciosos, ofensivos ou que quebrem as leis vigentes.</li>
              </ul>

              <h2>3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo visual, metodologias descritas (como o "Método Shine"), textos organizacionais institucionais 
                e identidades textuais presentes neste portal pertencem estritamente à Shine Agency. A reprodução parcial 
                ou total não autorizada configura plágio e quebra de Direitos Autorais.
              </p>

              <h2>4. Limitação de Responsabilidades</h2>
              <p>
                As orientações publicadas em nossa página principal ou blog têm propósito puramente informativo ou de ilustração do modelo de atuação do mercado.
                A Shine Agency não se responsabiliza por métricas, resultados financeiros diretos ou indiretos causados pela aplicação das técnicas sugeridas nas publicações gratuitas 
                pelos usuários que não possuam vínculo jurídico concreto (contrato devidamente registrado) firmado com a nossa empresa.
              </p>

              <h2>5. Disposições Gerais</h2>
              <p>
                Estes Termos podem sofrer modificações ao longo do tempo para o atendimento ou reflexão de novos moldes legais da Internet Brasileira. 
                Continuar utilizando as dependências virtuais do site atesta sua aceitação aos Termos possivelmente ajustados. Para questionamentos jurídicos, 
                pedimos sempre o contato oficial por meio das nossas vias registradas.
              </p>

              <p style={{ marginTop: '3rem', fontSize: '0.9rem', opacity: 0.7 }}>
                Última atualização: Abril de 2024.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
