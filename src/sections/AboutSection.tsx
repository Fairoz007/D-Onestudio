import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lightbulb, Target, ArrowRight, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const philosophies = [
  {
    id: '01',
    title: 'DREAM',
    description: 'Every great game begins with imagination and ambition.',
    Icon: Lightbulb,
  },
  {
    id: '02',
    title: 'ORIGINALITY',
    description: 'We create unique experiences, mechanics, and worlds.',
    Icon: Target,
  },
  {
    id: '03',
    title: 'NEXT',
    description: 'We explore new technologies and push creative boundaries.',
    Icon: ArrowRight,
  },
  {
    id: '04',
    title: 'EXECUTE',
    description: 'Ideas become reality through discipline, quality, and execution.',
    Icon: CheckCircle,
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )

      // Cards animation
      gsap.utils.toArray<HTMLElement>('.philosophy-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: i * 0.15 + 0.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative w-full py-24 lg:py-32 bg-[#000000]">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#FF6A08]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div ref={headerRef} className="max-w-2xl opacity-0">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[2px] bg-[#FF6A08]" />
              <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">
                Our Philosophy
              </span>
            </div>
            <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
              Our Approach<br />To Game Development
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item) => (
            <div key={item.id} className="philosophy-card opacity-0 glass-panel p-8 rounded-xl card-hover group relative overflow-hidden flex flex-col h-full min-h-[300px]">
              
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 106, 8, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 106, 8, 1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
              
              {/* ID Number */}
              <div className="absolute bottom-6 left-6 font-space text-5xl font-black text-white/5 group-hover:text-[#FF6A08]/10 transition-colors duration-500 pointer-events-none">
                {item.id}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-black/50 border border-white/5 group-hover:border-[#FF6A08]/30 group-hover:bg-[#FF6A08]/10 transition-colors">
                    <item.Icon className="w-6 h-6 text-[#FF6A08]" />
                  </div>
                  <h3 className="font-exo text-xl font-bold tracking-widest text-[#FF6A08] uppercase">
                    {item.title}
                  </h3>
                </div>

                <p className="font-inter text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
