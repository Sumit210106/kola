import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Scrollcounter from "@/components/scroll-counter"
import Projectparallax from "@/components/project-parallax"
import Map from '@/components/map'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Scrollcounter/>
      <AboutSection />
      <Map/>
      <Projectparallax/>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
