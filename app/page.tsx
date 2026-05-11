'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { useI18n } from '@/lib/i18n';

export default function HomePage() {
  const { content } = useI18n();
  const page = content.pages.home;

  return (
    <>
      <Section stage="Home" tone="luminous" className="pt-24 sm:pt-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="space-y-8 lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.eyebrow}</p>
              <h1 className="max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">{page.title}</h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">{page.intro}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/contacto" ariaLabel={page.primary}>
                  {page.primary}
                </Button>
                <Link href="/casos-estudio" className="inline-flex items-center text-sm font-medium text-white/75 hover:text-white">
                  {page.secondary}
                </Link>
              </div>
            </div>
            <aside className="border-l border-white/10 pl-6 lg:col-span-4">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">{page.operation}</p>
              <dl className="mt-6 grid gap-6">
                {page.operationItems.map((item, index) => (
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
            <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.symptomEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">{page.symptomTitle}</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-white/72">
            {page.symptomBody.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.methodEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">{page.methodTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">{page.methodIntro}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.initiaticSteps.map((step, index) => (
              <article key={step.name} className="rounded-lg border border-white/10 bg-surface p-5">
                <p className="text-sm text-accent">
                  {page.stepLabel} {String(index + 1).padStart(2, '0')}
                </p>
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
            <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.servicesEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">{page.servicesTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {content.services.map((service) => (
              <article key={service.title} className="rounded-lg border border-white/10 bg-elevated/70 p-6 shadow-card">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{service.summary}</p>
                <Link href={service.slug} className="mt-5 inline-flex text-sm font-medium text-accent hover:text-white">
                  {page.explore}
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
              <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.proofEyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">{page.proofTitle}</h2>
            </div>
            <Link href="/casos-estudio" className="text-sm font-medium text-white/70 hover:text-white">
              {page.proofLink}
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.cases.map((item) => (
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
            <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.differenceEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">{page.differenceTitle}</h2>
          </div>
          <div className="space-y-5 leading-8 text-white/72">
            {page.differenceBody.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="luminous">
        <Container className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.nextEyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">{page.nextTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">{page.nextBody}</p>
          <div className="mt-8">
            <Button href="/contacto" ariaLabel={page.nextCta}>
              {page.nextCta}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
