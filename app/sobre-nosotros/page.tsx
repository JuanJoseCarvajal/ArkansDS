import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Sobre nosotros | Agencia digital ARKAN DX',
  description:
    'Conoce el enfoque de ARKAN DX: estrategia, UX/UI, producto digital y desarrollo frontend para experiencias premium.'
};

export default function SobreNosotrosPage() {
  return (
    <>
      <Section stage="Nosotros" tone="luminous" className="pt-24">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Sobre ARKAN DX</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Diseñamos con criterio de producto, sensibilidad visual y obsesión por la claridad.</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Somos una agencia digital para equipos que necesitan una web o producto capaz de sostener valor premium: estrategia
            precisa, experiencia elegante, SEO técnico y una base frontend preparada para escalar.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-5 md:grid-cols-3">
          {[
            ['Criterio', 'No diseñamos por tendencia; diseñamos para que el usuario entienda, confíe y avance.'],
            ['Sistema', 'Cada componente, página y mensaje cumple una función dentro del recorrido comercial.'],
            ['Excelencia', 'Cuidamos performance, accesibilidad, interacción y detalle visual sin sacrificar velocidad.']
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
          <h2 className="text-3xl font-semibold sm:text-5xl">Qué nos hace distintos de una agencia tradicional.</h2>
          <p className="text-lg leading-8 text-white/72">
            No separamos estrategia, contenido, diseño y desarrollo en entregables aislados. Los trabajamos como partes de un
            mismo producto digital: una experiencia que debe posicionar en Google, comunicar autoridad y convertir con elegancia.
          </p>
        </Container>
      </Section>
      <Section tone="luminous">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">Hablemos de la experiencia que tu marca necesita.</h2>
          <div className="mt-8"><Button href="/contacto">Conocer al equipo</Button></div>
        </Container>
      </Section>
    </>
  );
}
