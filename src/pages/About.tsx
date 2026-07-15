import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Helmet>
        <title>About Us | D-One Studio</title>
        <meta name="description" content="Learn about D-One Studio's mission, vision, and core values. We are a new generation game development studio driven by a passion for creating unforgettable interactive experiences." />
        <link rel="canonical" href="https://d-onestudio.com/about" />
      </Helmet>
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl animate-fade-in-up">
        
        {/* Who We Are */}
        <section className="mb-24">
          <div className="section-label mb-6">Who We Are</div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase font-orbitron mb-8">
            A New Generation <span className="text-brand-primary">Game Studio</span>
          </h1>
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6 font-inter">
              We are a new generation game development studio driven by a passion for creating unforgettable interactive experiences. Every world begins with an idea, and every idea deserves exceptional craftsmanship.
            </p>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-inter">
              From concept art to gameplay systems, our mission is to build games that inspire curiosity, challenge players, and leave lasting memories.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-24">
          <div className="section-label mb-6">Our Story</div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase font-orbitron mb-8">
            Driven By <span className="text-brand-primary">Imagination</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-text-secondary leading-relaxed font-inter text-lg">
              <p>
                D-One Studio was founded with a simple vision: create games that combine compelling storytelling, innovative gameplay, and breathtaking worlds.
              </p>
              <p>
                As an independent studio, we value creativity over trends and quality over quantity. Every project begins with curiosity and evolves through experimentation, collaboration, and continuous improvement.
              </p>
              <p>
                Although we're at the beginning of our journey, our ambition is global. We're building a studio where technology and imagination work together to create experiences players love.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">Our Vision</h3>
               <p className="text-xl text-brand-primary font-space italic mb-4">"We're building more than games. We're building worlds players will remember."</p>
               <p className="text-text-secondary">Every project is driven by imagination, technical excellence, and a relentless pursuit of quality.</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-24 grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-10 rounded-2xl border-t-4 border-t-brand-primary card-hover">
            <h3 className="text-2xl font-bold uppercase font-orbitron mb-4 text-white">Mission</h3>
            <p className="text-text-secondary text-lg leading-relaxed font-inter">
              To craft meaningful gaming experiences that entertain, inspire, and connect players around the world.
            </p>
          </div>
          <div className="glass-panel p-10 rounded-2xl border-t-4 border-t-brand-primary card-hover">
            <h3 className="text-2xl font-bold uppercase font-orbitron mb-4 text-white">Vision</h3>
            <p className="text-text-secondary text-lg leading-relaxed font-inter">
              To become one of the world's most respected independent game studios by creating innovative games that push the boundaries of storytelling and interactive entertainment.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="section-label mb-6">Core Values</div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase font-orbitron mb-12">
            What We <span className="text-brand-primary">Stand For</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Creativity', desc: 'Every great game starts with an original idea.' },
              { title: 'Innovation', desc: 'We embrace new technologies to redefine player experiences.' },
              { title: 'Quality', desc: 'We believe every detail matters.' },
              { title: 'Community', desc: 'Players are at the heart of everything we create.' },
              { title: 'Passion', desc: 'Games are our craft, not just our business.' }
            ].map((value, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-xl card-hover relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-orbitron text-6xl text-brand-primary font-bold transition-all duration-300 group-hover:opacity-30 group-hover:scale-110">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-space uppercase tracking-wider relative z-10">{value.title}</h3>
                <p className="text-text-secondary relative z-10">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
