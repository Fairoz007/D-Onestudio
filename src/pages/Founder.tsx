import { useEffect } from 'react';

export default function Founder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl animate-fade-in-up">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-primary blur-[100px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="glass-panel p-4 rounded-3xl relative z-10 overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
              {/* Note: The image needs to be placed in the public folder or imported properly. Assuming it's in public/fairoz.png */}
              <img 
                src="/fairoz.png" 
                alt="Fairoz Faisal - Founder of D-One Studio" 
                className="w-full h-auto rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-primary rounded-tr-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-primary rounded-bl-3xl opacity-50"></div>
          </div>

          {/* Content */}
          <div>
            <div className="section-label mb-6">Meet the Founder</div>
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase font-orbitron mb-4">
              Fairoz <span className="text-brand-primary">Faisal</span>
            </h1>
            <h2 className="text-xl font-space uppercase tracking-[0.2em] text-text-muted mb-10">
              Founder & Creative Director
            </h2>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-inter">
              <p>
                Fairoz Faisal is a technology enthusiast, software developer, and creative visionary with experience in software engineering, cloud infrastructure, DevOps, UI/UX design, and digital product development.
              </p>
              <p>
                Driven by a lifelong passion for technology and interactive entertainment, he founded D-One Studio to create original gaming experiences that combine artistic creativity with technical innovation.
              </p>
              <p>
                His vision is to establish D-One Studio as a globally recognized independent game development company known for exceptional quality, memorable worlds, and meaningful player experiences.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://fairoz.in" target="_blank" rel="noopener noreferrer" className="neon-button">
                <span className="skew-x-[10deg] block">Personal Website</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
