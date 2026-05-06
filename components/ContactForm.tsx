'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name) nextErrors.name = 'Cuentanos tu nombre.';
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Usa un email válido.';
    if (message.length < 20) nextErrors.message = 'Danos al menos 20 caracteres de contexto.';

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
    if (Object.keys(nextErrors).length === 0) event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-lg border border-white/10 bg-surface p-6 shadow-card">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-white/85">
          Nombre
        </label>
        <input id="name" name="name" className="w-full rounded-lg border border-white/20 bg-transparent p-3 outline-none ring-electric/40 focus:ring" />
        {errors.name ? <p className="mt-1 text-sm text-red-300">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-white/85">
          Email
        </label>
        <input id="email" name="email" type="email" className="w-full rounded-lg border border-white/20 bg-transparent p-3 outline-none ring-electric/40 focus:ring" />
        {errors.email ? <p className="mt-1 text-sm text-red-300">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-white/85">
          Que sintoma o resultado quieres trabajar
        </label>
        <textarea id="message" name="message" rows={5} className="w-full rounded-lg border border-white/20 bg-transparent p-3 outline-none ring-electric/40 focus:ring" />
        {errors.message ? <p className="mt-1 text-sm text-red-300">{errors.message}</p> : null}
      </div>
      <Button type="submit" ariaLabel="Enviar solicitud de lectura iniciatica">
        Enviar lectura
      </Button>
      {submitted ? <p className="text-sm text-emerald-300">Recibido. Te responderemos con los proximos pasos.</p> : null}
    </form>
  );
}
