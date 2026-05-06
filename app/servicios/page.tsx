import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicios hermeticos de UX/UI y estrategia',
  description:
    'Lectura UX/UI iniciatica, arquitectura web hermetica, topologia de producto y estrategia semiotica orientadas a conversion.'
};

export default function ServiciosPage() {
  return (
    <>
      <Section stage="Servicios" tone="luminous" className="pt-24">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Operaciones iniciaticas</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">UX/UI, semiotica y desarrollo para convertir complejidad en accion clara.</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Trabajamos desde el sintoma hasta el sistema: analizamos deseo, objecion, signos, recorrido y tecnica para que tu web
            explique, convenza, posicione y genere demanda cualificada.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-6">
          {services.map((service) => (
            <article id={service.slug.split('#')[1]} key={service.title} className="grid gap-8 rounded-lg border border-white/10 bg-surface p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
              <div>
                <h2 className="text-2xl font-semibold sm:text-3xl">{service.title}</h2>
                <p className="mt-4 leading-7 text-white/70">{service.summary}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-lg border border-white/10 bg-elevated p-4 text-sm text-white/75">
                    {bullet}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </Section>
      <Section tone="tense">
        <Container className="grid gap-8 lg:grid-cols-2">
          <h2 className="text-3xl font-semibold sm:text-5xl">Proceso de trabajo: lectura antes de manifestacion.</h2>
          <ol className="grid gap-4 text-white/72">
            {['Lectura del sintoma: negocio, usuario, deseo y objecion.', 'Triada semiotica: signo, interpretante y accion esperada.', 'Topologia del recorrido: bordes, umbrales, bucles y salidas.', 'Manifestacion: Next.js, SEO tecnico, analitica y sistema visual.'].map((step) => (
              <li key={step} className="rounded-lg border border-white/10 bg-background/50 p-4">{step}</li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section tone="luminous">
        <Container className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold sm:text-5xl">Construyamos una experiencia que vuelva evidente por que elegirte.</h2>
          <div className="mt-8">
            <Button href="/contacto" ariaLabel="Hablar sobre servicios digitales">Hablar del proyecto</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
