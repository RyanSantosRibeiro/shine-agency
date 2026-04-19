'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { posts } from '@/lib/posts'
import styles from './BlogSlider.module.css'

export default function BlogSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  // Coletamos as 4 postagens mais recentes do repositório de posts
  const recentPosts = posts.slice(0, 4)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.8 // Anda de bloco em bloco
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="section-label">Aprenda e Cresça</p>
            <h2 className={`heading-xl ${styles.title}`}>
              Dicas no nosso <span className="text-gradient-gold">Blog</span>
            </h2>
          </div>
          
          <div className={styles.controlsDesktop}>
             <Link href="/blog" className={styles.viewAll}>
               Ver todos os artigos <ArrowRight size={16} />
             </Link>
             <div className={styles.arrows}>
               <button onClick={() => scroll('left')} className={styles.arrowBtn} aria-label="Anterior">
                 <ChevronLeft size={20} />
               </button>
               <button onClick={() => scroll('right')} className={styles.arrowBtn} aria-label="Próximo">
                 <ChevronRight size={20} />
               </button>
             </div>
          </div>
        </div>

        <div className={styles.sliderWrap}>
          <div className={styles.slider} ref={scrollRef}>
            {recentPosts.map((post, i) => {
              const isHighlight = i === 0;

              return (
                <div key={post.slug} className={`${styles.slide} ${isHighlight ? styles.slideHighlight : ''}`}>
                  <Link href={`/blog/${post.slug}`} className={styles.card}>
                    <div className={styles.imageWrap}>
                      {isHighlight && <div className={styles.badgeHighlight}>Mais Recente</div>}
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        sizes={isHighlight ? "(max-width: 768px) 85vw, 500px" : "(max-width: 768px) 85vw, 400px"}
                        className={styles.image} 
                      />
                      <div className={styles.categoryBadge}>{post.category}</div>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.meta}>
                        <Calendar size={14} /> {post.date}
                      </div>
                      <h3 className={styles.postTitle}>{post.title}</h3>
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                      
                      <div style={{marginTop: 'auto'}}>
                        <span className={styles.readMore}>Ler artigo completo <ArrowRight size={14}/></span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* View All on Mobile Only */}
        <div className={styles.mobileViewAll}>
          <Link href="/blog" className={`btn btn-secondary ${styles.viewAllBtn}`}>
            Acessar o Blog de Dicas
          </Link>
        </div>
      </div>
    </section>
  )
}
