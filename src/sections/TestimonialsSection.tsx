import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const techStack = [
  { name: 'Next.js', category: 'Framework' },
  { name: 'React', category: 'UI Library' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Multiplayer Arch', category: 'Systems' },
  { name: 'Cloud Infra', category: 'Platform' },
  { name: 'Real-Time DBs', category: 'Data' },
  { name: 'Modern UI Systems', category: 'Design' },
  { name: 'Scalable Backend', category: 'Services' },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-header',
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
      gsap.utils.toArray<HTMLElement>('.tech-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6,
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
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black"
    >
      <div className="w-full px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Header */}
          <div className="tech-header w-full lg:w-1/3 opacity-0">
            <div className="section-label mb-4">
              <span>TECHNOLOGY</span>
            </div>
            <h2 className="font-orbitron text-4xl lg:text-6xl font-black leading-tight">
              TECH<br /><span className="text-done">STACK</span>
            </h2>
            <p className="font-inter text-sm text-gray-muted leading-relaxed mt-4 max-w-sm">
              D-ONE Studio develops products using modern technologies to deliver 
              cutting-edge gaming experiences.
            </p>
          </div>

          {/* Right: Tech cards */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="tech-card glass-panel rounded-2xl p-5 text-center opacity-0 hover:border-done/30 transition-all duration-500 group cursor-pointer card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-done/20 to-[#fd5702]/10 border border-done/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-orbitron text-lg font-bold text-done">{tech.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-orbitron text-xs font-bold group-hover:text-done transition-colors">{tech.name}</h4>
                  <p className="font-inter text-[10px] text-gray-500 mt-1">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
