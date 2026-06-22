import { CheckCircle2, ArrowUpRight } from 'lucide-react'

export default function FeaturedProjectCard() {
  return (
    <div className="glass-panel p-6 lg:p-8 rounded-xl w-full max-w-[420px] card-hover group relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A08]/10 blur-[50px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-6 right-6 text-[#FF6A08]/50 font-exo text-xs font-bold tracking-[0.2em] transform rotate-90 origin-top-right">
        EO / LO
      </div>

      <div className="relative z-10">
        <h4 className="font-exo text-xs font-bold tracking-[0.2em] text-[#FF6A08] uppercase mb-4">
          Featured Project
        </h4>
        
        <h3 className="font-space text-3xl font-bold text-white mb-2">
          BINGO
        </h3>
        
        <p className="font-inter text-sm text-gray-400 mb-6 uppercase tracking-wider">
          Real-Time Multiplayer<br/>Bingo Platform
        </p>

        <ul className="space-y-3 mb-8">
          {[
            'Live Game Rooms',
            'Real-Time Gameplay',
            'Cross Platform',
            'Scalable Architecture'
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-3 font-inter text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-[#FF6A08]" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Dashboard Preview Placeholder */}
        <div className="w-full h-40 bg-black/50 rounded-lg border border-white/5 mb-8 relative overflow-hidden group-hover:border-[#FF6A08]/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A08]/10 to-transparent" />
          {/* Micro grid inside preview */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 106, 8, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 106, 8, 1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center font-space text-[#FF6A08]/50 text-sm tracking-widest font-bold">
            DASHBOARD PREVIEW
          </div>
        </div>

        <button className="neon-button-outline w-full group/btn">
          <span className="flex items-center justify-center gap-2">
            VISIT PROJECT
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </span>
        </button>
      </div>
    </div>
  )
}
