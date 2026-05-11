'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { useI18n } from '@/lib/i18n';

export default function CasosPage() {
  const { content } = useI18n();
  const page = content.pages.cases;

  return (
    <>
      <Section stage="Portfolio" tone="luminous" className="pt-24">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">{page.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">{page.intro}</p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-6">
          {content.cases.map((item) => (
            <article key={item.title} className="grid gap-6 rounded-lg border border-white/10 bg-surface p-6 md:grid-cols-[1fr_0.7fr] md:p-8">
              <div>
                <p className="text-sm text-accent">{item.category}</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">{item.title}</h2>
                <p className="mt-4 leading-7 text-white/70">{item.summary}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-elevated p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">{page.result}</p>
                <p className="mt-4 text-3xl font-semibold">{item.result}</p>
              </div>
            </article>
          ))}
        </Container>
      </Section>
      <Section tone="luminous">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">{page.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">{page.ctaBody}</p>
          <div className="mt-8">
            <Button href="/contacto">{page.cta}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
