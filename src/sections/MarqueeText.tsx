export default function MarqueeText() {
  const text = 'DREAM IT. BUILD IT. D-ONE.'
  const repeatCount = 6

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-black">
      {/* Glow line top */}
      <div className="glow-line absolute top-0 left-0" />

      {/* Marquee track */}
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: repeatCount * 2 }).map((_, i) => (
            <span
              key={i}
              className="font-orbitron text-[8vw] lg:text-[6vw] font-black tracking-tight mx-4 select-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255, 106, 8, 0.4)',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Glow line bottom */}
      <div className="glow-line absolute bottom-0 left-0" />
    </section>
  )
}
