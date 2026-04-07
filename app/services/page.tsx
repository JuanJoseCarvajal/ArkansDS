import Revelation from '@/components/sections/Revelation';
import ServicesSection from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function ServicesPage() {
  return (
    <>
      <Section stage="Services" tone="luminous" className="pb-6">
        <Container>
          <h1 className="text-4xl font-semibold sm:text-6xl">Systems for clarity. Interfaces for conversion.</h1>
        </Container>
      </Section>
      <Revelation />
      <Process />
      <ServicesSection />
      <Section className="pb-6">
        <Container>
          <h1 className="text-4xl font-semibold sm:text-6xl">Services designed for strategic conversion.</h1>
        </Container>
      </Section>
      <ServicesSection />
      <Process />
      <CTA />
    </>
  );
}
