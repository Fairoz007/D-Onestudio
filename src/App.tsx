import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import HeroSection from './sections/HeroSection'
import MarqueeText from './sections/MarqueeText'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProcessSection from './sections/ProcessSection'
import TechStackSection from './sections/TechStackSection'
import StatsSection from './sections/StatsSection'
import SocialProofSection from './sections/SocialProofSection'
import CareersSection from './sections/CareersSection'
import FAQSection from './sections/FAQSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#000000] flex items-center justify-center loading-screen">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[120px] h-[120px] rounded-full border border-done/20 animate-ping" />
        </div>
        <img
          src="/logo/logo.png"
          alt="D-ONE Loading"
          className="h-16 w-auto relative z-10 animate-pulse drop-shadow-[0_0_15px_rgba(255,106,8,0.2)]"
        />
      </div>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initial loading sequence
    const timer = setTimeout(() => {
      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: () => setLoading(false)
      })
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#030303] text-white font-inter overflow-x-hidden selection:bg-done/30 selection:text-white">
      {loading && <LoadingScreen />}
      
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Navbar />
        <main>
          <HeroSection />
          <MarqueeText />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <TechStackSection />
          <StatsSection />
          <SocialProofSection />
          <CareersSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
