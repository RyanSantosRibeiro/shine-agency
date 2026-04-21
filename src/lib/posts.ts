import { postComoComecar } from './posts/como-comecar-produzir-conteudo-adulto'
import { postFaceless } from './posts/modelo-faceless-sem-rosto-funciona'
import { postQuantoGanha } from './posts/quanto-ganha-fazendo-conteudo-adulto'
import { postPrivacyOQueE } from './posts/privacy-o-que-e-e-gratuito'
import { postOnlyFansCriarConta } from './posts/onlyfans-criar-conta-passo-a-passo'
import { postLivesAdultas } from './posts/ganhar-dinheiro-lives-adultas'

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image: string
}

export const posts: Post[] = [
  postLivesAdultas,
  postOnlyFansCriarConta,
  postPrivacyOQueE,
  postQuantoGanha,
  postFaceless,
  postComoComecar,
  {
    slug: 'privacy-supera-onlyfans',
    title: 'Privacy supera OnlyFans como a plataforma mais acessada no Brasil',
    excerpt: 'Descubra como a plataforma brasileira assumiu a liderança do mercado de conteúdo adulto no país e o que isso significa para as criadoras.',
    date: '03 Janeiro 2024',
    category: 'Mercado',
    image: '/blog/post-1.png',
    content: `
## O cenário atual das plataformas

O mercado de conteúdo adulto cresce exponencialmente a cada ano. No Brasil, o cenário sofreu uma forte virada nos últimos meses: a plataforma Privacy superou o OnlyFans em acessos mensais no país.

Para criadoras que desejam maximizar receitas, é essencial estar onde o público está, além de entender as vantagens de cada plataforma. A Privacy tem a vantagem da facilidade de pagamento com Pix, o que aumenta absurdamente a conversão do público brasileiro. Em contrapartida, o OnlyFans ainda é o principal meio para internacionalizar os ganhos em dólar.

### 3 pontos importantes para considerar

1. **Facilidade de retenção**: o Pix e boleto ajudam a colocar assinantes dentro do funil, mas a recorrência ainda é um desafio sem cartão de crédito em muitos casos.
2. **Moeda forte**: ganhe em dólar e multiplique por 5, ou mantenha alta conversão em reais? Na Shine, recomendamos e estruturamos estar nas duas.
3. **Visibilidade**: ambas não entregam seu conteúdo para um público novo organicamente. Por isso a gestão de tráfego vinda do MessageCircle, TikTok e Twitter é primordial.

Seja no OnlyFans, Privacy, ou outras plataformas, a estratégia é a mesma: audiência construída nas redes abertas sendo enviada para a conversão nos perfis fechados. Se você ainda tem dúvidas de qual priorizar, converse com o nosso time de estruturação.
    `
  },
  {
    slug: 'seo-para-mercado-adulto',
    title: 'SEO para mercado adulto: Como atrair assinantes de forma orgânica pelo Google e Twitter',
    excerpt: 'Estratégias avançadas de posicionamento para que seus perfis não dependam apenas do algoritmo das redes e sim das buscas do seu público alvo.',
    date: '18 Abril 2024',
    category: 'Estratégia',
    image: '/blog/post-2.png',
    content: `
## Não dependa apenas do Reels e TikTok

Muitas criadoras se frustram tentando viralizar todos os dias em redes onde o banimento e o shadowban são uma sombra constante. Uma das formas mais seguras de tráfego é o **Tráfego de Busca** (SEO).

No Twitter, Reddit e até no Google, os assinantes em potencial estão ativamente procurando por nichos e fetiches. A questão é: quando eles pesquisarem, vão encontrar o seu perfil ou o da concorrência?

### Otimizando seu Linktree e Link na Bio

A construção do SEO da criadora começa por nomear corretamente seus links e utilizar palavras-chave nos perfis. Na Shine Agency, nós fazemos um estudo de palavras e hashtags mais buscadas que cruzam com as suas características e personalidade. Construímos o seu *naming* em cima disso.

Utilizar blogs, fóruns como Reddit e postagens otimizadas no X (Twitter) cria uma teia enorme capturando tráfego e mandando diretamente para assinaturas. É o que chamamos de receita previsível.

Quer parar de "rezar" pelo algoritmo e começar a usar estratégias com método? Leia mais no nosso guia completo de monetização.
    `
  },
  {
    slug: 'redes-sociais-novas-regras',
    title: 'Redes sociais de conteúdo adotam regras mais rígidas: Como proteger seu faturamento',
    excerpt: 'Com a recente onda de banimentos e novas diretrizes de comunidade no MessageCircle e TikTok, entenda as táticas para não perder tudo do dia para a noite.',
    date: '13 Janeiro 2024',
    category: 'Segurança',
    image: '/blog/post-3.png',
    content: `
## O pesadelo do banimento

Acordar e ver o perfil com 500 mil seguidores banido do MessageCircle é a realidade de dezenas de criadoras da noite para o dia. As Diretrizes de Comunidade estão extremas. A IA do MessageCircle consegue identificar insinuarões a olho nu.

Como se proteger e o que fazer para manter seu *faturamento* se o seu principal funil cair? 

### 1. Sistema de Backup de Contas

Nunca dependa de uma conta só. Pelo nosso modelo da Shine Agency, as criadoras devem ter, no mínimo, três contas backup esquentando. O público precisa ser redirecionado de maneira orgânica (e sutil) para as secundárias freqüentemente.

### 2. Captura de Leads (Telegram/WhatsApp)

Seu MessageCircle não é seu. Mas o número do WhatsApp e a lista do Telegram são seus! Toda bio deve enviar o usuário para um local que você controla. O OnlyFans é o fim da linha, mas o meio deve ser um grupo ou lista VIP. Assim, se a conta cair, você manda 1 notificação no Telegram e em 2 horas os fiéis estão na sua nova Mídia Social.

### 3. Conteúdo 'SFW' Estratégico nas Redes Abertas

Foque em lifestyle, humor ou talento nas redes como Insta e TikTok. O gatilho para o conteúdo adulto fica nas entrelinhas ou nos stories fechados. Chamar atenção de forma indireta sem acionar as red-flags.

Aqui na Shine, fazemos a auditoria diária do que pode e não pode subir, além do nosso processo de tentar recuperar as contas rapidamente através dos contatos certos.
    `
  }
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
