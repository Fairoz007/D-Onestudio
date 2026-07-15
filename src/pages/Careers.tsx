import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roles = [
    "Gameplay Programmer",
    "Unreal Engine Developer",
    "3D Artist",
    "Technical Artist",
    "Environment Artist",
    "UI/UX Designer",
    "Game Designer",
    "Level Designer",
    "Animator",
    "Sound Designer"
  ];

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Helmet>
        <title>Careers | D-One Studio</title>
        <meta name="description" content="Build the future with D-One Studio. See open positions and opportunities for gameplay programmers, artists, and designers." />
        <link rel="canonical" href="https://d-onestudio.com/careers" />
      </Helmet>
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl animate-fade-in-up">
        
        {/* Header */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <div className="section-label mb-6 justify-center">Careers</div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase font-orbitron mb-8">
            Build The <span className="text-brand-primary">Future</span> With Us
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-inter">
            We're always looking for talented people who share our passion for creating amazing games.
          </p>
        </section>

        {/* Open Opportunities */}
        <section className="mb-24">
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <h2 className="text-2xl font-bold uppercase font-space tracking-wider mb-8 text-white border-b border-ui-border pb-4">
              Open Opportunities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {roles.map((role, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer border-b border-ui-border/50 pb-4 hover:border-brand-primary transition-colors">
                  <span className="text-lg text-text-secondary group-hover:text-white transition-colors font-inter">{role}</span>
                  <ArrowRight className="w-5 h-5 text-brand-primary opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link to="/contact" className="neon-button inline-flex">
            <span className="skew-x-[10deg] block">See Open Positions</span>
          </Link>
        </section>

      </div>
    </div>
  );
}
