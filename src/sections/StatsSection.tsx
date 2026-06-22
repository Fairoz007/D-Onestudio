import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CountUp({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
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

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Games Released', value: 12, suffix: '' },
  { label: 'Active Players', value: 100000, suffix: '+' },
  { label: 'Development Hours', value: 50000, suffix: '+' },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.stat-item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.8,
            delay: i * 0.1,
            ease: 'back.out(1.5)',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-[#030303] border-y border-white/5"
    >
      <div className="w-full px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center px-4 opacity-0">
              <div className="font-orbitron text-3xl lg:text-5xl font-black text-transparent text-stroke-done drop-shadow-[0_0_15px_rgba(255,106,8,0.2)] mb-2 tracking-tight">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-inter text-xs lg:text-sm text-gray-400 uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
