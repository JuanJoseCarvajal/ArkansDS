import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <Section stage="Initiation" tone="luminous" className="pt-24 sm:pt-32">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            <p className="text-xs uppercase tracking-ritual text-white/55">ARKAN DX — Transformational Experience Design Agency</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Designing Digital Experiences That Transform Decisions
            </h1>
            <p className="max-w-2xl text-lg text-white/75 sm:text-xl">
    <Section className="pt-24 sm:pt-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="space-y-8 lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Transformational Experience Design Agency</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Designing Digital Experiences That Transform Decisions
            </h1>
            <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
              We combine UX, psychology, and symbolic systems to create products that truly convert.
            </p>
            <Button href="/contact" ariaLabel="Book a consultation">
              Book a Consultation
            </Button>
          </div>
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-surface/70 p-7 shadow-card">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-electric/20 blur-2xl" aria-hidden="true" />
              <p className="text-xs uppercase tracking-ritual text-accent">Design Principle</p>
              <p className="mt-3 text-white/80">Perception is architecture. Interface is consequence.</p>
            <div className="rounded-3xl border border-white/15 bg-surface p-6 shadow-glow">
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Arkan Insight</p>
              <p className="mt-4 text-white/80">Conversion emerges where intention and experience align.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
