import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function Revelation() {
  return (
    <Section stage="Revelation" tone="calm">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-surface/70 p-8 shadow-card sm:p-12">
          <p className="text-xs uppercase tracking-ritual text-electric">Arkan Thesis</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">We design decisions.</h2>
          <p className="mt-5 max-w-3xl text-white/70">
            Through symbolic structure, behavioral precision, and interface discipline, every touchpoint becomes directional.
          </p>
        </div>
      </Container>
    </Section>
  );
}
