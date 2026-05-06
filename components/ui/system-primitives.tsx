import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const systemButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--sys-accent)] disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        primary:
          'border-[color:var(--sys-accent)]/40 bg-transparent text-[color:var(--sys-ink)] hover:bg-[color:var(--sys-accent)] hover:text-[#050505]',
        ghost:
          'border-[color:var(--sys-ink)]/15 bg-[color:var(--sys-surface)] text-[color:var(--sys-ink)] hover:border-[color:var(--sys-accent)]/50'
      },
      size: {
        sm: 'px-4 py-2',
        md: 'px-5 py-3'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export type SystemButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof systemButtonVariants>;

export function SystemButton({ className, variant, size, ...props }: SystemButtonProps) {
  return <button className={cn(systemButtonVariants({ variant, size }), className)} {...props} />;
}

export function SystemPanel({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        'rounded-[var(--sys-radius)] border border-[color:var(--sys-ink)]/10 bg-[color:var(--sys-surface)]/70 shadow-[var(--sys-shadow)] backdrop-blur-[var(--sys-blur)]',
        className
      )}
      {...props}
    />
  );
}
