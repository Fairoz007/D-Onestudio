import { Play } from 'lucide-react';

export default function GamicsShowcaseSection() {
  return (
    <section className="py-24 bg-background" id="showcase" aria-label="showcase">
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl">
        
        <div className="relative text-center mb-16">
          <p className="text-brand-primary text-sm font-bold uppercase tracking-[0.3em] font-inter mb-4">
            Showcase
          </p>
          <h2 className="text-text-primary text-4xl lg:text-5xl font-extrabold uppercase font-orbitron mb-4">
            Studio <span className="text-brand-primary">Reel</span>
          </h2>
          <img src="/gamics/title-underline.png" alt="underline" className="mx-auto" />
        </div>

        <figure className="w-full relative img-holder before:pt-[45%] rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto group cursor-pointer border border-ui-glassBorder hover:border-brand-primary/30 transition-all duration-300">
          <img 
            src="/gamics/studio_reel_orange.png" 
            width="800" 
            height="470" 
            loading="lazy"
            alt="D-One Studio Reel" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <button 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-abyss hover:bg-brand-secondary hover:scale-110 transition-all duration-300 shadow-orange-glow z-10"
            aria-label="play video"
          >
            <Play className="w-8 h-8 ml-1" />
          </button>
        </figure>

        <div className="mt-16 text-center">
          <div className="bg-brand-primary text-abyss text-sm uppercase font-bold tracking-[2px] px-5 py-1.5 inline-block mx-auto mb-8">
            Upcoming Features
          </div>
          <h2 className="text-text-primary text-7xl md:text-9xl font-bold font-orbitron leading-none opacity-10 uppercase relative">
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[40%] text-text-primary text-shadow-md z-10 hidden md:block">
              REEL
            </span>
            08:30
          </h2>
        </div>

      </div>
    </section>
  );
}
