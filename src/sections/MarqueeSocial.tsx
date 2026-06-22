export default function MarqueeSocial() {
  const text = 'D-ONE STUDIO'
  const repeatCount = 8

  return (
    <section className="relative w-full py-12 lg:py-16 overflow-hidden bg-black">
      <div className="glow-line absolute top-0 left-0" />

      <div className="relative flex overflow-hidden">
        <div className="marquee-track-reverse flex whitespace-nowrap items-center">
          {Array.from({ length: repeatCount * 2 }).map((_, i) => (
            <span key={i} className="flex items-center mx-4">
              <span
                className="font-orbitron text-[6vw] lg:text-[4vw] font-black tracking-tight"
                style={{
                  color: i % 4 < 2 ? '#ff6a08' : 'transparent',
                  WebkitTextStroke: i % 4 < 2 ? 'none' : '1px rgba(255, 106, 8, 0.3)',
                }}
              >
                {text}
              </span>
              <span className="font-inter text-[2vw] lg:text-[1vw] text-gray-500 mx-4 tracking-widest">•</span>
              <span
                className="font-orbitron text-[6vw] lg:text-[4vw] font-black tracking-tight"
                style={{
                  color: i % 4 >= 2 ? '#ff6a08' : 'transparent',
                  WebkitTextStroke: i % 4 >= 2 ? 'none' : '1px rgba(255, 106, 8, 0.3)',
                }}
              >
                IDEAS. BUILT.
              </span>
              <span className="font-inter text-[2vw] lg:text-[1vw] text-gray-500 mx-4 tracking-widest">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="glow-line absolute bottom-0 left-0" />
    </section>
  )
}
