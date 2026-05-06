import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://arkandx.com'),
  title: {
    default: 'ARKAN DX | Agencia UX/UI y desarrollo web premium',
    template: '%s | ARKAN DX'
  },
  description:
    'Agencia digital especializada en UX/UI, desarrollo web Next.js, producto digital y estrategia para convertir visitantes en leads.',
  keywords: ['agencia UX UI', 'desarrollo web Next.js', 'diseno de producto digital', 'estrategia digital'],
  openGraph: {
    title: 'ARKAN DX | Agencia UX/UI y desarrollo web premium',
    description:
      'Diseñamos experiencias digitales premium que combinan estrategia, UX/UI, SEO y desarrollo frontend para generar crecimiento.',
    url: 'https://arkandx.com',
    siteName: 'ARKAN DX',
    locale: 'es_ES',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
