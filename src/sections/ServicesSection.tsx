import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Gamepad2, Users, Globe, Smartphone, Palette, Zap, MessageSquare, Server } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Gamepad2,
    title: 'GAME DESIGN & DEVELOPMENT',
    desc: 'Full-cycle game development from concept to launch. We create engaging, innovative games with attention to every detail.',
  },
  {
    icon: Users,
    title: 'MULTIPLAYER GAME SYSTEMS',
    desc: 'Scalable architectures supporting thousands of concurrent players with ultra-low latency.',
  },
  {
    icon: Globe,
    title: 'WEB-BASED GAMES',
    desc: 'Browser-accessible gaming experiences built with modern web technologies for instant, seamless play.',
  },
  {
    icon: Smartphone,
    title: 'MOBILE GAME DEVELOPMENT',
    desc: 'Native and cross-platform mobile games optimized for flawless performance across iOS and Android.',
  },
  {
    icon: Palette,
    title: 'UI/UX DESIGN',
    desc: 'Player-centric interface design that enhances engagement and creates highly intuitive gaming experiences.',
  },
  {
    icon: Zap,
    title: 'REAL-TIME MULTIPLAYER EXPERIENCES',
    desc: 'Live multiplayer interactions with real-time data synchronization and highly responsive game mechanics.',
  },
  {
    icon: MessageSquare,
    title: 'GAMING COMMUNITIES',
    desc: 'Building community-driven gaming platforms that foster deep player connections and long-term retention.',
  },
  {
    icon: Server,
    title: 'BACKEND INFRASTRUCTURE',
    desc: 'Robust, cloud-native backend services engineered to handle millions of requests with high availability.',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.service-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#000000]"
    >
      <div className="w-full px-6 lg:px-16 max-w-[1400px] mx-auto relative z-10">
        
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-[#FF6A08]" />
            <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">WHAT WE DO</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-space text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
              OUR SERVICES
            </h2>
            <p className="font-inter text-sm text-gray-400 max-w-md">
              Delivering complete end-to-end game development solutions tailored for global audiences and cross-platform play.
            </p>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card glass-panel rounded-xl p-6 lg:p-8 opacity-0 group cursor-pointer hover:border-[#FF6A08]/30 transition-colors duration-500 relative overflow-hidden"
              >
                {/* Micro grid inside card */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 106, 8, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 106, 8, 1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-[#FF6A08]/10 group-hover:border-[#FF6A08]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#FF6A08] drop-shadow-[0_0_8px_rgba(255,106,8,0.5)]" />
                  </div>
                  <h3 className="font-exo text-sm font-bold tracking-widest mb-4 text-white group-hover:text-[#FF6A08] transition-colors leading-relaxed uppercase">
                    {service.title}
                  </h3>
                  <p className="font-inter text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
