import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Palette, Star, Users, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const coreValues = [
  { icon: Zap, title: 'INNOVATION', desc: 'Always exploring new ideas and technologies to push creative boundaries.' },
  { icon: Palette, title: 'CREATIVITY', desc: 'Building memorable and unique experiences that players remember.' },
  { icon: Star, title: 'QUALITY', desc: 'Maintaining high standards in every product we develop and deliver.' },
  { icon: Users, title: 'COMMUNITY', desc: 'Creating games that bring people together across the world.' },
  { icon: Target, title: 'EXECUTION', desc: 'Turning ambitious concepts into polished, production-ready reality.' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section blocks
      gsap.utils.toArray<HTMLElement>('.about-block').forEach((block, i) => {
        gsap.fromTo(block,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: block, start: 'top 80%' },
          }
        )
      })

      // Core value cards animation
      gsap.utils.toArray<HTMLElement>('.value-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.values-grid', start: 'top 85%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#030303] overflow-hidden"
    >
      <div className="w-full px-6 lg:px-16 max-w-7xl mx-auto">
        
        {/* Top Header / Slogan */}
        <div className="text-center mb-20 about-block opacity-0">
          <div className="section-label justify-center mb-6">
            <span>ABOUT D-ONE STUDIO</span>
          </div>
          <h2 className="font-orbitron text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tight leading-tight">
            ONE VISION • ONE TEAM • ONE FUTURE
          </h2>
        </div>

        {/* Who We Are & Mission / Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* Left Side: Who We Are */}
          <div className="about-block opacity-0">
            <h3 className="font-orbitron text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-done"></span> WHO WE ARE
            </h3>
            <p className="font-inter text-gray-400 text-base leading-relaxed mb-6">
              D-ONE Studio is an independent game development studio focused on creating immersive, innovative, and player-first gaming experiences. 
              We transform ideas into engaging digital products that connect players worldwide.
            </p>
            <p className="font-inter text-gray-400 text-base leading-relaxed">
              We operate at the intersection of stunning design and flawless engineering, building multiplayer architectures and vibrant virtual worlds for a global community of gamers.
            </p>
          </div>

          {/* Right Side: Mission & Vision */}
          <div className="space-y-8 about-block opacity-0">
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-done hover:border-l-[#fd5702] transition-colors duration-300">
              <h4 className="font-orbitron text-xl font-bold text-white mb-3">OUR MISSION</h4>
              <p className="font-inter text-sm text-gray-400 leading-relaxed">
                To build innovative, memorable, and player-focused games that inspire communities and deliver meaningful entertainment experiences across platforms.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-done hover:border-l-[#fd5702] transition-colors duration-300">
              <h4 className="font-orbitron text-xl font-bold text-white mb-3">OUR VISION</h4>
              <p className="font-inter text-sm text-gray-400 leading-relaxed">
                To become a globally recognized game development studio known for creativity, technological innovation, and exceptional game quality.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="about-block opacity-0">
          <div className="text-center mb-12">
            <h3 className="font-orbitron text-2xl lg:text-3xl font-bold">CORE VALUES</h3>
          </div>
          
          <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="value-card glass-panel rounded-2xl p-6 text-center opacity-0 hover:border-done/30 transition-all duration-500 group cursor-pointer card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-done/10 group-hover:border-done/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-done transition-colors" />
                  </div>
                  <h4 className="font-orbitron text-sm font-bold mb-3 text-white group-hover:text-done transition-colors">
                    {value.title}
                  </h4>
                  <p className="font-inter text-xs text-gray-400 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        
      </div>
    </section>
  )
}
