import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../legal.module.css'

export const metadata = {
  title: 'Política de Privacidade | Shine Agency',
  description: 'Política de Privacidade e uso de dados da Shine Agency.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <article className={styles.article}>
            <h1 className={styles.title}>Política de Privacidade</h1>
            
            <div className={styles.content}>
              <p>
                A <strong>Shine Agency</strong> ("nós", "nosso", ou "nossa") tem o compromisso de proteger a privacidade 
                e os dados pessoais de nossos visitantes e candidatas. Esta Política de Privacidade explica como coletamos, 
                usamos, armazenamos e compartilhamos informações quando você usa o nosso site.
              </p>

              <h2>1. Informações que Coletamos</h2>
              <p>Ao utilizar nosso formulário de contato ou seleção, podemos coletar os seguintes dados pessoais:</p>
              <ul>
                <li>Nome / Nome artístico;</li>
                <li>Número de telefone / WhatsApp;</li>
                <li>Endereço de e-mail;</li>
                <li>Links e nomes de contas em plataformas de terceiros (OnlyFans, Privacy, Instagram, etc);</li>
                <li>Quaisquer outras informações enviadas voluntariamente por você no campo de mensagens.</li>
              </ul>

              <h2>2. Uso das Informações</h2>
              <p>As informações fornecidas por você serão utilizadas estritamente para os seguintes propósitos:</p>
              <ul>
                <li>Avaliar sua candidatura para representação através da agência;</li>
                <li>Entrar em contato para agendar entrevistas ou fornecer feedbacks institucionais;</li>
                <li>Melhorar os processos de seleção corporativa da Shine Agency.</li>
              </ul>

              <h2>3. Compartilhamento e Armazenamento</h2>
              <p>
                Nós não vendemos, alugamos ou comercializamos suas informações pessoais para terceiros. 
                Seus dados são armazenados de forma segura em processadores em nuvem de extrema confiabilidade 
                (como o Google Workspace para gestão de planilhas). 
              </p>

              <h2>4. Seus Direitos</h2>
              <p>
                Você possui o direito de, a qualquer momento, solicitar a exclusão de seus dados submetidos nos nossos formulários, 
                assim como solicitar eventuais correções das informações que possuímos arquivadas. Para fazer essa solicitação,
                entre em contato conosco pelo nosso e-mail de suporte.
              </p>

              <h2>5. Contato</h2>
              <p>
                As questões relacionadas a esta Política de Privacidade, ou solicitações de exclusão de dados, devem ser 
                direcionadas ao endereço oficial: <strong>artificialwebservices@gmail.com</strong>.
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
