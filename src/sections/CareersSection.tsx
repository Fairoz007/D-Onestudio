import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Crosshair } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CareersSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.career-content',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="careers"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#000000] flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] bg-[#FF6A08]/5 blur-[100px] rounded-full" />
        
        {/* Cyberpunk Crosshairs */}
        <Crosshair className="absolute top-12 left-12 w-8 h-8 text-[#FF6A08]/20 animate-pulse" />
        <Crosshair className="absolute bottom-12 right-12 w-8 h-8 text-[#FF6A08]/20 animate-pulse" />
      </div>

      <div className="w-full px-6 lg:px-16 max-w-4xl mx-auto relative z-10">
        <div className="career-content glass-panel p-10 lg:p-16 rounded-2xl border border-[#FF6A08]/20 text-center relative overflow-hidden group hover:border-[#FF6A08]/40 transition-colors duration-500">
          
          {/* Subtle grid in card */}
          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 106, 8, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 106, 8, 1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[2px] bg-[#FF6A08]" />
              <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">CAREERS AT D-ONE</span>
              <span className="w-8 h-[2px] bg-[#FF6A08]" />
            </div>
            
            <h2 className="font-space text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6">
              BUILD THE FUTURE OF<br />GAMING WITH US
            </h2>
            
            <p className="font-inter text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
              We are always looking for passionate game designers, engineers, and artists to join our team. If you believe in our D-O-N-E philosophy and want to create industry-defining experiences, let's talk.
            </p>

            <button className="neon-button group/btn">
              <span className="flex items-center justify-center gap-3">
                VIEW OPEN POSITIONS
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
