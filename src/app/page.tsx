import Navbar from '@/app/components/ui/navbar';
import HeroSection from '@/app/components/heroSection';
import AboutSectionTwo from '@/app/components/aboutSectionTwo';
import AboutSectionOne from './components/aboutSectionOne';
import AIOptimization from '@/app/components/AIOptimization';
import FooterSection from '@/app/components/footerSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101010]"  data-testid='home'>
      {/* Navbar */}
      <Navbar data-testid='navbar' />

      {/* Hero Section */}
      <HeroSection data-testid='herosection' />

      {/* About us section one */}
      <AboutSectionOne data-testid='aboutone' />

      {/* About us section two */}
      <AboutSectionTwo data-testid='abouttwo' />

      {/* AI optimization section */}
      <AIOptimization data-testid='AIopt' />

      {/* Footer section */}
      <FooterSection data-testid='footersection' />
    </div>
  );
}
