import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Revelation from '@/components/sections/Revelation';
import Process from '@/components/sections/Process';
import HermeticSystem from '@/components/sections/HermeticSystem';
import ServicesSection from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Revelation />
      <HermeticSystem />
      <Process />
      <ServicesSection />
      <CaseStudies />
      <CTA />
    </>
  );
}
