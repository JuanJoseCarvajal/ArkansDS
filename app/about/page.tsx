import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function AboutPage() {
  return (
    <Section stage="About" tone="calm">
      <Container className="max-w-4xl">
        <p className="text-xs uppercase tracking-ritual text-accent">About ARKAN DX</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">We architect the interface between intent and action.</h1>
        <p className="mt-8 text-lg text-white/75">
          ARKAN DX is a transformational experience design agency focused on strategic conversion. We unite system-level
          UX, decision psychology, and symbolic coherence to build products that feel inevitable to use.
    <Section>
      <Container className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">About ARKAN DX</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">We design intentional digital momentum.</h1>
        <p className="mt-8 text-lg text-white/75">
          ARKAN DX is a transformational experience design agency focused on the architecture behind high-stakes digital
          decisions. We blend UX craft, behavior insight, and symbolic frameworks to help products become clear,
          persuasive, and unforgettable.
        </p>
      </Container>
    </Section>
  );
}
