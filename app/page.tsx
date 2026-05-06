import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { cases, services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Agencia UX/UI y desarrollo web premium',
  description:
    'Diseñamos webs y productos digitales con UX/UI, SEO técnico y desarrollo Next.js para convertir visitantes en leads cualificados.'
};

export default function HomePage() {
  return (
    <>
      <Section stage="Home" tone="luminous" className="pt-24 sm:pt-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="space-y-8 lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Agencia UX/UI + Next.js + estrategia digital</p>
              <h1 className="max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                Diseñamos experiencias digitales premium que convierten atención en oportunidades reales.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                ARKAN DX combina diseño UX/UI, desarrollo web, producto digital y estrategia SEO para crear sitios que se sienten
                distintos, cargan rápido y explican con precisión por qué tu oferta merece una conversación.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/contacto" ariaLabel="Agendar diagnóstico digital">
                  Agendar diagnóstico
                </Button>
                <Link href="/casos-estudio" className="inline-flex items-center text-sm font-medium text-white/75 hover:text-white">
                  Ver casos de estudio
                </Link>
              </div>
            </div>
            <aside className="border-l border-white/10 pl-6 lg:col-span-4">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">Sistema comercial</p>
              <dl className="mt-6 grid gap-6">
                {['Claridad de oferta', 'Confianza visual', 'SEO semántico', 'Conversión medible'].map((item, index) => (
                  <div key={item}>
                    <dt className="text-3xl font-semibold text-white">0{index + 1}</dt>
                    <dd className="mt-1 text-white/68">{item}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="tense">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Problema</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">La mayoría de webs de agencia se ven bien, pero no toman decisiones.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-white/72">
            <p>
              Una web premium no es una galería de efectos. Es una secuencia de argumentos, pruebas y microinteracciones que
              ayuda al visitante a entender valor, reducir riesgo y avanzar sin fricción.
            </p>
            <p>
              Cuando la arquitectura, el copy, el SEO y la interfaz se diseñan por separado, el resultado suele ser bonito pero
              débil: tráfico sin intención, mensajes intercambiables y formularios que llegan tarde.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="servicios">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Servicios destacados</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Diseño, tecnología y estrategia trabajando como un mismo sistema.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-white/10 bg-elevated/70 p-6 shadow-card">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{service.summary}</p>
                <Link href={service.slug} className="mt-5 inline-flex text-sm font-medium text-accent hover:text-white">
                  Explorar servicio
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="tense">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Casos</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Resultados que se pueden explicar.</h2>
            </div>
            <Link href="/casos-estudio" className="text-sm font-medium text-white/70 hover:text-white">
              Ver portfolio completo
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-surface p-6">
                <p className="text-sm text-accent">{item.category}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-2xl font-semibold">{item.result}</p>
                <p className="mt-4 leading-7 text-white/68">{item.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Diferenciador</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Pensamos tu web como producto digital, no como folleto online.</h2>
          </div>
          <div className="space-y-5 leading-8 text-white/72">
            <p>
              Cada página tiene una intención: captar demanda, educar, demostrar criterio o generar contacto. Por eso definimos
              jerarquía, contenido, componentes y medición antes de decorar.
            </p>
            <p>
              El resultado es una presencia digital con estética premium, fundamentos SEO y un recorrido comercial que respeta la
              inteligencia del usuario.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="luminous">
        <Container className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Siguiente paso</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
            Si tu web debe vender confianza antes de vender servicios, empecemos por el diagnóstico.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Revisamos posicionamiento, experiencia, SEO técnico y oportunidades de conversión para definir una hoja de ruta clara.
          </p>
          <div className="mt-8">
            <Button href="/contacto" ariaLabel="Solicitar diagnóstico digital">
              Solicitar diagnóstico
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
