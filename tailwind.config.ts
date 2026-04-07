import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#070707',
        surface: '#0f0f10',
        accent: '#8b6f3d',
        electric: '#4f82ff'
      },
      boxShadow: {
        glow: '0 0 48px rgba(79, 130, 255, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
