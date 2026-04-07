import ServicesSection from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function ServicesPage() {
  return (
    <>
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
