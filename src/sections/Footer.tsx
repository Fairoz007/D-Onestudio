export default function Footer() {
  return (
    <footer className="relative w-full bg-[#000000] overflow-hidden pt-16 pb-8 border-t border-white/5">
      <div className="w-full px-6 lg:px-16 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo/logo.png" 
            alt="D-ONE Studio Logo" 
            className="h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,106,8,0.1)]"
          />
        </div>

        {/* Taglines */}
        <div className="space-y-4 mb-12">
          <h2 className="font-orbitron text-xl lg:text-2xl font-black text-white tracking-widest uppercase">
            D-ONE STUDIO
          </h2>
          <p className="font-orbitron text-sm text-done tracking-[0.2em] uppercase">
            Ideas. Built. D-ONE.
          </p>
          <p className="font-inter text-gray-500 text-sm tracking-wide">
            One Vision • One Team • One Future
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-inter text-xs text-gray-600">
            © {new Date().getFullYear()} D-ONE Studio. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="font-inter text-xs text-gray-600 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-inter text-xs text-gray-600 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
