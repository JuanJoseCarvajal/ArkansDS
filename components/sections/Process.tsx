import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const steps = ['Intention', 'Conflict', 'Structure', 'Experience', 'Activation', 'Conversion'];

export default function Process() {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl font-semibold sm:text-5xl">Process</h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Arkan process steps">
          {steps.map((step, index) => (
            <li key={step} className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <span className="text-xs tracking-[0.2em] text-electric">0{index + 1}</span>
              <p className="mt-2 text-xl">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
