import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { getPostBySlug } from '@/lib/posts'
import styles from './Post.module.css'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Shine Agency`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: any) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={16} /> Voltar para o blog
          </Link>
          
          <article className={styles.article}>
            {/* Header */}
            <header className={styles.header}>
              <div className={styles.meta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.date}>
                  <Calendar size={14} /> {post.date}
                </span>
              </div>
              <h1 className={styles.title}>{post.title}</h1>
            </header>

            {/* Feature Image */}
            <div className={styles.imageWrapper}>
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                priority
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>

            {/* Content */}
            <div className={styles.content}>
               <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Author SEO Bio (E-E-A-T) */}
            <section className={styles.authorBio}>
              <div className={styles.authorAvatar}>
                <span className={styles.avatarLetter}>S</span>
              </div>
              <div className={styles.authorInfo}>
                <h3 className={styles.authorName}>Equipe Shine Agency</h3>
                <p className={styles.authorDesc}>
                  Especialistas em gestão, marketing e planejamento de carreiras no mercado adulto. Nossa missão é 
                  ajudar criadoras a transformarem suas redes sociais em empresas rentáveis, garantindo escala, 
                  proteção e bem-estar.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
