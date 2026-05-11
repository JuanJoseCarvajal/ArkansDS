import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { AuthProvider } from '@/lib/auth';
import { I18nProvider } from '@/lib/i18n';

export const metadata: Metadata = {
  metadataBase: new URL('https://arkands.com'),
  title: {
    default: 'ARKAN DX | Diseno iniciatico de experiencias digitales',
    template: '%s | ARKAN DX'
  },
  description:
    'Agencia hermetica de UX/UI, semiotica, producto digital y desarrollo Next.js orientada a conversion clara.',
  keywords: ['diseno UX iniciatico', 'semiotica UX', 'agencia UX UI', 'desarrollo web Next.js', 'estrategia digital'],
  openGraph: {
    title: 'ARKAN DX | Diseno iniciatico de experiencias digitales',
    description:
      'Disenamos experiencias digitales desde UX, semiotica Peirceana, topologia, estrategia y desarrollo frontend.',
    url: 'https://arkands.com',
    siteName: 'ARKAN DX',
    locale: 'es_ES',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <I18nProvider>
          <AuthProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
