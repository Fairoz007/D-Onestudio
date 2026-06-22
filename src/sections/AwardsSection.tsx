import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Palette, Star, Users, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { icon: Zap, title: 'INNOVATION', desc: 'Always exploring new ideas and technologies to push creative boundaries.' },
  { icon: Palette, title: 'CREATIVITY', desc: 'Building memorable and unique experiences that players remember.' },
  { icon: Star, title: 'QUALITY', desc: 'Maintaining high standards in every product we develop and deliver.' },
  { icon: Users, title: 'COMMUNITY', desc: 'Creating games that bring people together across the world.' },
  { icon: Target, title: 'EXECUTION', desc: 'Turning ambitious concepts into polished, production-ready reality.' },
]

export default function AwardsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.value-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.5,
            delay: i * 0.08,
            ease: 'power3.out',
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
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">
            <span>WHAT DRIVES US</span>
          </div>
          <h2 className="font-orbitron text-3xl lg:text-5xl font-bold">CORE VALUES</h2>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="value-card glass-panel rounded-2xl p-6 text-center opacity-0 hover:border-done/30 transition-all duration-500 group cursor-pointer card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-done/10 border border-done/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-done/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-done" />
                </div>
                <h4 className="font-orbitron text-xs font-bold mb-2 group-hover:text-done transition-colors">
                  {value.title}
                </h4>
                <p className="font-inter text-[11px] text-gray-muted leading-relaxed">
                  {value.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
