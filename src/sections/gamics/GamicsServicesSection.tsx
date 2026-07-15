export default function GamicsServicesSection() {
  const services = [
    {
      id: 1,
      image: '/gamics/service_dev_app_1783952180255.png',
      badge: 'Development',
      title: 'Web & App',
      titleHighlight: 'Solutions',
      description: 'Building scalable modern apps',
      price: 'Contact Us'
    },
    {
      id: 2,
      image: '/gamics/service_ui_ux_1783952191533.png',
      badge: 'Design',
      title: 'UI/UX',
      titleHighlight: 'Experiences',
      description: 'User-centric interface design',
      price: 'Contact Us'
    },
    {
      id: 3,
      image: '/gamics/service_cloud_1783952027294.png',
      badge: 'Infrastructure',
      title: 'Cloud',
      titleHighlight: 'Architecture',
      description: 'Secure & reliable hosting',
      price: 'Contact Us'
    }
  ];

  return (
    <section className="py-24 bg-background" id="services" aria-label="services">
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl">
        
        <p className="text-brand-primary text-center text-sm font-bold uppercase tracking-[0.3em] font-inter mb-4">
          Latest Projects
        </p>
        
        <div className="relative text-center mb-16">
          <h2 className="text-text-primary text-4xl lg:text-5xl font-extrabold uppercase font-orbitron mb-4">
            Studio <span className="text-brand-primary">Services</span>
          </h2>
          <img src="/gamics/title-underline.png" alt="underline" className="mx-auto" />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <li key={service.id}>
              <div className="bg-card rounded-lg overflow-hidden group shadow-lg border border-ui-glassBorder hover:border-brand-primary/20 hover:shadow-orange-glow transition-all duration-300">
                
                <figure className="aspect-[400/290] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    width="400" 
                    height="290" 
                    loading="lazy"
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-brand-primary text-abyss text-xs font-bold uppercase px-3 py-1 -skew-x-[10deg] shadow-lg">
                    <span className="skew-x-[10deg] block">{service.badge}</span>
                  </div>
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-ui-glass border border-ui-glassBorder backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-brand-primary hover:bg-white transition-colors duration-300">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                  </div>
                </figure>

                <div className="p-6 relative">
                  <h3 className="text-text-primary text-xl font-bold uppercase font-orbitron mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                    <a href="#">{service.title} <span className="text-text-muted">{service.titleHighlight}</span></a>
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-text-secondary text-sm font-semibold uppercase font-inter tracking-wider">
                      Price : <span className="text-brand-primary font-bold text-lg">{service.price}</span>
                    </p>
                  </div>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
