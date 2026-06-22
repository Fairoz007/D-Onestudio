import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lightbulb, Fingerprint, Rocket, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: Lightbulb,
    letter: 'D',
    word: 'DREAM',
    title: 'Research & Ideation',
    desc: 'Every great game begins with an idea, imagination, and ambition. We research, brainstorm, and create compelling concepts.',
  },
  {
    icon: Fingerprint,
    letter: 'O',
    word: 'ORIGINALITY',
    title: 'Unique Mechanics',
    desc: 'We create unique experiences, mechanics, and worlds that stand apart from everything else in the market.',
  },
  {
    icon: Rocket,
    letter: 'N',
    word: 'NEXT',
    title: 'Innovation & Tech',
    desc: 'We continuously innovate, explore new technologies, and push creative boundaries with cutting-edge tools.',
  },
  {
    icon: Target,
    letter: 'E',
    word: 'EXECUTE',
    title: 'Deliver & Ship',
    desc: 'Ideas become reality through disciplined development, attention to detail, and high-quality execution.',
  },
]

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.approach-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
      gsap.utils.toArray<HTMLElement>('.approach-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6,
            delay: i * 0.15,
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
      id="approach"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      <div className="w-full px-6 lg:px-16">
        {/* Header */}
        <div className="approach-header text-center mb-16 opacity-0">
          <div className="section-label justify-center mb-4">
            <span>OUR APPROACH</span>
          </div>
          <h2 className="font-orbitron text-3xl lg:text-5xl font-bold leading-tight mb-4">
            THE <span className="text-done">D-O-N-E</span> METHOD
          </h2>
          <p className="font-inter text-gray-muted text-sm lg:text-base max-w-2xl mx-auto">
            At D-ONE Studio, every project follows a structured process rooted in our core philosophy.
          </p>
        </div>

        {/* Approach cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="approach-card glass-panel rounded-2xl p-6 opacity-0 hover:border-done/30 transition-all duration-500 group cursor-pointer card-hover relative overflow-hidden"
              >
                {/* Background letter */}
                <span
                  className="absolute -right-4 -top-4 font-orbitron text-[120px] font-black text-white/[0.02] leading-none select-none pointer-events-none"
                >
                  {step.letter}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-done to-[#fd5702] flex items-center justify-center">
                      <span className="font-orbitron text-lg font-black text-black">{step.letter}</span>
                    </div>
                    <span className="font-orbitron text-xs tracking-widest text-done">{step.word}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-done/10 border border-done/20 flex items-center justify-center mb-4 group-hover:bg-done/20 transition-colors">
                    <Icon className="w-5 h-5 text-done" />
                  </div>
                  <h3 className="font-orbitron text-sm font-bold mb-3 group-hover:text-done transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-inter text-xs text-gray-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
