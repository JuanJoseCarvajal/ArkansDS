import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function CaseStudies() {
  return (
    <Section tone="calm">
      <Container>
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-surface/65 p-8 shadow-card lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs uppercase tracking-ritual text-accent">Selected Outcomes</p>
    <Section>
      <Container>
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-surface p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Selected Outcomes</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Experience systems that increase trust and velocity.</h2>
          </div>
          <div className="grid gap-4 text-white/80">
            <p>Reframed onboarding journeys to raise activation and reduce cognitive load across product suites.</p>
            <p>Aligned interface rhythm with decision psychology to improve conversion quality at every key touchpoint.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
