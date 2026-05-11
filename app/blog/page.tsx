'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { useI18n } from '@/lib/i18n';

export default function BlogPage() {
  const { content } = useI18n();
  const page = content.pages.blog;

  return (
    <>
      <Section stage="Insights" tone="luminous" className="pt-24">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{page.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">{page.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">{page.intro}</p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-5 md:grid-cols-2">
          {content.blogPosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-white/10 bg-surface p-6">
              <p className="text-sm text-accent">{post.keyword}</p>
              <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-4 text-white/65">
                {page.intent}: {post.intent}
              </p>
              <Link href={post.slug} className="mt-6 inline-flex text-sm font-medium text-white/75 hover:text-white">
                {page.read}
              </Link>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
