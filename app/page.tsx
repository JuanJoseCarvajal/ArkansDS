import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CaseStudies from '@/components/sections/CaseStudies';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Process />
      <CaseStudies />
      <CTA />
    </>
  );
}
