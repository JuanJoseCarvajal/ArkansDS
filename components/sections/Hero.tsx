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
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
