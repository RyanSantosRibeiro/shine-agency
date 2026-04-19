import { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // ATENÇÃO: Troque "https://shineagency.com.br" pelo seu domínio real!
  const baseUrl = 'https://shineagency.vercel.app/'

  // Rotas estáticas
  const routes = ['', '/blog', '/privacidade', '/termos'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Rotas do Blog geradas automaticamente
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}
