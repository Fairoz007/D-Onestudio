import { useEffect, useRef } from 'react'
import { Play, Gamepad2 } from 'lucide-react'
import gsap from 'gsap'
import FeaturedProjectCard from '../components/FeaturedProjectCard'

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
      className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-32 lg:pb-16"
    >
      {/* Premium futuristic sci-fi city background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.png)' }}
        />
        
        {/* Fog and atmospheric lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent" />
        <div className="absolute top-1/4 right-1/3 w-[50vw] h-[50vw] bg-[#FF6A08]/10 blur-[150px] rounded-full" />
        
        {/* Micro-grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 106, 8, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 106, 8, 1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Particles */}
        <div className="absolute inset-0 bg-[url('/particles.png')] opacity-30 mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between max-w-[1600px] mx-auto gap-12 lg:gap-8">
        
        {/* Left Side Content */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="flex flex-col gap-2">
            {/* Main Title */}
            <h1
              ref={titleRef}
              className="font-space text-[12vw] md:text-[8vw] lg:text-[7vw] font-black leading-[0.9] tracking-tighter text-white opacity-0"
            >
              D-ONE<br />
              <span className="text-[#FF6A08]">STUDIO</span>
            </h1>

            <h2 ref={subtitleRef} className="font-exo text-sm md:text-xl lg:text-2xl font-bold tracking-[0.3em] uppercase text-gray-300 mt-4 opacity-0 flex flex-wrap gap-x-4 gap-y-2">
              <span className="text-white">Dream</span><span className="text-[#FF6A08] hidden sm:inline">•</span>
              <span className="text-white">Originality</span><span className="text-[#FF6A08] hidden sm:inline">•</span>
              <span className="text-white">Next</span><span className="text-[#FF6A08] hidden sm:inline">•</span>
              <span className="text-white">Execute</span>
            </h2>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-xl">
            <p ref={descRef} className="font-inter text-base md:text-lg text-gray-400 leading-relaxed opacity-0">
              An independent game development studio creating immersive multiplayer experiences and innovative games that connect players worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mt-10 opacity-0 w-full sm:w-auto">
            <button className="neon-button group w-full sm:w-auto">
              <span className="flex items-center justify-center gap-3">
                EXPLORE GAMES
                <Gamepad2 className="w-5 h-5 transition-transform group-hover:scale-110" />
              </span>
            </button>
            <button className="neon-button-outline group w-full sm:w-auto">
              <span className="flex items-center justify-center gap-3">
                WATCH REEL
                <Play className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Side - Featured Project Card */}
        <div className="hidden lg:block w-full max-w-[420px] animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <FeaturedProjectCard />
        </div>
      </div>

      {/* Tagline bottom */}
      <div ref={taglineRef} className="absolute bottom-6 lg:bottom-12 left-6 lg:left-16 flex items-center gap-4 opacity-0">
        <span className="w-12 h-[2px] bg-[#FF6A08]" />
        <span className="font-exo text-[10px] lg:text-xs font-bold text-[#FF6A08] tracking-[0.4em] uppercase">IDEAS. BUILT. D-ONE.</span>
      </div>
    </section>
  )
}
