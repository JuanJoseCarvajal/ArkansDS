'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp } from '@/lib/motion';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  stage?: string;
  tone?: 'calm' | 'tense' | 'luminous';
};

const toneMap = {
  calm: 'bg-transparent',
  tense: 'bg-white/[0.015]',
  luminous: 'bg-gradient-to-b from-electric/10 to-transparent'
};

export default function Section({ children, className = '', id, stage, tone = 'calm' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative py-20 sm:py-28 ${toneMap[tone]} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {stage ? (
        <div className="pointer-events-none absolute left-4 top-10 text-[10px] uppercase tracking-ritual text-white/30 md:left-8">
          {stage}
        </div>
      ) : null}
      {children}
    </motion.section>
  );
}
