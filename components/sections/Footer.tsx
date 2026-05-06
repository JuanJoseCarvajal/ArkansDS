import Link from 'next/link';
import Container from '@/components/ui/Container';

const links = [
  ['Servicios', '/servicios'],
  ['Casos de estudio', '/casos-estudio'],
  ['Sobre nosotros', '/sobre-nosotros'],
  ['Blog', '/blog'],
  ['System Architecture', '/system-architecture'],
  ['Contacto', '/contacto']
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="grid gap-8 text-sm text-white/65 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-semibold tracking-[0.12em] text-white">ARKAN DX</p>
          <p className="mt-3 max-w-md">
            Agencia hermetica de UX/UI, semiotica y desarrollo web para marcas que necesitan claridad, confianza y conversion medible.
          </p>
          <p className="mt-6">© {new Date().getFullYear()} ARKAN DX</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
