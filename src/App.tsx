import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import HeroSection from './sections/HeroSection'
import MarqueeText from './sections/MarqueeText'
import AboutSection from './sections/AboutSection'
import PortfolioSection from './sections/PortfolioSection'
import FeaturedGame from './sections/FeaturedGame'
import ServicesSection from './sections/ServicesSection'
import MarqueeSocial from './sections/MarqueeSocial'
import TeamSection from './sections/TeamSection'
import AwardsSection from './sections/AwardsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import BlogSection from './sections/BlogSection'
import FAQSection from './sections/FAQSection'
import PricingSection from './sections/PricingSection'
import ContactSection from './sections/ContactSection'
import PartnersSection from './sections/PartnersSection'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize scroll reveal animations for elements with .reveal class
    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeText />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <FeaturedGame />
        <MarqueeSocial />
        <TeamSection />
        <AwardsSection />
        <TestimonialsSection />
        <BlogSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <PartnersSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
