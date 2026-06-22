import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const missions = [
  {
    tag: 'Mission',
    title: 'OUR MISSION',
    desc: 'To build innovative, memorable, and player-focused games that inspire communities and deliver meaningful entertainment experiences.',
  },
  {
    tag: 'Vision',
    title: 'OUR VISION',
    desc: 'To become a globally recognized game development studio known for creativity, innovation, and exceptional game quality.',
  },
]

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.mission-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black"
    >
      <div className="w-full px-6 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">
            <span>WHO WE ARE</span>
          </div>
          <h2 className="font-orbitron text-3xl lg:text-5xl font-bold">MISSION & VISION</h2>
        </div>

        {/* Mission/Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {missions.map((item, index) => (
            <div
              key={index}
              className="mission-card glass-panel rounded-2xl p-8 lg:p-10 opacity-0 hover:border-done/30 transition-all duration-500 group card-hover relative overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute -right-6 -bottom-6 font-orbitron text-[150px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-done/10 border border-done/20 rounded-full text-done font-inter text-[10px] uppercase tracking-wider mb-4">
                  {item.tag}
                </span>
                <h3 className="font-orbitron text-2xl lg:text-3xl font-bold mb-4 group-hover:text-done transition-colors">
                  {item.title}
                </h3>
                <p className="font-inter text-sm lg:text-base text-gray-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
