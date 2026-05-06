import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Sobre ARKAN DX | Agencia hermetica UX/UI',
  description:
    'Conoce el enfoque iniciatico de ARKAN DX: UX/UI, semiotica, topologia, analisis psicoanalitico y desarrollo frontend.'
};

export default function SobreNosotrosPage() {
  return (
    <>
      <Section stage="Nosotros" tone="luminous" className="pt-24">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Sobre ARKAN DX</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Disenamos desde la lectura del signo, el deseo y el umbral.</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Somos una agencia hermetica de experiencia digital para equipos que necesitan algo mas que una web bonita:
            una estructura iniciatica capaz de producir claridad, confianza y accion medible.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-5 md:grid-cols-3">
          {[
            ['Lectura', 'Antes de disenar interpretamos sintomas: friccion, deseo, objecion, exceso y silencio.'],
            ['Correspondencia', 'Cada signo debe alinear promesa, evidencia, interfaz y accion esperada.'],
            ['Manifestacion', 'El sistema termina en codigo rapido, accesible, medible y preparado para escalar.']
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-surface p-6">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-white/70">{text}</p>
            </article>
          ))}
        </Container>
      </Section>
      <Section tone="tense">
        <Container className="grid gap-8 lg:grid-cols-2">
          <h2 className="text-3xl font-semibold sm:text-5xl">Que nos hace distintos de una agencia tradicional.</h2>
          <p className="text-lg leading-8 text-white/72">
            No separamos estrategia, contenido, diseno y desarrollo en entregables aislados. Los trabajamos como operaciones de
            un mismo rito digital: separar ruido, revelar valor, ordenar signos, cruzar umbrales y medir la transformacion.
          </p>
        </Container>
      </Section>
      <Section tone="luminous">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">Hablemos del sistema simbolico que tu marca necesita.</h2>
          <div className="mt-8"><Button href="/contacto">Solicitar lectura</Button></div>
        </Container>
      </Section>
    </>
  );
}
