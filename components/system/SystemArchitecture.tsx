'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Braces,
  ChevronRight,
  Circle,
  Code2,
  Component,
  Copy,
  Grid3X3,
  Layers3,
  Moon,
  Orbit,
  PanelLeft,
  Play,
  Radius,
  ScanLine,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Timer,
  Type,
  Wand2
} from 'lucide-react';
import { SystemButton } from '@/components/ui/system-primitives';

type ThemeMode = 'dark' | 'light';

type TokenState = {
  colors: Record<string, string>;
  typography: Record<string, string>;
  spacing: Record<string, string>;
  radiuses: Record<string, string>;
  shadows: Record<string, string>;
  opacity: Record<string, string>;
  motion: Record<string, string>;
  zIndex: Record<string, string>;
  blur: Record<string, string>;
  grid: Record<string, string>;
};

const initialTokens: TokenState = {
  colors: {
    void: '#050505',
    graphite: '#1A1A1A',
    parchment: '#F5F1E8',
    ash: '#A6A29F',
    ember: '#F93202'
  },
  typography: {
    display: '64px',
    title: '40px',
    body: '16px',
    mono: '12px'
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '40px'
  },
  radiuses: {
    signal: '6px',
    panel: '10px',
    aperture: '999px'
  },
  shadows: {
    low: '0 10px 30px rgba(0,0,0,0.28)',
    high: '0 32px 90px rgba(0,0,0,0.44)',
    ember: '0 0 42px rgba(249,50,2,0.18)'
  },
  opacity: {
    ghost: '0.12',
    veil: '0.48',
    solid: '0.92'
  },
  motion: {
    fast: '160ms',
    ritual: '420ms',
    reveal: '760ms'
  },
  zIndex: {
    base: '1',
    nav: '40',
    overlay: '80'
  },
  blur: {
    glass: '18px',
    aura: '48px'
  },
  grid: {
    columns: '12',
    gutter: '24px',
    margin: '32px'
  }
};

const sections = [
  ['Foundations', SlidersHorizontal],
  ['Typography', Type],
  ['Colors', Circle],
  ['Motion', Timer],
  ['Components', Component],
  ['Layout', Grid3X3],
  ['Symbolic Patterns', Orbit],
  ['Themes', Sun],
  ['Live Preview', Play],
  ['Export System', Braces]
] as const;

const componentSpecs = [
  {
    name: 'Ritual Button',
    note: 'Primary action. Use when the user crosses a decision threshold.',
    snippet: '<button className="border px-5 py-3">Initiate reading</button>'
  },
  {
    name: 'Signal Card',
    note: 'Container for evidence, token previews and symbolic states.',
    snippet: '<article className="rounded-lg border bg-[var(--surface)] p-6" />'
  },
  {
    name: 'Threshold Form',
    note: 'A form pattern that asks only for context needed to begin interpretation.',
    snippet: '<input aria-label="Desired transformation" />'
  },
  {
    name: 'Aperture Overlay',
    note: 'Modal or inspection layer for component intelligence and exports.',
    snippet: '<section role="dialog" aria-modal="true" />'
  }
];

function cssVars(tokens: TokenState, theme: ThemeMode) {
  const isDark = theme === 'dark';
  return {
    '--sys-bg': isDark ? tokens.colors.void : tokens.colors.parchment,
    '--sys-surface': isDark ? tokens.colors.graphite : '#ffffff',
    '--sys-ink': isDark ? tokens.colors.parchment : tokens.colors.void,
    '--sys-muted': tokens.colors.ash,
    '--sys-accent': tokens.colors.ember,
    '--sys-radius': tokens.radiuses.panel,
    '--sys-shadow': isDark ? tokens.shadows.high : '0 24px 60px rgba(5,5,5,0.12)',
    '--sys-blur': tokens.blur.glass,
    '--sys-speed': tokens.motion.ritual
  } as React.CSSProperties;
}

function tokenToCss(tokens: TokenState) {
  return `:root {\n${Object.entries(tokens)
    .flatMap(([group, values]) => Object.entries(values).map(([key, value]) => `  --ark-${group}-${key}: ${value};`))
    .join('\n')}\n}`;
}

function tokenToTailwind(tokens: TokenState) {
  return `theme: {\n  extend: {\n    colors: ${JSON.stringify(tokens.colors, null, 4)},\n    spacing: ${JSON.stringify(tokens.spacing, null, 4)},\n    borderRadius: ${JSON.stringify(tokens.radiuses, null, 4)},\n    boxShadow: ${JSON.stringify(tokens.shadows, null, 4)}\n  }\n}`;
}

function TokenEditor({
  title,
  group,
  tokens,
  onChange
}: {
  title: string;
  group: keyof TokenState;
  tokens: TokenState;
  onChange: (group: keyof TokenState, key: string, value: string) => void;
}) {
  return (
    <section id={title.toLowerCase()} className="rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)]/70 p-5 shadow-[var(--sys-shadow)] backdrop-blur-[var(--sys-blur)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <ScanLine className="h-4 w-4 text-[color:var(--sys-accent)]" aria-hidden="true" />
      </div>
      <div className="mt-5 grid gap-3">
        {Object.entries(tokens[group]).map(([key, value]) => (
          <label key={key} className="grid gap-3 rounded-md border border-[color:var(--sys-ink)]/10 p-3 sm:grid-cols-[1fr_1.3fr_64px] sm:items-center">
            <span className="font-mono text-xs uppercase text-[color:var(--sys-muted)]">{key}</span>
            <input
              value={value}
              onChange={(event) => onChange(group, key, event.target.value)}
              className="min-w-0 rounded-md border border-[color:var(--sys-ink)]/10 bg-transparent px-3 py-2 font-mono text-sm outline-none transition focus:border-[color:var(--sys-accent)]"
              aria-label={`${title} token ${key}`}
            />
            <span
              className="h-10 rounded-md border border-[color:var(--sys-ink)]/10"
              style={{
                background: group === 'colors' ? value : 'linear-gradient(135deg, var(--sys-accent), transparent)',
                borderRadius: group === 'radiuses' ? value : undefined,
                boxShadow: group === 'shadows' ? value : undefined,
                opacity: group === 'opacity' ? value : undefined,
                filter: group === 'blur' ? `blur(${value})` : undefined
              }}
              aria-hidden="true"
            />
          </label>
        ))}
      </div>
    </section>
  );
}

export default function SystemArchitecture() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [tokens, setTokens] = useState<TokenState>(initialTokens);
  const vars = useMemo(() => cssVars(tokens, theme), [tokens, theme]);

  const updateToken = (group: keyof TokenState, key: string, value: string) => {
    setTokens((current) => ({
      ...current,
      [group]: {
        ...current[group],
        [key]: value
      }
    }));
  };

  return (
    <main
      style={vars}
      className="min-h-screen bg-[color:var(--sys-bg)] text-[color:var(--sys-ink)] transition-colors duration-500"
    >
      <div className="pointer-events-none fixed inset-0 opacity-70" aria-hidden="true">
        <div className="absolute left-1/2 top-12 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[color:var(--sys-accent)]/10" />
        <div className="absolute right-10 top-24 h-48 w-48 rounded-full bg-[color:var(--sys-accent)]/10 blur-[80px]" />
      </div>

      <div className="relative grid lg:grid-cols-[280px_1fr]">
        <aside className="sticky top-0 z-20 hidden h-screen border-r border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-bg)]/80 p-5 backdrop-blur-xl lg:block">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--sys-accent)]/30">
              <Wand2 className="h-4 w-4 text-[color:var(--sys-accent)]" />
            </div>
            <div>
              <p className="text-sm font-semibold">ArkansDS System</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--sys-muted)]">Symbolic OS</p>
            </div>
          </div>
          <nav aria-label="System sections" className="mt-10 grid gap-1">
            {sections.map(([label, Icon]) => (
              <a key={label} href={`#${label.toLowerCase().replaceAll(' ', '-')}`} className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-[color:var(--sys-muted)] transition hover:bg-[color:var(--sys-surface)] hover:text-[color:var(--sys-ink)]">
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-6 border-b border-[color:var(--sys-ink)]/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--sys-accent)]">Interface Intelligence</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Operate the symbolic architecture behind ArkansDS.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--sys-muted)]">
                A live foundation environment for tokens, themes, components, motion, narrative pacing and exportable UI intelligence.
              </p>
            </div>
            <SystemButton
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              variant="ghost"
              className="w-fit"
              aria-label="Switch design system theme"
            >
              {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              {theme === 'dark' ? 'Dark rite' : 'Light rite'}
            </SystemButton>
          </header>

          <section id="foundations" className="grid gap-5 py-8 xl:grid-cols-3">
            {[
              ['Sign', 'Every token has a semantic role before it has a visual value.'],
              ['Threshold', 'Every interaction clarifies whether the user should advance, pause or inspect.'],
              ['Return', 'Every component must be measurable, reusable and exportable.']
            ].map(([title, text]) => (
              <article key={title} className="rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)]/70 p-6">
                <Sparkles className="h-4 w-4 text-[color:var(--sys-accent)]" />
                <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 text-[color:var(--sys-muted)]">{text}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-5 xl:grid-cols-2">
            <TokenEditor title="Colors" group="colors" tokens={tokens} onChange={updateToken} />
            <TokenEditor title="Typography" group="typography" tokens={tokens} onChange={updateToken} />
            <TokenEditor title="Spacing" group="spacing" tokens={tokens} onChange={updateToken} />
            <TokenEditor title="Radiuses" group="radiuses" tokens={tokens} onChange={updateToken} />
            <TokenEditor title="Shadows" group="shadows" tokens={tokens} onChange={updateToken} />
            <TokenEditor title="Opacity" group="opacity" tokens={tokens} onChange={updateToken} />
            <TokenEditor title="Motion" group="motion" tokens={tokens} onChange={updateToken} />
            <TokenEditor title="Z-Index" group="zIndex" tokens={tokens} onChange={updateToken} />
            <TokenEditor title="Blur" group="blur" tokens={tokens} onChange={updateToken} />
            <TokenEditor title="Layout" group="grid" tokens={tokens} onChange={updateToken} />
          </section>

          <section id="components" className="py-10">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--sys-accent)]">Component Library</p>
                <h2 className="mt-3 text-3xl font-semibold">Modular component intelligence.</h2>
              </div>
              <Component className="hidden h-6 w-6 text-[color:var(--sys-muted)] sm:block" />
            </div>
            <div className="mt-6 grid gap-5 xl:grid-cols-2">
              {componentSpecs.map((item) => (
                <article key={item.name} className="rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)]/70 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-[color:var(--sys-muted)]">{item.note}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-[color:var(--sys-accent)]" />
                  </div>
                  <div className="mt-5 grid gap-4 rounded-md border border-[color:var(--sys-ink)]/10 p-4">
                    <SystemButton className="w-fit">
                      Initiate reading
                    </SystemButton>
                    <div className="rounded-md border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-bg)]/60 p-4">
                      <p className="text-sm font-medium">State: hover, focus, disabled, active threshold</p>
                    </div>
                  </div>
                  <pre className="mt-4 overflow-auto rounded-md bg-black/40 p-4 text-xs text-[#F5F1E8]"><code>{item.snippet}</code></pre>
                </article>
              ))}
            </div>
          </section>

          <section id="motion" className="grid gap-5 py-8 xl:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)]/70 p-6">
              <Timer className="h-5 w-5 text-[color:var(--sys-accent)]" />
              <h2 className="mt-5 text-3xl font-semibold">Motion Architecture</h2>
              <p className="mt-4 leading-7 text-[color:var(--sys-muted)]">
                Motion behaves like initiation: reveal slowly enough to create perception, respond quickly enough to preserve control.
              </p>
              <pre className="mt-5 overflow-auto rounded-md bg-black/40 p-4 text-xs text-[#F5F1E8]">
                <code>{`<motion.div\n  initial={{ opacity: 0, y: 18 }}\n  whileInView={{ opacity: 1, y: 0 }}\n  transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}\n/>`}</code>
              </pre>
            </article>
            <div className="grid place-items-center rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)]/70 p-8">
              <motion.div
                className="relative grid h-64 w-64 place-items-center rounded-full border border-[color:var(--sys-accent)]/35"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div className="h-28 w-28 rounded-full border border-[color:var(--sys-ink)]/20" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2.4, repeat: Infinity }} />
                <div className="absolute h-px w-full bg-[color:var(--sys-accent)]/30" />
                <div className="absolute h-full w-px bg-[color:var(--sys-accent)]/30" />
              </motion.div>
            </div>
          </section>

          <section id="symbolic-patterns" className="grid gap-5 py-8 xl:grid-cols-3">
            {[
              ['Narrative Pacing', 'Separate noise, disclose value, prove trust, open action.'],
              ['Symbolic Hierarchy', 'Accent is ritual, not decoration. Use ember only at decision points.'],
              ['Perception Architecture', 'A page is a topology of attention: entry, orbit, threshold, return.']
            ].map(([title, text]) => (
              <article key={title} className="rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)]/70 p-6">
                <Orbit className="h-5 w-5 text-[color:var(--sys-accent)]" />
                <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 text-[color:var(--sys-muted)]">{text}</p>
              </article>
            ))}
          </section>

          <section id="live-preview" className="grid gap-5 py-8 xl:grid-cols-[1fr_1.2fr]">
            <article className="rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)]/70 p-6">
              <PanelLeft className="h-5 w-5 text-[color:var(--sys-accent)]" />
              <h2 className="mt-5 text-3xl font-semibold">Live Page Preview</h2>
              <p className="mt-4 leading-7 text-[color:var(--sys-muted)]">
                Token edits update this preview instantly. Use it to inspect typography, atmospheric overlays, CTAs, cards and spacing.
              </p>
            </article>
            <article className="overflow-hidden rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-bg)] shadow-[var(--sys-shadow)]">
              <div className="border-b border-[color:var(--sys-ink)]/10 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--sys-accent)]">Preview Chamber</p>
                <h3 className="mt-3 text-4xl font-semibold" style={{ fontSize: tokens.typography.title }}>
                  Symbolic reality architecture.
                </h3>
                <p className="mt-3 max-w-xl text-[color:var(--sys-muted)]" style={{ fontSize: tokens.typography.body }}>
                  A controlled environment where foundations, components and narrative behavior can be tuned before manifestation.
                </p>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-2">
                <div className="rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)] p-5">
                  <Box className="h-5 w-5 text-[color:var(--sys-accent)]" />
                  <p className="mt-5 text-sm text-[color:var(--sys-muted)]">Component state</p>
                  <p className="mt-2 text-2xl font-semibold">Active threshold</p>
                </div>
                <div className="rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)] p-5">
                  <Layers3 className="h-5 w-5 text-[color:var(--sys-accent)]" />
                  <p className="mt-5 text-sm text-[color:var(--sys-muted)]">Atmosphere</p>
                  <p className="mt-2 text-2xl font-semibold">Adaptive overlay</p>
                </div>
              </div>
            </article>
          </section>

          <section id="export-system" className="grid gap-5 py-8 xl:grid-cols-3">
            {[
              ['JSON Tokens', JSON.stringify(tokens, null, 2), Code2],
              ['CSS Variables', tokenToCss(tokens), Copy],
              ['Tailwind Config', tokenToTailwind(tokens), Braces]
            ].map(([title, value, Icon]) => {
              const DisplayIcon = Icon as typeof Code2;
              return (
                <article key={title as string} className="rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)]/70 p-5">
                  <div className="flex items-center gap-3">
                    <DisplayIcon className="h-4 w-4 text-[color:var(--sys-accent)]" />
                    <h2 className="font-semibold">{title as string}</h2>
                  </div>
                  <pre className="mt-4 max-h-80 overflow-auto rounded-md bg-black/40 p-4 text-xs text-[#F5F1E8]">
                    <code>{value as string}</code>
                  </pre>
                </article>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}
