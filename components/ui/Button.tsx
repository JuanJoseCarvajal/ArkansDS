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

const buttonClass =
  'group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition duration-300 ease-ceremonial hover:-translate-y-0.5';

const innerClass =
  'absolute inset-0 bg-gradient-to-r from-electric/80 to-accent/80 opacity-80 transition duration-300 ease-ceremonial group-hover:opacity-100';

export default function Button({ children, href, type = 'button', className = '', ariaLabel }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={`${buttonClass} ${className}`}>
        <span className={innerClass} aria-hidden="true" />
        <span className="absolute inset-[1px] rounded-full bg-background/70 backdrop-blur-sm" aria-hidden="true" />
        <span className="relative z-10 tracking-wide">{children}</span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      className={`${buttonClass} ${className}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className={innerClass} aria-hidden="true" />
      <span className="absolute inset-[1px] rounded-full bg-background/70 backdrop-blur-sm" aria-hidden="true" />
      <span className="relative z-10 tracking-wide">{children}</span>
    </motion.button>
  );
}
