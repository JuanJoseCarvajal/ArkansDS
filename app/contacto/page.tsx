'use client';

import ContactForm from '@/components/ContactForm';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { useI18n } from '@/lib/i18n';

export default function ContactoPage() {
  const { content, locale } = useI18n();
  const page = content.pages.contact;

  return (
    <Section stage={locale === 'es' ? 'Contacto' : 'Contact'} tone="luminous" className="pt-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">{page.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">{page.intro}</p>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}
