import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} ARKAN DX</p>
        <p>Transformational Experience Design Agency</p>
      </Container>
    </footer>
  );
}
