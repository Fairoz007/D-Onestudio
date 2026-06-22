import { useEffect, useRef } from 'react'
import { Play, Gamepad2 } from 'lucide-react'
import gsap from 'gsap'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
        '-=1'
      )
      .fromTo(taglineRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#030303]" />
        
        {/* Subtle, wide ambient lights instead of pulsing bright orbs */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-done/5 blur-[150px] opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-done-dark/5 blur-[150px] opacity-50 -translate-x-1/3 translate-y-1/3" />
        
        {/* Micro-grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 pt-20">
        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-orbitron text-[15vw] lg:text-[14vw] font-black leading-none tracking-tighter text-white opacity-0 select-none"
        >
          D-ONE
        </h1>

        {/* Description */}
        <div className="mt-6 lg:mt-8 ml-2 max-w-xl">
          <p ref={descRef} className="font-inter text-sm lg:text-lg text-gray-400 leading-relaxed opacity-0 font-light">
            An independent game development studio pushing boundaries.<br className="hidden sm:block" />
            <span className="text-white font-medium mt-2 inline-block tracking-wide">
              Dream • Originality • Next • Execute
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mt-10 ml-2 opacity-0">
          <button className="neon-button group">
            <span className="flex items-center gap-2">
              EXPLORE GAMES
              <Gamepad2 className="w-4 h-4 transition-transform group-hover:scale-110" />
            </span>
          </button>
          <button className="neon-button-outline group">
            <span className="flex items-center gap-2">
              WATCH REEL
              <Play className="w-3 h-3 fill-current transition-transform group-hover:scale-110" />
            </span>
          </button>
        </div>

        {/* STUDIO - background text */}
        <h2
          ref={subtitleRef}
          className="absolute bottom-16 right-6 lg:right-16 font-orbitron text-[14vw] lg:text-[12vw] font-black leading-none tracking-tighter text-transparent opacity-0 select-none pointer-events-none text-stroke"
        >
          STUDIO
        </h2>

        {/* Tagline bottom */}
        <div ref={taglineRef} className="absolute bottom-8 left-6 lg:left-16 flex items-center gap-4 opacity-0">
          <span className="w-12 h-[1px] bg-done/60" />
          <span className="font-orbitron text-xs text-white/80 tracking-[0.3em]">IDEAS. BUILT. D-ONE.</span>
        </div>
      </div>
    </section>
  )
}
