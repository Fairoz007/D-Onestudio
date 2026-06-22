export default function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden">
      {/* Top info bar */}
      <div className="w-full px-6 lg:px-16 py-6 border-t border-gray-800">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <span className="font-orbitron text-xs text-gray-500">Dream • Originality • Next • Execute</span>
          <span className="font-orbitron text-sm font-bold text-white">D-ONE STUDIO</span>
          <span className="font-inter text-xs text-gray-500">Independent Game Development</span>
        </div>
      </div>

      {/* Orange accent line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-done via-done-dark to-transparent" />

      {/* Main CTA area */}
      <div className="w-full px-6 lg:px-16 py-24 lg:py-40 text-center">
        <div className="section-label justify-center mb-6">
          <span>HAVE A PROJECT IN MIND?</span>
        </div>

        <h2 className="font-orbitron text-[12vw] lg:text-[10vw] font-black leading-none tracking-tighter animate-glow-pulse">
          LET'S<br />BUILD
        </h2>

        <button className="neon-button mt-12 mx-auto">
          GET IN TOUCH
        </button>
      </div>

      {/* Bottom bar */}
      <div className="w-full px-6 lg:px-16 py-6 border-t border-gray-800">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo/logo.png" alt="D-ONE" className="h-6 w-auto" />
            <span className="font-orbitron text-[10px] text-gray-600 tracking-wider">D-ONE STUDIO</span>
          </div>

          <span className="font-inter text-[10px] text-gray-500">
            Ideas. Built. D-ONE.
          </span>

          <span className="font-inter text-[10px] text-gray-600">Copyright © 2025 D-ONE Studio</span>
        </div>
      </div>
    </footer>
  )
}
