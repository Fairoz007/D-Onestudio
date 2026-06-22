import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Blocks, Type, Server, Cloud, Cpu, Network, Layers } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const technologies = [
  { name: 'Next.js', Icon: Code2 },
  { name: 'React', Icon: Blocks },
  { name: 'TypeScript', Icon: Type },
  { name: 'Node.js', Icon: Server },
  { name: 'Cloud Infrastructure', Icon: Cloud },
  { name: 'Real-Time Systems', Icon: Cpu },
  { name: 'Multiplayer Architectures', Icon: Network },
  { name: 'Modern UI Frameworks', Icon: Layers },
]

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.tech-item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, scale: 0.9, y: 20 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.5,
            delay: i * 0.05,
            ease: 'power2.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#000000]"
    >
      <div className="w-full px-6 lg:px-16 max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-[#FF6A08]" />
            <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">TECHNOLOGY STACK</span>
            <span className="w-8 h-[2px] bg-[#FF6A08]" />
          </div>
          <h2 className="font-space text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            POWERED BY INNOVATION
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.Icon
            return (
              <div
                key={index}
                className="tech-item glass-panel p-6 flex flex-col items-center justify-center gap-4 rounded-xl opacity-0 group hover:border-[#FF6A08]/50 transition-all duration-300 relative overflow-hidden cursor-crosshair"
              >
                {/* Tech grid background */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 106, 8, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 106, 8, 1) 1px, transparent 1px)`,
                    backgroundSize: '15px 15px',
                  }}
                />
                <Icon className="w-8 h-8 text-gray-500 group-hover:text-[#FF6A08] transition-colors duration-300 relative z-10" />
                <span className="font-exo text-xs font-bold tracking-widest text-gray-300 group-hover:text-white uppercase text-center relative z-10">
                  {tech.name}
                </span>
                
                {/* Scanline effect on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#FF6A08]/50 shadow-[0_0_10px_#FF6A08] -translate-y-[100%] group-hover:animate-[scan_2s_ease-in-out_infinite]" />
              </div>
            )
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(2000%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
