import { useEffect } from 'react';
import { Gamepad2, Code2, Paintbrush, Music, Users, FlaskConical } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Studio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Helmet>
        <title>Our Studio & Technology | D-One Studio</title>
        <meta name="description" content="Explore D-One Studio's game design, programming, art, and technology stack including Unreal Engine, Unity, and modern tools." />
        <link rel="canonical" href="https://d-onestudio.com/studio" />
      </Helmet>
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl animate-fade-in-up">
        
        {/* What We Do */}
        <section className="mb-24">
          <div className="section-label mb-6">What We Do</div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase font-orbitron mb-12">
            Crafting <span className="text-brand-primary">Experiences</span>
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Gamepad2, title: 'Game Design', desc: 'Transforming ideas into engaging gameplay experiences.' },
              { icon: Code2, title: 'Programming', desc: 'Building scalable systems using modern game technologies.' },
              { icon: Paintbrush, title: 'Art & Animation', desc: 'Designing immersive environments, characters, and visual effects.' },
              { icon: Music, title: 'Audio', desc: 'Creating cinematic soundtracks and realistic sound design.' },
              { icon: Users, title: 'Multiplayer Systems', desc: 'Developing online experiences that connect players worldwide.' },
              { icon: FlaskConical, title: 'Research & Development', desc: 'Exploring AI, procedural generation, and emerging technologies.' }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="glass-panel p-8 rounded-xl card-hover border-t-4 border-t-transparent hover:border-t-brand-primary transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-orbitron">{service.title}</h3>
                  <p className="text-text-secondary font-inter">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technology */}
        <section>
          <div className="section-label mb-6">Technology</div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase font-orbitron mb-8">
            Our <span className="text-brand-primary">Stack</span>
          </h2>
          <p className="text-lg text-text-secondary mb-12 max-w-3xl font-inter leading-relaxed">
            We use industry-leading tools and technologies to build modern gaming experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-6 font-space uppercase tracking-wider border-b border-ui-border pb-4">Game Engines</h3>
                <ul className="space-y-3 font-inter text-text-secondary">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Unreal Engine 5</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Unity</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-6 font-space uppercase tracking-wider border-b border-ui-border pb-4">Art</h3>
                <ul className="space-y-3 font-inter text-text-secondary">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Blender</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Maya</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Substance Painter</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Photoshop</li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-6 font-space uppercase tracking-wider border-b border-ui-border pb-4">Programming</h3>
                <ul className="space-y-3 font-inter text-text-secondary flex flex-wrap gap-x-8 gap-y-3">
                  <li className="flex items-center gap-3 w-[40%]"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> C++</li>
                  <li className="flex items-center gap-3 w-[40%]"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> C#</li>
                  <li className="flex items-center gap-3 w-[40%]"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Python</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-6 font-space uppercase tracking-wider border-b border-ui-border pb-4">Backend</h3>
                <ul className="space-y-3 font-inter text-text-secondary">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Node.js</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Docker</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Kubernetes</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Cloud Infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
