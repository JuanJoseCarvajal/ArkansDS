import type { NextConfig } from 'next';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: currentDir,
  async redirects() {
    return [
      { source: '/services', destination: '/servicios', permanent: true },
      { source: '/about', destination: '/sobre-nosotros', permanent: true },
      { source: '/contact', destination: '/contacto', permanent: true }
    ];
  }
};

export default nextConfig;
