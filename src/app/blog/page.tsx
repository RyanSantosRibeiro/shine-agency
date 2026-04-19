import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { posts } from '@/lib/posts'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import styles from './Blog.module.css'

export const metadata = {
  title: 'Blog da Shine Agency | Dicas para Crescer no Privacy e OnlyFans',
  description: 'O maior guia de estratégias e marketing para criadoras de conteúdo adulto. Dicas práticas de gestão, produção e tráfego para viver de redes sociais.',
  keywords: ['agência onlyfans', 'como crescer no privacy', 'dicas para streamers', 'ganhar dinheiro com conteúdo', 'agenciamento de modelos']
}

export default function BlogList() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={`glow-orb glow-orb-gold ${styles.orb1}`} />
        <div className={`glow-orb glow-orb-accent ${styles.orb2}`} />

        <div className="container">
          <div className={styles.header}>
            <Link href="/" className={styles.backLink}>
              <ArrowLeft size={16} /> Voltar para o início
            </Link>
            <h1 className="heading-xl">
              Sex<span className="text-gradient-gold">Blog</span>
            </h1>
            <p className={styles.subtitle}>
              Conhecimento, estratégias e novidades sobre o mercado de conteúdo adulto.
            </p>
          </div>

          <div className={styles.grid}>
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className={`card ${styles.card}`}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.categoryBadge}>{post.category}</div>
                </div>

                <div className={styles.content}>
                  <h2 className={styles.title}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <Calendar size={14} /> {post.date}
                    </span>
                  </div>
                  
                  <span className={styles.readMore}>
                    Leia mais &raquo;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
