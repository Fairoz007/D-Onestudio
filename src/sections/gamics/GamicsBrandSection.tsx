export default function GamicsBrandSection() {
  const brands = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-12 bg-background" aria-label="brand">
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl">
        <p className="text-text-muted text-center text-sm font-inter uppercase tracking-widest mb-8">
          Trusted By Industry Leaders
        </p>
        <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {brands.map((item) => (
            <li key={item} className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-110">
              <img 
                src={`/gamics/brand-${item}.png`} 
                width="90" 
                height="90" 
                alt={`brand logo ${item}`} 
                loading="lazy" 
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
