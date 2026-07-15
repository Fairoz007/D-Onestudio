import GamicsHeroSection from '../sections/gamics/GamicsHeroSection'
import GamicsServicesSection from '../sections/gamics/GamicsServicesSection'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>D-One Studio | A New Generation Game Studio</title>
        <meta name="description" content="D-One Studio is an independent game development studio driven by imagination, technical excellence, and a relentless pursuit of quality." />
        <link rel="canonical" href="https://d-onestudio.com/" />
      </Helmet>
      <GamicsHeroSection />
      <GamicsServicesSection />
    </>
  )
}
