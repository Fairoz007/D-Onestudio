import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CareersSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.careers-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
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
      className="relative w-full py-24 lg:py-32 bg-[#030303] overflow-hidden"
    >
      {/* Background element */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/iso-wireframe.png')] bg-right bg-no-repeat bg-contain opacity-[0.03] mix-blend-screen pointer-events-none" />

      <div className="w-full px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="careers-content glass-panel rounded-3xl p-10 lg:p-16 border-t-4 border-t-done opacity-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="w-full lg:w-2/3">
              <div className="section-label mb-6">
                <span>CAREERS AT D-ONE</span>
              </div>
              <h2 className="font-orbitron text-3xl lg:text-5xl font-black mb-6 tracking-tight">
                BUILD THE FUTURE OF <span className="text-done">GAMING</span> WITH US
              </h2>
              <p className="font-inter text-gray-400 text-base leading-relaxed max-w-xl">
                We are always looking for passionate game designers, engineers, and artists to join our team. 
                If you believe in our D-O-N-E philosophy and want to create industry-defining experiences, let's talk.
              </p>
            </div>

            <div className="w-full lg:w-1/3 flex lg:justify-end">
              <button className="neon-button group w-full sm:w-auto">
                <span className="flex items-center justify-center gap-3">
                  VIEW OPEN POSITIONS
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
