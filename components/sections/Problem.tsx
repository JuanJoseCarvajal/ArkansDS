import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function Problem() {
  return (
    <Section stage="Awareness" tone="tense">
      <Container className="grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-semibold sm:text-5xl">Most products function. Few products direct decisions.</h2>
        </div>
        <p className="text-lg text-white/70 lg:col-span-5">
          Fragmented journeys dilute trust. Unstructured interfaces leak intent. Conversion drops when clarity disappears.
        </p>
      </Container>
    </Section>
  );
}
