'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <Section stage="Decision" tone="luminous">
      <Container>
        <motion.div
          animate={{ boxShadow: ['0 0 0 rgba(92,136,255,0)', '0 0 36px rgba(92,136,255,0.24)', '0 0 0 rgba(92,136,255,0)'] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-electric/20 p-10 text-center sm:p-14"
        >
          <p className="text-3xl font-semibold sm:text-5xl">Is your product converting… or just functioning?</p>
          <div className="mt-8">
            <Button href="/contact" ariaLabel="Let's talk about your product">
              Let&apos;s Talk
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
