import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { cases } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Casos de estudio UX hermetico y web',
  description:
    'Casos de UX/UI, semiotica, producto digital y desarrollo web orientados a conversion, confianza y crecimiento medible.'
};

export default function CasosPage() {
  return (
    <>
      <Section stage="Portfolio" tone="luminous" className="pt-24">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Pruebas de manifestacion</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Trabajo disenado para transformar sintomas en metricas.</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Seleccion de proyectos donde lectura simbolica, interfaz, topologia del recorrido y tecnologia se integraron para
            mejorar activacion, confianza comercial y calidad de leads.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-6">
          {cases.map((item) => (
            <article key={item.title} className="grid gap-6 rounded-lg border border-white/10 bg-surface p-6 md:grid-cols-[1fr_0.7fr] md:p-8">
              <div>
                <p className="text-sm text-accent">{item.category}</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">{item.title}</h2>
                <p className="mt-4 leading-7 text-white/70">{item.summary}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-elevated p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">Resultado</p>
                <p className="mt-4 text-3xl font-semibold">{item.result}</p>
              </div>
            </article>
          ))}
        </Container>
      </Section>
      <Section tone="luminous">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">Toda magia debe probarse en una metrica.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">Definamos que transformacion debe ocurrir antes de disenar la primera pantalla.</p>
          <div className="mt-8"><Button href="/contacto">Iniciar lectura</Button></div>
        </Container>
      </Section>
    </>
  );
}
