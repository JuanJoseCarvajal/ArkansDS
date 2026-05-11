'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useI18n } from '@/lib/i18n';
import { Locale, locales } from '@/lib/site';

export default function Navbar() {
  const { content, locale, setLocale } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-[0.12em] text-white/90">
          ARKAN DX
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
          {content.nav.links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <label className="relative inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/85">
            <span className="mr-2" aria-hidden="true">
              {locales[locale].flag}
            </span>
            <span className="sr-only">{content.nav.language}</span>
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              className="bg-transparent text-sm outline-none"
              aria-label={content.nav.language}
            >
              {Object.entries(locales).map(([key, item]) => (
                <option key={key} value={key} className="bg-background text-white">
                  {item.native}
                </option>
              ))}
            </select>
          </label>
          <Button href="/contacto" className="hidden px-5 py-2 text-xs sm:inline-flex" ariaLabel={content.nav.aria}>
            {content.nav.cta}
          </Button>
        </div>
      </Container>
    </header>
  );
}
