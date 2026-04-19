import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // ATENÇÃO: Troque "https://shineagency.com.br" pelo seu domínio real!
  const baseUrl = 'https://shineagency.vercel.app/'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Bloqueia diretórios que o Googlebot não deve perder tempo
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
