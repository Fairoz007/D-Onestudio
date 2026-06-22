import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const philosophy = [
  { letter: 'D', word: 'Dream', color: '#ff6a08' },
  { letter: 'O', word: 'Originality', color: '#fd5702' },
  { letter: 'N', word: 'Next', color: '#ff6a08' },
  { letter: 'E', word: 'Execute', color: '#fd5702' },
]

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.philosophy-title',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
      gsap.utils.toArray<HTMLElement>('.philosophy-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1, scale: 1, duration: 0.4,
            delay: i * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: { trigger: card, start: 'top 90%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black"
    >
      <div className="w-full px-6 lg:px-16">
        {/* Marquee title */}
        <div className="philosophy-title overflow-hidden mb-16 opacity-0">
          <div className="flex whitespace-nowrap justify-center">
            <span className="font-orbitron text-[8vw] lg:text-[6vw] font-black text-white/10 tracking-tight">
              ONE VISION. ONE TEAM. ONE FUTURE.
            </span>
          </div>
        </div>

        {/* Philosophy grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {philosophy.map((item, index) => (
            <div
              key={index}
              className="philosophy-card glass-panel rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-done/30 transition-all duration-500 group cursor-pointer opacity-0 card-hover"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-orbitron text-2xl font-black text-black transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: item.color }}
              >
                {item.letter}
              </div>
              <span className="font-orbitron text-xs font-bold text-white group-hover:text-done transition-colors">
                {item.word}
              </span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-12">
          <p className="font-inter text-gray-muted text-sm">
            Together, D-ONE represents <span className="text-done font-semibold">One Vision, One Team, One Future.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
