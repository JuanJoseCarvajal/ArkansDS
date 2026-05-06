import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Contacto | Lectura iniciatica UX/UI',
  description:
    'Agenda una lectura iniciatica para mejorar UX/UI, semiotica, recorrido, SEO tecnico y conversion de tu marca.'
};

export default function ContactoPage() {
  return (
    <Section stage="Contacto" tone="luminous" className="pt-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Primer umbral</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Cuentanos que transformacion debe producir tu experiencia digital.</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">
            En la primera lectura revisamos contexto, deseo, sintomas de friccion, signos actuales y oportunidades de alto
            impacto. Sin misterio innecesario: saldras con una direccion clara.
          </p>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}
