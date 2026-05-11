'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BriefcaseBusiness, UserRound } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { UserRole, useAuth } from '@/lib/auth';
import { useI18n } from '@/lib/i18n';

const roleIcons = {
  client: UserRound,
  agency: BriefcaseBusiness
};

const copy = {
  es: {
    eyebrow: 'Acceso privado',
    title: 'Entra al portal de ARKAN DX.',
    intro:
      'Clientes y usuarios internos entran desde aqui. Esta version usa una sesion local de demostracion lista para reemplazar por autenticacion real.',
    email: 'Email',
    name: 'Nombre',
    role: 'Rol',
    client: 'Cliente',
    agency: 'Usuario de agencia',
    submit: 'Entrar al portal',
    hintClient: 'Cliente: ve solicitudes, citas y entregables de su cuenta.',
    hintAgency: 'Agencia: ve dashboard completo, clientes, solicitudes, citas y equipo interno.',
    quickClient: 'Entrar como cliente',
    quickAgency: 'Entrar como agencia'
  },
  en: {
    eyebrow: 'Private access',
    title: 'Sign in to the ARKAN DX portal.',
    intro:
      'Clients and internal users enter from here. This version uses a local demo session ready to be replaced by real authentication.',
    email: 'Email',
    name: 'Name',
    role: 'Role',
    client: 'Client',
    agency: 'Agency user',
    submit: 'Enter portal',
    hintClient: 'Client: sees requests, appointments and deliverables for their account.',
    hintAgency: 'Agency: sees the full dashboard, clients, requests, appointments and internal team.',
    quickClient: 'Enter as client',
    quickAgency: 'Enter as agency'
  }
} as const;

export default function LoginPage() {
  const router = useRouter();
  const { locale } = useI18n();
  const { user, login } = useAuth();
  const text = copy[locale];
  const [role, setRole] = useState<UserRole>('client');
  const roleOptions: Array<{ value: UserRole; label: string }> = [
    { value: 'client', label: text.client },
    { value: 'agency', label: text.agency }
  ];

  useEffect(() => {
    if (user) router.replace('/backoffice');
  }, [router, user]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim() || (role === 'client' ? 'Aster Fintech' : 'Juan C.');
    const email = String(formData.get('email') || '').trim() || (role === 'client' ? 'client@arkandemo.com' : 'agency@arkandemo.com');

    login({ name, email, role });
    router.replace('/backoffice');
  };

  const quickLogin = (nextRole: UserRole) => {
    login({
      role: nextRole,
      name: nextRole === 'client' ? 'Aster Fintech' : 'Juan C.',
      email: nextRole === 'client' ? 'client@arkandemo.com' : 'agency@arkandemo.com'
    });
    router.replace('/backoffice');
  };

  return (
    <Section stage="Login" tone="luminous" className="pt-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{text.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">{text.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/72">{text.intro}</p>
          <div className="mt-8 grid gap-3">
            <div className="rounded-lg border border-white/10 bg-surface p-4">
              <div className="flex items-center gap-3">
                <UserRound className="h-4 w-4 text-accent" aria-hidden="true" />
                <p className="text-sm text-white/75">{text.hintClient}</p>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-surface p-4">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-4 w-4 text-accent" aria-hidden="true" />
                <p className="text-sm text-white/75">{text.hintAgency}</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-5 rounded-lg border border-white/10 bg-surface p-6 shadow-card">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-white/85">
              {text.name}
            </label>
            <input id="name" name="name" className="w-full rounded-lg border border-white/20 bg-transparent p-3 outline-none ring-electric/40 focus:ring" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white/85">
              {text.email}
            </label>
            <input id="email" name="email" type="email" className="w-full rounded-lg border border-white/20 bg-transparent p-3 outline-none ring-electric/40 focus:ring" />
          </div>
          <fieldset>
            <legend className="mb-3 text-sm text-white/85">{text.role}</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {roleOptions.map(({ value, label }) => {
                const Icon = roleIcons[value];
                return (
                <label
                  key={value}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-sm transition ${
                    role === value ? 'border-accent bg-accent/10 text-white' : 'border-white/10 bg-background/40 text-white/70'
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value={value}
                    checked={role === value}
                    onChange={() => setRole(value)}
                    className="sr-only"
                  />
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </label>
                );
              })}
            </div>
          </fieldset>
          <button type="submit" className="w-full rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent">
            {text.submit}
          </button>
          <div className="grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={() => quickLogin('client')} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-white">
              {text.quickClient}
            </button>
            <button type="button" onClick={() => quickLogin('agency')} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-white">
              {text.quickAgency}
            </button>
          </div>
        </form>
      </Container>
    </Section>
  );
}
