import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    id: '01',
    title: 'DREAM',
    desc: 'Research, ideation, planning.',
  },
  {
    id: '02',
    title: 'ORIGINALITY',
    desc: 'Designing unique gameplay experiences.',
  },
  {
    id: '03',
    title: 'NEXT',
    desc: 'Innovation and technology integration.',
  },
  {
    id: '04',
    title: 'EXECUTE',
    desc: 'Delivering polished products.',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, i) => {
        gsap.fromTo(step,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#000000] border-y border-[#FF6A08]/10"
    >
      {/* Decorative center line */}
      <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#FF6A08]/30 to-transparent lg:-translate-x-1/2" />

      <div className="w-full px-6 lg:px-16 max-w-[1000px] mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-[#FF6A08]" />
            <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">OUR PROCESS</span>
            <span className="w-8 h-[2px] bg-[#FF6A08]" />
          </div>
          <h2 className="font-space text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            HOW IT'S D-ONE
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1
            return (
              <div
                key={index}
                className={`process-step opacity-0 relative flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node on Desktop */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#000000] border-2 border-[#FF6A08] shadow-[0_0_15px_rgba(255,106,8,0.8)] z-10" />

                {/* Mobile Node */}
                <div className="lg:hidden absolute left-[-22px] top-4 w-3 h-3 rounded-full bg-[#000000] border border-[#FF6A08] shadow-[0_0_10px_rgba(255,106,8,0.8)] z-10" />

                <div className={`flex-1 w-full ${isEven ? 'lg:text-right' : 'text-left'}`}>
                  <div className="glass-panel p-8 rounded-xl relative overflow-hidden group hover:border-[#FF6A08]/30 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A08]/5 blur-[50px] group-hover:bg-[#FF6A08]/10 transition-colors" />
                    
                    <h3 className="font-space text-5xl font-black text-white/5 mb-2 group-hover:text-[#FF6A08]/10 transition-colors">
                      {step.id}
                    </h3>
                    <h4 className="font-exo text-2xl font-bold text-[#FF6A08] tracking-widest uppercase mb-4">
                      {step.title}
                    </h4>
                    <p className="font-inter text-gray-400 text-sm leading-relaxed uppercase tracking-wider">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                <div className="hidden lg:block flex-1" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
