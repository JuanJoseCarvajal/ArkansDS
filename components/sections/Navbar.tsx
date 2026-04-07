import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold tracking-ritual text-white/90">
          ARKAN DX
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-4 md:gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs uppercase tracking-widest text-white/65 hover:text-white md:text-sm md:normal-case md:tracking-normal">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" className="hidden px-5 py-2 text-xs md:inline-flex" ariaLabel="Book a consultation">
          Book a Consultation
        </Button>
      </Container>
    </header>
  );
}
