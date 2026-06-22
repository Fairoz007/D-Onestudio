import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  {
    letter: 'D',
    word: 'DREAM',
    title: 'Research, ideation, planning.',
  },
  {
    letter: 'O',
    word: 'ORIGINALITY',
    title: 'Designing unique gameplay experiences.',
  },
  {
    letter: 'N',
    word: 'NEXT',
    title: 'Innovation and technology integration.',
  },
  {
    letter: 'E',
    word: 'EXECUTE',
    title: 'Delivering polished products.',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.process-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      // Timeline line animation
      gsap.fromTo(lineRef.current,
        { height: 0 },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      )

      // Step cards animation
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, i) => {
        gsap.fromTo(step,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
            },
          }
        )
      })

      // Step dots animation
      gsap.utils.toArray<HTMLElement>('.step-dot').forEach((dot) => {
        gsap.fromTo(dot,
          { scale: 0, backgroundColor: 'transparent' },
          {
            scale: 1,
            backgroundColor: '#ff6a08',
            duration: 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 60%',
            },
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
      className="relative w-full py-24 lg:py-32 bg-[#030303] overflow-hidden"
    >
      <div className="w-full px-6 lg:px-16 max-w-5xl mx-auto">
        
        <div className="process-header text-center mb-24 opacity-0">
          <div className="section-label justify-center mb-4">
            <span>OUR PROCESS</span>
          </div>
          <h2 className="font-orbitron text-3xl lg:text-5xl font-black">
            HOW IT'S <span className="text-done">D-ONE</span>
          </h2>
        </div>

        <div className="timeline-container relative w-full pt-10 pb-10">
          
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <div ref={lineRef} className="absolute top-0 left-0 w-full bg-gradient-to-b from-done to-[#fd5702] origin-top" />
          </div>

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={index} className="relative flex items-center md:justify-center w-full group">
                  
                  {/* Dot */}
                  <div className="step-dot absolute left-[20px] md:left-1/2 top-1/2 w-4 h-4 rounded-full border-4 border-[#030303] -translate-x-1/2 -translate-y-1/2 z-20" />

                  <div className={`process-step w-full md:w-[45%] flex pl-16 md:pl-0 ${isEven ? 'md:justify-end md:pr-12 lg:pr-16 md:-translate-x-[50%]' : 'md:justify-start md:pl-12 lg:pl-16 md:translate-x-[50%]'}`}>
                    <div className={`glass-panel p-8 rounded-2xl w-full relative overflow-hidden transition-all duration-500 hover:border-done/30 border-l-4 ${isEven ? 'md:border-l-0 md:border-r-4 border-l-done md:border-r-done' : 'border-l-done'}`}>
                      
                      {/* Background large letter */}
                      <span className={`absolute top-1/2 -translate-y-1/2 font-orbitron text-[120px] font-black text-white/[0.02] leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 ${isEven ? 'right-0 md:left-0 md:-translate-x-1/4' : 'right-0 translate-x-1/4'}`}>
                        {step.letter}
                      </span>
                      
                      <div className="relative z-10">
                        <span className="font-orbitron text-xs tracking-widest text-done mb-2 block uppercase">
                          Step 0{index + 1}
                        </span>
                        <h3 className="font-orbitron text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight">
                          {step.word}
                        </h3>
                        <p className="font-inter text-gray-400 text-sm lg:text-base">
                          {step.title}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
