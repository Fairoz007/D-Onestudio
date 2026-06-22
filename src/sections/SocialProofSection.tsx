import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    quote: "D-ONE Studio's multiplayer architecture handled our launch flawlessly. Their technical execution is truly unmatched.",
    author: 'Alex Mercer',
    role: 'Lead Producer',
  },
  {
    quote: "The level of creativity and polish they bring to the table elevates the final product beyond expectations.",
    author: 'Sarah Chen',
    role: 'Creative Director',
  },
]

const pipeline = [
  {
    name: 'PROJECT NEON',
    year: '2027',
    genre: 'Cyberpunk Racing',
    status: 'In Development',
  },
  {
    name: 'AETHER BLADE',
    year: 'TBA',
    genre: 'Action RPG',
    status: 'Pre-Production',
  },
]

export default function SocialProofSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="social-proof"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#000000] border-t border-[#FF6A08]/10"
    >
      <div className="w-full px-6 lg:px-16 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 relative z-10">
        
        {/* Left Side: Reviews */}
        <div className="flex flex-col">
          <div className="mb-12 fade-up">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-[#FF6A08]" />
              <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">COMMUNITY REVIEWS</span>
            </div>
            <h2 className="font-space text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
              WHAT THEY SAY
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl relative overflow-hidden group fade-up">
                <Quote className="absolute top-6 right-6 w-24 h-24 text-[#FF6A08]/5 -rotate-12 group-hover:text-[#FF6A08]/10 transition-colors duration-500" />
                <p className="font-inter text-gray-300 text-lg italic leading-relaxed mb-8 relative z-10">
                  "{review.quote}"
                </p>
                <div className="flex flex-col relative z-10 border-l-2 border-[#FF6A08] pl-4">
                  <span className="font-space font-bold text-white uppercase tracking-wider">{review.author}</span>
                  <span className="font-exo text-xs text-[#FF6A08] uppercase tracking-widest">{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Pipeline */}
        <div className="flex flex-col lg:pl-12 lg:border-l border-white/5">
          <div className="mb-12 fade-up">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-[#FF6A08]" />
              <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">PIPELINE</span>
            </div>
            <h2 className="font-space text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
              FUTURE GAMES
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {pipeline.map((game, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl flex flex-col group cursor-pointer hover:border-[#FF6A08]/30 transition-colors duration-500 fade-up relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A08]/5 blur-[40px] group-hover:bg-[#FF6A08]/15 transition-colors" />
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="font-space font-black text-2xl text-white group-hover:text-[#FF6A08] transition-colors">{game.name}</span>
                  <span className="font-exo text-xs font-bold text-gray-500 tracking-widest">{game.year}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 mt-auto">
                  <div className="flex items-center gap-4">
                    <span className="font-inter text-sm text-gray-400 uppercase tracking-wider">{game.genre}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="font-inter text-sm text-[#FF6A08] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF6A08] animate-pulse" />
                      {game.status}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#FF6A08] transition-colors group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
