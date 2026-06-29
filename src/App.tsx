import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './sections/HeroSection'
import ContactSection from './sections/ContactSection'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-inter overflow-x-hidden selection:bg-done/30 selection:text-white">
      <main>
        <HeroSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
