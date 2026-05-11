'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { Locale, siteContent } from '@/lib/site';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: (typeof siteContent)[Locale];
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');

  useEffect(() => {
    const stored = window.localStorage.getItem('arkans-locale');
    if (stored === 'en' || stored === 'es') setLocaleState(stored);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem('arkans-locale', nextLocale);
    document.documentElement.lang = nextLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      content: siteContent[locale]
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used inside I18nProvider');
  return context;
}
