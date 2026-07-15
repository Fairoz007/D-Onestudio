
import { ExternalLink } from 'lucide-react';

export default function GamicsPortfolioSection() {
  const projects = [
    {
      id: 1,
      image: '/gamics/featured-game-1.jpg',
      title: 'Bingo',
      titleHighlight: 'Multiplayer',
      platform: 'Web, Mobile'
    },
    {
      id: 2,
      image: '/gamics/featured-game-2.jpg',
      title: 'Studio',
      titleHighlight: 'Branding',
      platform: 'UI/UX, Identity'
    },
    {
      id: 3,
      image: '/gamics/featured-game-3.jpg',
      title: 'E-Commerce',
      titleHighlight: 'Platform',
      platform: 'Web Application'
    },
    {
      id: 4,
      image: '/gamics/featured-game-4.jpg',
      title: 'Cloud',
      titleHighlight: 'Infrastructure',
      platform: 'DevOps, Hosting'
    }
  ];

  return (
    <section className="py-24 bg-background" id="portfolio" aria-label="portfolio">
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl">
        
        <div className="relative text-center mb-16">
          <p className="text-brand-primary text-sm font-bold uppercase tracking-[0.3em] font-inter mb-4">
            Recent Work
          </p>
          <h2 className="text-text-primary text-4xl lg:text-5xl font-extrabold uppercase font-orbitron mb-4">
            Featured <span className="text-brand-primary">Projects</span>
          </h2>
          <img src="/gamics/title-underline.png" alt="underline" className="mx-auto" />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <li key={project.id}>
              <div className="bg-card rounded-lg overflow-hidden group border border-ui-glassBorder hover:border-brand-primary/30 transition-all duration-300 shadow-lg relative h-[400px]">
                
                <figure className="w-full h-full relative">
                  <img 
                    src={project.image} 
                    loading="lazy"
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-abyss/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </figure>

                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
                  
                  <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2 font-inter">
                    <span>{project.platform}</span>
                  </div>
                  <h3 className="text-text-primary text-2xl font-bold uppercase font-orbitron mb-2 transition-colors">
                    <a href="#" className="hover:text-brand-primary">
                      {project.title} <span className="text-text-secondary">{project.titleHighlight}</span>
                    </a>
                  </h3>
                  <p className="text-text-secondary text-sm font-medium font-inter mb-6">
                    {project.description}
                  </p>
                  <a 
                    href="#"
                    className="self-start bg-ui-glass border border-ui-glassBorder backdrop-blur-md text-text-primary hover:text-brand-primary hover:bg-ui-glassBorder p-3 rounded-full transition-all duration-300 shadow-glass"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
