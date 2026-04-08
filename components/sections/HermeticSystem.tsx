import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const microcosmos = [
  {
    id: 1,
    title: 'Kether — El Caos de la Mente',
    description: 'Punto de partida de una idea, sin estructura definida.'
  },
  {
    id: 2,
    title: 'Chokmah — El Orden de la Palabra',
    description: 'Verbalización del problema y primeros insights.'
  },
  {
    id: 3,
    title: 'Binah — El Mundo de las Emociones',
    description: 'Comprensión de usuarios y contexto.'
  },
  {
    id: 4,
    title: 'Chesed — El Mundo de las Señales',
    description: 'Identificación de patrones y tendencias.'
  },
  {
    id: 5,
    title: 'Geburah — El Gran Examen',
    description: 'Validación de hipótesis y restricciones.'
  }
];

const macrocosmos = [
  {
    id: 6,
    title: 'Tiphareth — La Energía',
    description: 'Materialización del concepto en diseño inicial.'
  },
  {
    id: 7,
    title: 'Netzach — La Casualidad',
    description: 'Iteración y pruebas con usuarios.'
  },
  {
    id: 8,
    title: 'Hod — La Negociación',
    description: 'Refinamiento del diseño y balance entre negocio y usuario.'
  },
  {
    id: 9,
    title: 'Yesod — La Sexualidad',
    description: 'Creación de la versión final con energía creativa plena.'
  },
  {
    id: 10,
    title: 'Malkuth — Resultado',
    description: 'Producto final entregado y lanzado.'
  }
];

const sequence = [
  '1. Idea',
  '2. Palabra',
  '3. Forma',
  '4. Señal',
  '5. Testing',
  '6. Energy',
  '7. Casuality',
  '8. Negotiation',
  '9. Conception',
  '10. Result',
  '11. The Master'
];

export default function HermeticSystem() {
  return (
    <Section stage="System" tone="tense">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-ritual text-accent">Microcosmos → Macrocosmos</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">The initiation map behind ARKAN DX decisions.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-surface/70 p-6 shadow-card">
            <h3 className="text-xl font-semibold text-electric">Microcosmos (Transformación Interna)</h3>
            <ol className="mt-4 space-y-3 text-sm text-white/80">
              {microcosmos.map((item) => (
                <li key={item.id}>
                  <p className="font-medium text-white">{item.id}. {item.title}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-white/10 bg-surface/70 p-6 shadow-card">
            <h3 className="text-xl font-semibold text-accent">Macrocosmos (Manifestación Externa)</h3>
            <ol className="mt-4 space-y-3 text-sm text-white/80">
              {macrocosmos.map((item) => (
                <li key={item.id}>
                  <p className="font-medium text-white">{item.id}. {item.title}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-background/60 p-6">
          <p className="text-xs uppercase tracking-ritual text-white/50">Sequence</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sequence.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white/85">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
