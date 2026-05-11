'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { useI18n } from '@/lib/i18n';

export default function SobreNosotrosPage() {
  const { content, locale } = useI18n();
  const page = content.pages.about;

  return (
    <>
      <Section stage={locale === 'es' ? 'Nosotros' : 'About'} tone="luminous" className="pt-24">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">{page.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">{page.intro}</p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-5 md:grid-cols-3">
          {page.cards.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-surface p-6">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-white/70">{text}</p>
            </article>
          ))}
        </Container>
      </Section>
      <Section tone="tense">
        <Container className="grid gap-8 lg:grid-cols-2">
          <h2 className="text-3xl font-semibold sm:text-5xl">{page.distinctTitle}</h2>
          <p className="text-lg leading-8 text-white/72">{page.distinctBody}</p>
        </Container>
      </Section>
      <Section tone="luminous">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">{page.ctaTitle}</h2>
          <div className="mt-8">
            <Button href="/contacto">{page.cta}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
