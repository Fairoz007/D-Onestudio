import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const games = [
  { name: 'BINGO MULTIPLAYER', desc: 'A modern real-time multiplayer online Bingo platform with interactive game rooms and cross-device compatibility.', image: '/images/game-wasteland.jpg' },
  { name: 'WEB BATTLE ARENA', desc: 'Fast-paced web-based multiplayer battle arena with real-time player interactions and scalable backend.', image: '/images/game-fantasy.jpg' },
  { name: 'SKYFORGE MOBILE', desc: 'An immersive mobile RPG with stunning visuals, deep gameplay mechanics, and community features.', image: '/images/game-cyber.jpg' },
  { name: 'NEON RACER', desc: 'High-speed multiplayer racing with beautiful neon aesthetics and competitive leaderboards.', image: '/images/game-underwater.jpg' },
]

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.game-row').forEach((row, i) => {
        gsap.fromTo(row,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black"
    >
      <div className="w-full px-6 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">
            <span>OUR GAMES</span>
          </div>
          <h2 className="font-orbitron text-3xl lg:text-5xl font-bold">
            OUR PORTFOLIO
          </h2>
        </div>

        {/* Game list */}
        <div className="space-y-0">
          {games.map((game, index) => (
            <div
              key={game.name}
              className="game-row group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between py-6 lg:py-8 cursor-pointer">
                <div className="flex items-center gap-8 lg:gap-16">
                  <h3 className="font-orbitron text-xl lg:text-3xl font-bold tracking-wide group-hover:text-done transition-colors duration-300">
                    {game.name}
                  </h3>
                  <p className="hidden lg:block font-inter text-sm text-gray-muted max-w-md group-hover:text-gray-300 transition-colors">
                    {game.desc}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden lg:block font-inter text-xs text-gray-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-done group-hover:bg-done/10 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-done transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover image */}
              <div
                className={`absolute right-20 top-1/2 -translate-y-1/2 w-64 h-40 rounded-xl overflow-hidden transition-all duration-500 pointer-events-none ${
                  hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              </div>

              {/* Separator line */}
              <div className="h-[1px] bg-gray-800 relative overflow-hidden">
                <div className={`absolute inset-y-0 left-0 bg-done transition-all duration-700 ${hoveredIndex === index ? 'w-full' : 'w-0'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
