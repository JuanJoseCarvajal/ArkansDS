import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const links = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/casos-estudio', label: 'Casos' },
  { href: '/sobre-nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Insights' },
  { href: '/system-architecture', label: 'System' },
  { href: '/contacto', label: 'Contacto' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.12em] text-white/90">
          ARKAN DX
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href="/contacto" className="px-5 py-2 text-xs" ariaLabel="Agendar una consulta">
          Agendar consulta
        </Button>
      </Container>
    </header>
  );
}
