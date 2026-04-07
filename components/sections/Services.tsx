'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const services = [
  {
    title: 'UX/UI Design',
    text: 'Clear, scalable and user-centered interfaces'
  },
  {
    title: 'Experience Architecture',
    text: 'End-to-end journey design'
  },
  {
    title: 'Arkan Method',
    text: 'A unique framework combining psychology and symbolic systems'
  }
];

export default function ServicesSection() {
  return (
    <Section id="services" stage="Activation" tone="tense">
    <Section id="services">
      <Container>
        <h2 className="text-3xl font-semibold sm:text-5xl">Services</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-elevated/80 p-6 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-surface p-6"
            >
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="mt-3 text-white/70">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
