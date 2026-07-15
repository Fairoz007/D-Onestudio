import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-[80vh] flex flex-col items-center justify-center text-center">
      <Helmet>
        <title>404 Not Found | D-One Studio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-6 max-w-2xl animate-fade-in-up">
        <h1 className="text-8xl md:text-9xl font-extrabold uppercase font-orbitron text-brand-primary mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-6 text-white">
          Page Not Found
        </h2>
        <p className="text-xl text-text-secondary mb-10 font-inter">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="bg-brand-primary text-background hover:bg-white transition-colors duration-300">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
