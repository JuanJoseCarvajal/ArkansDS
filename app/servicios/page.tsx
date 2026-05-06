import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicios UX/UI, desarrollo web y estrategia digital',
  description:
    'Servicios de UX/UI, desarrollo web Next.js, diseño de producto digital y estrategia para marcas que buscan crecer con claridad.'
};

export default function ServiciosPage() {
  return (
    <>
      <Section stage="Servicios" tone="luminous" className="pt-24">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Servicios digitales premium</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">UX/UI, desarrollo web y estrategia para convertir complejidad en crecimiento.</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Trabajamos desde la definición de producto hasta la implementación frontend para que tu web no dependa de adornos:
            debe explicar, convencer, posicionar y generar demanda cualificada.
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
          <h2 className="text-3xl font-semibold sm:text-5xl">Proceso de trabajo: estrategia antes de producción.</h2>
          <ol className="grid gap-4 text-white/72">
            {['Diagnóstico de negocio, usuarios y posicionamiento.', 'Arquitectura de información, mensajes y flujos clave.', 'Diseño visual, prototipo y sistema de componentes.', 'Desarrollo Next.js, SEO técnico, analítica y handoff.'].map((step) => (
              <li key={step} className="rounded-lg border border-white/10 bg-background/50 p-4">{step}</li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section tone="luminous">
        <Container className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold sm:text-5xl">Construyamos una experiencia que haga más fácil elegirte.</h2>
          <div className="mt-8">
            <Button href="/contacto" ariaLabel="Hablar sobre servicios digitales">Hablar del proyecto</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
