import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Services from '@/components/Services/Services'
import Marquee from '@/components/Marquee/Marquee'
import Process from '@/components/Process/Process'
import Testimonials from '@/components/Testimonials/Testimonials'
import Contact from '@/components/Contact/Contact'
import CTA from '@/components/CTA/CTA'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        {/* <Testimonials /> */}
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
