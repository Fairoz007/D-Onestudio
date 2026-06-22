export default function MarqueeText() {
  const text = 'DREAM IT. BUILD IT. D-ONE.'
  const repeatCount = 6

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#000000] border-y border-[#FF6A08]/10">
      
      {/* Decorative top/bottom scanlines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6A08]/50 to-transparent shadow-[0_0_10px_#FF6A08]" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF6A08]/50 to-transparent shadow-[0_0_10px_#FF6A08]" />

      <div className="absolute inset-0 bg-[#FF6A08]/5 mix-blend-screen" />

      {/* Marquee track */}
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: repeatCount * 2 }).map((_, i) => {
            // Alternate styling for cyberpunk feel
            const isFilled = i % 2 === 0
            return (
              <div key={i} className="flex items-center mx-4">
                <span
                  className={`font-space text-[10vw] lg:text-[8vw] font-black tracking-tighter select-none ${
                    isFilled 
                      ? 'text-[#FF6A08] drop-shadow-[0_0_15px_rgba(255,106,8,0.4)]'
                      : 'text-transparent'
                  }`}
                  style={!isFilled ? { WebkitTextStroke: '1px rgba(255, 106, 8, 0.4)' } : {}}
                >
                  {text}
                </span>
                <div className="w-4 h-4 rounded-sm bg-[#FF6A08]/30 mx-8 rotate-45" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
