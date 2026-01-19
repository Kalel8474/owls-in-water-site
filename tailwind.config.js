/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom band color palette - dark moody aesthetic
        owl: {
          dark: '#0a0a0f',
          midnight: '#12121a',
          slate: '#1e1e2e',
          mist: '#2d2d44',
          water: '#4a6fa5',
          glow: '#7eb8da',
          accent: '#9dd3f5',
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(125, 184, 218, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(125, 184, 218, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
