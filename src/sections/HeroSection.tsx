import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollIndRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 9. Reveal Mask Animation (Hero reveal from center)
    gsap.set(sectionRef.current, {
      clipPath: 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)'
    })

    // 2. Setup SplitText for Title
    const splitTitle = new SplitType(titleRef.current as HTMLElement, {
      types: 'chars',
    })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Reveal mask
      tl.to(sectionRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'power4.inOut'
      }, 0)
      
      // 6. Animate Background Image & 0.0s Timeline
      tl.fromTo(bgRef.current,
        { scale: 1.25, rotation: 2, filter: 'blur(8px)' },
        { scale: 1, rotation: 0, filter: 'blur(0px)', duration: 2, ease: 'power3.out' },
        0
      )

      // 0.3s Orange glow appears
      tl.fromTo(glowRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' },
        0.3
      )

      // 0.4s Grid fades in
      tl.fromTo(gridRef.current,
        { opacity: 0 },
        { opacity: 0.05, duration: 1 },
        0.4
      )

      // 0.5s Title letters animate individually
      if (splitTitle.chars) {
        tl.fromTo(splitTitle.chars, {
          opacity: 0,
          y: 80,
          rotateX: -90,
        }, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.04,
          duration: 1.2,
          ease: "power4.out",
        }, 0.5)
      }

      // 1.1s Logo rotates + scales in (7. Better Logo Animation)
      tl.fromTo(logoRef.current, {
        opacity: 0,
        scale: 0.7,
        rotate: -8,
        filter: "blur(10px)"
      }, {
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power4.out"
      }, 1.1)

      // 1.4s Subtitle reveals with blur (11. Animate Subtitle)
      tl.fromTo(subtitleRef.current, {
        letterSpacing: "20px",
        opacity: 0,
        filter: "blur(8px)"
      }, {
        letterSpacing: "2px",
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out"
      }, 1.4)

      // 1.7s CTA buttons slide in (12. CTA Buttons)
      tl.fromTo(ctaRef.current?.children as unknown as Element[], {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.5)"
      }, 1.7)

      // 2.0s Scroll indicator appears (13. Add Scroll Indicator)
      tl.fromTo(scrollIndRef.current, {
        opacity: 0,
        y: -10
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(scrollIndRef.current, {
            y: 12,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
          })
        }
      }, 2.0)

      // 2.2s Particles begin floating (5. Floating Particles)
      tl.add(() => {
        const particles = particlesRef.current?.children
        if (particles) {
          gsap.to(particles, {
            y: "-=100",
            x: "random(-50, 50)",
            opacity: "random(0.1, 0.4)",
            duration: "random(4, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
              each: 0.1,
              from: "random"
            }
          })
        }
      }, 2.2)

      // 2.5s Glow starts pulsing (4. Animate Orange Glow)
      tl.add(() => {
        gsap.to(glowRef.current, {
          scale: 1.3,
          opacity: 0.6,
          repeat: -1,
          yoyo: true,
          duration: 4,
          ease: "sine.inOut"
        })
      }, 2.5)

      // 3.0s Mouse parallax activates (3. Add Parallax Mouse Movement)
      tl.add(() => {
        const moveHero = (e: MouseEvent) => {
          gsap.to(bgRef.current, {
            x: (e.clientX - window.innerWidth / 2) * 0.02,
            y: (e.clientY - window.innerHeight / 2) * 0.02,
            duration: 1,
          })
          gsap.to(logoRef.current, {
            x: (e.clientX - window.innerWidth / 2) * 0.05,
            y: (e.clientY - window.innerHeight / 2) * 0.05,
            duration: 1,
          })
          gsap.to(titleRef.current, {
            x: (e.clientX - window.innerWidth / 2) * 0.03,
            y: (e.clientY - window.innerHeight / 2) * 0.03,
            duration: 1,
          })
        }
        window.addEventListener('mousemove', moveHero)
        
        // Clean up the event listener if context gets reverted
        return () => window.removeEventListener('mousemove', moveHero)
      }, 3.0)

      // 14. Background Grid Animation
      gsap.to(gridRef.current, {
        backgroundPosition: "300px 300px",
        duration: 40,
        repeat: -1,
        ease: "none"
      })

      // 15. Scroll-based Parallax
      gsap.to(bgRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })
      gsap.to(logoRef.current, {
        y: "50%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })
      gsap.to(titleRef.current, {
        scale: 1.1,
        y: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })
      gsap.to(glowRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })

    }, sectionRef)

    return () => {
      splitTitle.revert()
      ctx.revert()
    }
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-[-5%] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      
      {/* 10. CSS fallback for noise layer */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      {/* Background Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-[#000000]/70" />

        {/* Central Glow */}
        <div 
          ref={glowRef}
          className="absolute w-[80vw] max-w-[600px] h-[80vw] max-h-[600px] bg-[#FF6A08]/20 blur-[100px] md:blur-[150px] rounded-full opacity-0" 
        />
        
        {/* Micro-grid pattern overlay */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 106, 8, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 106, 8, 1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0'
          }}
        />

        {/* Particles */}
        <div ref={particlesRef} className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#FF6A08] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0,
                boxShadow: '0 0 10px 2px rgba(255,106,8,0.5)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center">
        
        {/* 8. Gradient Text Title */}
        <h1
          ref={titleRef}
          className="font-space text-[15vw] md:text-[8rem] lg:text-[10rem] font-black leading-none mb-4 md:mb-6 uppercase bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent"
          style={{ perspective: '1000px' }}
        >
          D-ONE STUDIO
        </h1>

        {/* Logo Image */}
        <img
          ref={logoRef}
          src="/logo/logo.png"
          alt="D-ONE STUDIO Logo"
          className="w-[60vw] max-w-[350px] h-auto object-contain opacity-0 mb-8 md:mb-10 drop-shadow-[0_0_20px_rgba(255,106,8,0.4)]"
        />

        {/* Subtitle */}
        <h2 
          ref={subtitleRef} 
          className="font-exo text-lg md:text-2xl lg:text-3xl font-bold uppercase text-gray-300 opacity-0 mb-10"
        >
          Launching Soon
        </h2>

        {/* 12. CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <button className="px-8 py-4 bg-[#FF6A08] text-white font-bold uppercase tracking-wider text-sm rounded shadow-[0_0_15px_rgba(255,106,8,0.2)] hover:bg-[#ff802b] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,106,8,0.6)]">
            Start Your Project
          </button>
          <button className="px-8 py-4 bg-transparent border border-gray-500 text-white font-bold uppercase tracking-wider text-sm rounded hover:border-[#FF6A08] hover:text-[#FF6A08] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,106,8,0.2)]">
            View Portfolio
          </button>
        </div>
      </div>

      {/* 13. Scroll Indicator */}
      <div ref={scrollIndRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 text-gray-400">
        <span className="font-exo text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  )
}
