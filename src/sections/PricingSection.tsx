import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const taglines = [
  { main: 'Ideas. Built. D-ONE.', sub: 'Our core brand tagline' },
  { main: 'Dream It. Build It. D-ONE.', sub: 'The complete journey' },
  { main: 'One Vision. Infinite Possibilities.', sub: 'Our collective ambition' },
  { main: 'Where Great Games Begin.', sub: 'The starting point' },
]

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.tagline-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6,
            delay: i * 0.1,
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
      id="pricing"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black"
    >
      <div className="w-full px-6 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-4">
            <span>BRAND IDENTITY</span>
          </div>
          <h2 className="font-orbitron text-3xl lg:text-5xl font-bold mb-4">OUR TAGLINES</h2>
          <p className="font-inter text-gray-muted text-sm max-w-xl mx-auto">
            Every tagline embodies the spirit of D-ONE Studio — where ideas meet execution.
          </p>
        </div>

        {/* Tagline cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {taglines.map((tagline, index) => (
            <div
              key={index}
              className={`tagline-card glass-panel rounded-2xl p-6 opacity-0 transition-all duration-500 group cursor-pointer card-hover ${
                index === 0 ? 'border-done/30 ring-1 ring-done/10' : 'hover:border-done/30'
              }`}
            >
              {index === 0 && (
                <span className="inline-block px-2 py-1 bg-done/10 border border-done/20 rounded-full text-done font-inter text-[9px] uppercase tracking-wider mb-4">
                  Primary
                </span>
              )}
              <h3 className={`font-orbitron text-lg lg:text-xl font-bold mb-3 ${
                index === 0 ? 'text-done' : 'group-hover:text-done transition-colors'
              }`}>
                {tagline.main}
              </h3>
              <p className="font-inter text-xs text-gray-muted">{tagline.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
