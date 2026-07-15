export default function GamicsHeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-background overflow-hidden" 
      id="home" 
      aria-label="home"
    >
      {/* Subtle background container without glow */}

      <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          <div className="flex-1 text-center lg:text-left">
            <p className="text-brand-primary text-sm font-bold uppercase tracking-[0.3em] font-inter mb-4">
              Digital Excellence
            </p>
            
            <h1 className="text-text-primary text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase font-orbitron leading-tight mb-6">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-cta">D-One Studio</span>
            </h1>

            <p className="text-text-secondary text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0 font-inter leading-relaxed mb-10">
              We are a full-service creative and technology agency building scalable, user-centric digital experiences and forward-thinking branding.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#portfolio" 
                className="bg-gradient-button text-white font-bold uppercase px-8 py-4 transform -skew-x-[10deg] hover:-translate-y-1 transition-all duration-300 font-orbitron tracking-wider border border-transparent"
              >
                <span className="skew-x-[10deg] block">Our Work</span>
              </a>
              <a 
                href="#services" 
                className="bg-transparent border border-brand-primary text-text-primary hover:bg-brand-primary/10 font-bold uppercase px-8 py-4 transform -skew-x-[10deg] transition-colors duration-300 font-orbitron tracking-wider"
              >
                <span className="skew-x-[10deg] block">Services</span>
              </a>
            </div>
          </div>

          <figure className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <img 
              src="/gamics/hero_custom.png" 
              width="700" 
              height="700" 
              alt="D-One Studio Hero Banner" 
              className="w-full relative z-10"
            />
          </figure>

        </div>
      </div>
    </section>
  );
}
