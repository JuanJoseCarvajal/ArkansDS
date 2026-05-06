import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { cases, initiaticSteps, services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Diseno iniciatico UX/UI y desarrollo web',
  description:
    'Experiencias digitales hermeticas con UX/UI, semiotica Peirceana, topologia y desarrollo Next.js para convertir con claridad.'
};

export default function HomePage() {
  return (
    <>
      <Section stage="Home" tone="luminous" className="pt-24 sm:pt-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="space-y-8 lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">UX iniciatico + semiotica + Next.js</p>
              <h1 className="max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                Disenamos experiencias digitales como ritos de claridad, deseo y conversion.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                ARKAN DX une UX/UI, semiotica de Peirce, topologia del recorrido y analisis psicoanalitico aplicado para
                transformar una web en un sistema de decision: legible, medible y orientado a leads cualificados.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/contacto" ariaLabel="Agendar diagnóstico digital">
                  Iniciar diagnostico
                </Button>
                <Link href="/casos-estudio" className="inline-flex items-center text-sm font-medium text-white/75 hover:text-white">
                  Ver casos de estudio
                </Link>
              </div>
            </div>
            <aside className="border-l border-white/10 pl-6 lg:col-span-4">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">Operacion hermetica</p>
              <dl className="mt-6 grid gap-6">
                {['Signo', 'Deseo', 'Umbral', 'Conversion'].map((item, index) => (
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
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Sintoma</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">La mayoria de webs muestran una oferta, pero no producen una transformacion.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-white/72">
            <p>
              Una web iniciatica no es una galeria de efectos. Es un pasaje: separa ruido, revela deseo, organiza signos y
              acompana al usuario hasta un umbral de accion claro.
            </p>
            <p>
              Desde el analisis psicoanalitico, la friccion aparece como sintoma: una objecion no dicha, una promesa confusa,
              una autoridad insuficiente. Desde Peirce, cada pantalla debe convertir signo en interpretante y luego en accion.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Metodo</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Los 11 pasos de la magia aplicados a experiencia digital.</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              No usamos lo hermetico como estetica vacia. Lo usamos como estructura operacional: una secuencia de analisis,
              simbolizacion, diseno y medicion que lleva una presencia digital desde confusion hasta conversion.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {initiaticSteps.map((step, index) => (
              <article key={step.name} className="rounded-lg border border-white/10 bg-surface p-5">
                <p className="text-sm text-accent">Paso {String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 text-xl font-semibold">{step.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{step.principle}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm text-white/80">{step.outcome}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="servicios">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Operaciones</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Diseno, simbolo, codigo y estrategia trabajando como un mismo sistema.</h2>
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
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Pruebas</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Toda transformacion debe dejar una evidencia.</h2>
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
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Pensamos tu web como un dispositivo simbolico de conversion.</h2>
          </div>
          <div className="space-y-5 leading-8 text-white/72">
            <p>
              Cada pagina tiene una funcion dentro del rito: atraer, separar, revelar, probar, conducir y cerrar. Por eso
              definimos jerarquia, signos, contenido, componentes y medicion antes de decorar.
            </p>
            <p>
              El resultado es una presencia digital con estetica hermetica, fundamentos SEO y un recorrido comercial que respeta
              la inteligencia del usuario mientras orienta una accion concreta.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="luminous">
        <Container className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Siguiente paso</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
            Si tu web debe transformar percepcion en confianza, empecemos por el diagnostico iniciatico.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Leemos signos, deseo, friccion, topologia del recorrido, SEO tecnico y oportunidades de conversion para definir una hoja de ruta clara.
          </p>
          <div className="mt-8">
            <Button href="/contacto" ariaLabel="Solicitar diagnóstico digital">
              Solicitar lectura inicial
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
