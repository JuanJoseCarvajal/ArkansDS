import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Contacto | Diagnóstico UX/UI y web',
  description:
    'Agenda un diagnóstico para mejorar UX/UI, desarrollo web, SEO técnico o estrategia digital de tu marca.'
};

export default function ContactoPage() {
  return (
    <Section stage="Contacto" tone="luminous" className="pt-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Contacto</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Cuéntanos qué debe lograr tu próxima experiencia digital.</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">
            En el primer diagnóstico revisamos contexto, objetivos, fricciones actuales y oportunidades de alto impacto. Sin
            llamadas eternas: saldrás con una lectura clara del camino.
          </p>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}
