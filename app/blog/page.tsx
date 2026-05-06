import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { blogPosts } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog de UX/UI, SEO y desarrollo web',
  description:
    'Insights sobre UX/UI, diseño de producto, SEO técnico, desarrollo Next.js y estrategia digital para equipos premium.'
};

export default function BlogPage() {
  return (
    <>
      <Section stage="Insights" tone="luminous" className="pt-24">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Blog / Insights</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Ideas accionables para diseñar mejores decisiones digitales.</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Contenido para fundadores, marketers y equipos de producto que quieren mejorar conversión, SEO y calidad de experiencia.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-white/10 bg-surface p-6">
              <p className="text-sm text-accent">{post.keyword}</p>
              <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-4 text-white/65">Intención: {post.intent}</p>
              <Link href={post.slug} className="mt-6 inline-flex text-sm font-medium text-white/75 hover:text-white">
                Leer estructura del artículo
              </Link>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
