'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (formData: FormData) => {
    const nextErrors: Errors = {};
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name) nextErrors.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Valid email is required.';
    if (message.length < 10) nextErrors.message = 'Message must be at least 10 characters.';

    return nextErrors;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
    if (Object.keys(nextErrors).length === 0) {
      event.currentTarget.reset();
    }
  };

  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold sm:text-6xl">Contact</h1>
        <p className="mt-4 text-white/70">Let&apos;s shape your next transformational product experience.</p>
        <form onSubmit={onSubmit} className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-surface p-7">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-white/85">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded-xl border border-white/20 bg-transparent p-3 outline-none ring-electric/40 focus:ring"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name ? (
              <p id="name-error" className="mt-1 text-sm text-red-300">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white/85">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl border border-white/20 bg-transparent p-3 outline-none ring-electric/40 focus:ring"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1 text-sm text-red-300">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-white/85">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-xl border border-white/20 bg-transparent p-3 outline-none ring-electric/40 focus:ring"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message ? (
              <p id="message-error" className="mt-1 text-sm text-red-300">
                {errors.message}
              </p>
            ) : null}
          </div>
          <Button type="submit" ariaLabel="Send your message">
            Send Message
          </Button>
          {submitted ? <p className="text-sm text-emerald-300">Thanks. We will reach out shortly.</p> : null}
        </form>
      </Container>
    </Section>
  );
}
