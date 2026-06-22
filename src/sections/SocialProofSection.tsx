import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "D-ONE Studio's multiplayer architecture handled our launch flawlessly. Their technical execution is truly unmatched.",
    author: "Alex Mercer",
    role: "Lead Producer",
  },
  {
    quote: "The level of creativity and polish they bring to the table elevates the final product beyond expectations.",
    author: "Sarah Chen",
    role: "Creative Director",
  }
]

const futureGames = [
  {
    title: 'PROJECT NEON',
    genre: 'Cyberpunk Racing',
    status: 'In Development',
    release: '2027',
  },
  {
    title: 'AETHER BLADE',
    genre: 'Action RPG',
    status: 'Pre-Production',
    release: 'TBA',
  }
]

export default function SocialProofSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proof-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#030303]"
    >
      <div className="w-full px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Testimonials */}
          <div>
            <div className="proof-fade mb-10 opacity-0">
              <div className="section-label mb-4">
                <span>COMMUNITY REVIEWS</span>
              </div>
              <h2 className="font-orbitron text-3xl font-black">WHAT THEY SAY</h2>
            </div>
            
            <div className="space-y-6">
              {testimonials.map((item, index) => (
                <div key={index} className="proof-fade glass-panel p-8 rounded-2xl opacity-0 relative group">
                  <Quote className="absolute right-6 top-6 w-12 h-12 text-white/5 group-hover:text-done/10 transition-colors duration-500" />
                  <p className="font-inter text-gray-300 text-sm leading-relaxed mb-6 italic relative z-10">
                    "{item.quote}"
                  </p>
                  <div>
                    <h4 className="font-orbitron text-sm font-bold text-white">{item.author}</h4>
                    <span className="font-inter text-xs text-done uppercase tracking-wider">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Future Games Pipeline */}
          <div>
            <div className="proof-fade mb-10 opacity-0">
              <div className="section-label mb-4">
                <span>PIPELINE</span>
              </div>
              <h2 className="font-orbitron text-3xl font-black">FUTURE GAMES</h2>
            </div>
            
            <div className="space-y-6">
              {futureGames.map((game, index) => (
                <div key={index} className="proof-fade border border-white/5 hover:border-white/10 bg-white/[0.02] p-8 rounded-2xl opacity-0 transition-colors duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-orbitron text-xl font-bold text-white group-hover:text-done transition-colors">{game.title}</h4>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-inter text-gray-400">
                      {game.release}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-inter text-sm text-gray-400">{game.genre}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-done/50"></span>
                    <span className="font-inter text-sm text-done font-medium">{game.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
