import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
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
