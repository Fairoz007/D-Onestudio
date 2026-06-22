import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Gamepad2, Users, Server, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function CountUp({ end, suffix = '', prefix = '', duration = 2, padZero = false }: { end: number; suffix?: string; prefix?: string; duration?: number; padZero?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true
        const obj = { val: 0 }
        gsap.to(obj, {
          val: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => setCount(Math.floor(obj.val)),
        })
      },
    })

    return () => trigger.kill()
  }, [end, duration])

  const formattedCount = padZero ? count.toString().padStart(2, '0') : count.toLocaleString()

  return (
    <span ref={ref}>
      {prefix}{formattedCount}{suffix}
    </span>
  )
}

const stats = [
  { label: 'GAMES RELEASED', value: 1, suffix: '', padZero: true, Icon: Gamepad2 },
  { label: 'PLAYERS REACHED', value: 1000, suffix: '+', padZero: false, Icon: Users },
  { label: 'ONLINE SYSTEMS', value: 24, suffix: '/7', padZero: false, Icon: Server },
  { label: 'PLAYER FOCUSED', value: 100, suffix: '%', padZero: false, Icon: Star },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.stat-item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: -20 },
          {
            opacity: 1, x: 0, duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 lg:py-16 bg-[#000000] border-y border-[#FF6A08]/10"
    >
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#FF6A08] to-transparent shadow-[0_0_10px_rgba(255,106,8,0.8)]" />

      <div className="w-full px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex items-center gap-6 opacity-0 relative group w-full md:w-auto justify-center md:justify-start">
              {/* Divider between items on desktop */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/5" />
              )}
              
              <div className="text-[#FF6A08] group-hover:drop-shadow-[0_0_10px_rgba(255,106,8,0.5)] transition-all duration-300">
                <stat.Icon className="w-10 h-10 lg:w-12 lg:h-12" strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col">
                <div className="font-space text-3xl lg:text-4xl font-bold text-[#FF6A08] tracking-tighter mb-1 drop-shadow-[0_0_8px_rgba(255,106,8,0.3)]">
                  <CountUp end={stat.value} suffix={stat.suffix} padZero={stat.padZero} />
                </div>
                <p className="font-exo text-xs lg:text-sm text-gray-400 uppercase tracking-widest font-bold">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
