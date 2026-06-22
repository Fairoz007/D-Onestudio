import { useEffect, useRef } from 'react'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedGame() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.featured-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
      
      gsap.fromTo('.featured-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.featured-card', start: 'top 85%' },
        }
      )

      gsap.fromTo('.screenshot-card',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.screenshots-grid', start: 'top 85%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    'Real-time multiplayer gameplay',
    'Interactive game rooms',
    'Cross-device compatibility',
    'Modern responsive UI',
    'Live player interactions',
    'Scalable backend architecture',
  ]

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#030303]"
    >
      <div className="w-full px-6 lg:px-16 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="featured-header text-center mb-16 opacity-0">
          <div className="section-label justify-center mb-4">
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="font-orbitron text-4xl lg:text-6xl font-black text-white tracking-tight">
            BINGO <span className="text-done">MULTIPLAYER</span>
          </h2>
          <p className="font-inter text-gray-400 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
            A modern multiplayer online Bingo platform developed by D-ONE Studio. 
            Demonstrating our ability to design, develop, and deploy complete gaming experiences.
          </p>
        </div>

        {/* Project Showcase Card */}
        <div className="featured-card glass-panel rounded-3xl p-8 lg:p-12 mb-12 opacity-0">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            
            {/* Left: Project Details & Features */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-8">
                PROJECT HIGHLIGHTS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-done shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-gray-300 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://bingo.fairoz.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button text-[11px] group"
                >
                  <span className="flex items-center gap-2">
                    VISIT PROJECT
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Abstract Card Display */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-done/10 to-transparent blur-xl" />
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-done to-done-dark flex items-center justify-center shadow-[0_0_30px_rgba(255,106,8,0.3)]">
                    <span className="font-orbitron text-5xl font-black text-black">B</span>
                  </div>
                  <h4 className="font-orbitron text-2xl font-bold text-white mb-2">BINGO</h4>
                  <p className="font-inter text-sm text-done mb-6">bingo.fairoz.in</p>
                  
                  <div className="flex justify-center gap-6 text-center border-t border-white/10 pt-6">
                    <div>
                      <span className="block font-orbitron text-xl font-bold text-white">LIVE</span>
                      <span className="font-inter text-xs text-gray-500 uppercase tracking-widest mt-1 block">Status</span>
                    </div>
                    <div className="w-[1px] h-12 bg-white/10" />
                    <div>
                      <span className="block font-orbitron text-xl font-bold text-white">WEB</span>
                      <span className="font-inter text-xs text-gray-500 uppercase tracking-widest mt-1 block">Platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Project Screenshots Section */}
        <div className="screenshots-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="screenshot-card relative group rounded-2xl overflow-hidden border border-white/5 opacity-0">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src="/images/bingo-lobby.png" 
              alt="Bingo Lobby Interface" 
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
              <span className="inline-block px-3 py-1 bg-done/20 border border-done/30 text-done font-orbitron text-[10px] tracking-wider rounded-full mb-3">
                LOBBY INTERFACE
              </span>
              <h4 className="font-orbitron text-lg font-bold text-white">Interactive Game Rooms</h4>
            </div>
          </div>
          
          <div className="screenshot-card relative group rounded-2xl overflow-hidden border border-white/5 opacity-0">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src="/images/bingo-gameplay.png" 
              alt="Bingo Gameplay Interface" 
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
              <span className="inline-block px-3 py-1 bg-done/20 border border-done/30 text-done font-orbitron text-[10px] tracking-wider rounded-full mb-3">
                LIVE GAMEPLAY
              </span>
              <h4 className="font-orbitron text-lg font-bold text-white">Real-Time Multiplayer Grid</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
