'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  ariaLabel?: string;
};

const base =
  'inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-white/90';

export default function Button({ children, href, type = 'button', className = '', ariaLabel }: ButtonProps) {
  const content = (
    <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`${base} ${className}`}>
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} aria-label={ariaLabel} className={base + ' ' + className}>
      {children}
    </button>
  );
}
