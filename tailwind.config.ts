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
        background: '#060607',
        surface: '#0d0d11',
        elevated: '#12121a',
        accent: '#aa8a57',
        electric: '#5c88ff',
        ink: '#f5f7ff'
      },
      boxShadow: {
        glow: '0 0 40px rgba(92, 136, 255, 0.22)',
        card: '0 14px 40px rgba(0, 0, 0, 0.38)'
      },
      backgroundImage: {
        ether:
          'radial-gradient(circle at 20% 0%, rgba(92,136,255,0.15), transparent 36%), radial-gradient(circle at 80% 30%, rgba(170,138,87,0.14), transparent 42%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))',
        beam: 'linear-gradient(90deg, rgba(92,136,255,0.9), rgba(170,138,87,0.75))'
      },
      letterSpacing: {
        ritual: '0.18em'
      },
      transitionTimingFunction: {
        ceremonial: 'cubic-bezier(0.22, 1, 0.36, 1)'
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
