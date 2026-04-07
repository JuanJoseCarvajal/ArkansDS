import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'ARKAN DX — Transformational Experience Design Agency',
  description:
    'ARKAN DX designs premium digital experiences that blend UX, psychology, and symbolic systems to drive conversion.',
  keywords: ['UX design', 'experience architecture', 'conversion', 'digital agency', 'ARKAN DX']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
