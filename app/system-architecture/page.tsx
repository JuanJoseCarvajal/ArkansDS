import type { Metadata } from 'next';
import SystemArchitecture from '@/components/system/SystemArchitecture';

export const metadata: Metadata = {
  title: 'System Architecture',
  description:
    'Internal ArkansDS design system platform for tokens, themes, components, motion, symbolic patterns and exports.'
};

export default function SystemArchitecturePage() {
  return <SystemArchitecture />;
}
