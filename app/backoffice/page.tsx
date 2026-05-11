'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, LayoutDashboard, MessageSquareText, ShieldCheck, UsersRound } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { useI18n } from '@/lib/i18n';
import { backofficeContent } from '@/lib/site';

const clients = [
  ['Aster Fintech', 'Mariana R.', 'discovery', '$18.2k'],
  ['Nexo Industrial', 'Daniel C.', 'proposal', '$24.0k'],
  ['Lumina Health', 'Sofia P.', 'delivery', '$31.5k'],
  ['Orion Legal', 'Juan C.', 'waiting', '$12.7k']
];

const requests = [
  ['Homepage conversion audit', 'Aster Fintech', 'urgent'],
  ['Design system sprint', 'Lumina Health', 'active'],
  ['SEO architecture rebuild', 'Nexo Industrial', 'proposal'],
  ['Appointment funnel setup', 'Orion Legal', 'waiting']
];

const appointments = [
  ['May 12, 09:30', 'Aster Fintech', 'Discovery call'],
  ['May 13, 14:00', 'Lumina Health', 'Design review'],
  ['May 15, 10:00', 'Nexo Industrial', 'Proposal walkthrough'],
  ['May 18, 16:30', 'Orion Legal', 'Strategy session']
];

const users = [
  ['Juan C.', 'Admin / Strategy', 'active'],
  ['Mariana R.', 'Client success', 'active'],
  ['Daniel C.', 'Frontend lead', 'active'],
  ['Sofia P.', 'UX/UI design', 'active']
];

const icons = [LayoutDashboard, UsersRound, MessageSquareText, CalendarDays, ShieldCheck];

function StatusPill({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/75">
      {children}
    </span>
  );
}

export default function BackofficePage() {
  const { locale } = useI18n();
  const [activeTab, setActiveTab] = useState(0);
  const copy = backofficeContent[locale];
  const status = copy.status;
  const visiblePanel = useMemo(() => copy.tabs[activeTab], [activeTab, copy.tabs]);

  return (
    <Section stage="Backoffice" tone="luminous" className="pt-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-lg border border-white/10 bg-surface p-4 lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">{copy.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold">{copy.title}</h1>
            <p className="mt-4 text-sm leading-6 text-white/65">{copy.intro}</p>
            <nav className="mt-6 grid gap-2" aria-label="Backoffice sections">
              {copy.tabs.map((tab, index) => {
                const Icon = icons[index];
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition ${
                      isActive ? 'bg-white text-background' : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {tab}
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {copy.metrics.map(([label, value, delta]) => (
                <article key={label} className="rounded-lg border border-white/10 bg-surface p-5">
                  <p className="text-sm text-white/55">{label}</p>
                  <p className="mt-3 text-3xl font-semibold">{value}</p>
                  <p className="mt-2 text-sm text-emerald-300">{delta}</p>
                </article>
              ))}
            </div>

            <section className="rounded-lg border border-white/10 bg-surface p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">{visiblePanel}</p>
                  <h2 className="mt-2 text-2xl font-semibold">{copy.requestsTitle}</h2>
                </div>
                <StatusPill>{status.urgent}</StatusPill>
              </div>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[680px] text-left text-sm">
                  <thead className="text-white/45">
                    <tr>
                      <th className="border-b border-white/10 py-3 font-medium">{copy.columns.request}</th>
                      <th className="border-b border-white/10 py-3 font-medium">{copy.columns.client}</th>
                      <th className="border-b border-white/10 py-3 font-medium">{copy.columns.priority}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map(([request, client, priority]) => (
                      <tr key={request}>
                        <td className="border-b border-white/5 py-4 text-white/85">{request}</td>
                        <td className="border-b border-white/5 py-4 text-white/65">{client}</td>
                        <td className="border-b border-white/5 py-4">
                          <StatusPill>{status[priority as keyof typeof status]}</StatusPill>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="grid gap-6 xl:grid-cols-2">
              <section className="rounded-lg border border-white/10 bg-surface p-5">
                <h2 className="text-2xl font-semibold">{copy.clientsTitle}</h2>
                <div className="mt-5 grid gap-3">
                  {clients.map(([client, owner, clientStatus, value]) => (
                    <article key={client} className="grid gap-3 rounded-md border border-white/10 bg-background/40 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                      <div>
                        <p className="font-medium">{client}</p>
                        <p className="mt-1 text-sm text-white/55">
                          {copy.columns.owner}: {owner}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <StatusPill>{status[clientStatus as keyof typeof status]}</StatusPill>
                        <span className="text-sm font-semibold text-white/80">{value}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-white/10 bg-surface p-5">
                <h2 className="text-2xl font-semibold">{copy.appointmentsTitle}</h2>
                <div className="mt-5 grid gap-3">
                  {appointments.map(([date, client, appointment]) => (
                    <article key={`${date}-${client}`} className="rounded-md border border-white/10 bg-background/40 p-4">
                      <p className="text-sm text-accent">{date}</p>
                      <p className="mt-2 font-medium">{appointment}</p>
                      <p className="mt-1 text-sm text-white/55">{client}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <section className="rounded-lg border border-white/10 bg-surface p-5">
                <h2 className="text-2xl font-semibold">{copy.usersTitle}</h2>
                <div className="mt-5 grid gap-3">
                  {users.map(([name, role, userStatus]) => (
                    <article key={name} className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-background/40 p-4">
                      <div>
                        <p className="font-medium">{name}</p>
                        <p className="mt-1 text-sm text-white/55">{role}</p>
                      </div>
                      <StatusPill>{status[userStatus as keyof typeof status]}</StatusPill>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-white/10 bg-surface p-5">
                <h2 className="text-2xl font-semibold">{copy.enhancementsTitle}</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
                  {copy.enhancements.map((item) => (
                    <li key={item} className="rounded-md border border-white/10 bg-background/40 p-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
