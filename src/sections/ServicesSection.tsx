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
      className="relative w-full py-24 lg:py-32 bg-[#030303]"
    >
      <div className="w-full px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
        
        {/* Section header */}
        <div className="mb-16">
          <div className="section-label mb-4">
            <span>WHAT WE DO</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-orbitron text-3xl lg:text-5xl font-black">
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
                className="service-card glass-panel rounded-2xl p-6 lg:p-8 opacity-0 hover:border-done/20 transition-all duration-500 group cursor-pointer card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-done/10 group-hover:border-done/30 transition-colors">
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-done transition-colors" />
                </div>
                <h3 className="font-orbitron text-sm font-bold mb-4 text-white group-hover:text-done transition-colors leading-relaxed">
                  {service.title}
                </h3>
                <p className="font-inter text-xs text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
