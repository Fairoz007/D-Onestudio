import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full bg-[#000000] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-gradient-to-r from-transparent via-[#FF6A08]/50 to-transparent shadow-[0_0_20px_#FF6A08]" />

      <div className="w-full px-6 lg:px-16 max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mb-16">
          
          {/* Logo & Brand */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <button onClick={scrollToTop} className="group flex flex-col items-center lg:items-start">
              <img
                src="/logo/logo.png"
                alt="D-ONE Studio"
                className="h-16 w-auto mb-4 group-hover:scale-105 transition-transform duration-500"
              />
              <span className="font-space font-black text-xl tracking-tighter text-white mb-2">
                D-ONE STUDIO
              </span>
              <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">
                Ideas. Built. D-ONE.
              </span>
            </button>
          </div>

          {/* Slogan */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <h3 className="font-space text-2xl lg:text-3xl font-black text-white/50 uppercase tracking-tighter mb-4">
              One Vision • One Team • One Future
            </h3>
            
            <div className="flex gap-6">
              <a href="#" className="font-exo text-xs font-bold tracking-widest text-gray-500 hover:text-[#FF6A08] transition-colors uppercase flex items-center gap-1 group">
                Privacy Policy
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="#" className="font-exo text-xs font-bold tracking-widest text-gray-500 hover:text-[#FF6A08] transition-colors uppercase flex items-center gap-1 group">
                Terms of Service
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-gray-600 uppercase tracking-wider">
            © 2026 D-ONE Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-inter text-xs text-gray-600 uppercase tracking-wider">
            <span>Powered by</span>
            <span className="text-[#FF6A08] font-space font-bold tracking-tighter">INNOVATION</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
