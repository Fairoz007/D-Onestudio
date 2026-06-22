import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Cloud Infrastructure',
  'Real-Time Systems',
  'Multiplayer Architectures',
  'Modern UI Frameworks'
]

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )

      gsap.utils.toArray<HTMLElement>('.tech-pill').forEach((pill, i) => {
        gsap.fromTo(pill,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.5,
            delay: i * 0.05,
            ease: 'back.out(1.5)',
            scrollTrigger: { trigger: '.tech-grid', start: 'top 85%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-[#030303] overflow-hidden"
    >
      <div className="w-full px-6 lg:px-16 max-w-5xl mx-auto">
        <div className="tech-header text-center mb-12 opacity-0">
          <div className="section-label justify-center mb-4">
            <span>TECHNOLOGY STACK</span>
          </div>
          <h2 className="font-orbitron text-2xl lg:text-4xl font-bold">
            POWERED BY INNOVATION
          </h2>
        </div>

        <div className="tech-grid flex flex-wrap justify-center gap-4 lg:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-pill glass-panel px-6 py-4 rounded-xl opacity-0 flex items-center justify-center min-w-[160px] text-center hover:border-done/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <span className="font-orbitron text-sm font-semibold tracking-wide text-gray-200">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
