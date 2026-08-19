/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        db: {
          dark: '#070b12',
          main: '#0b0f19',
          panel: '#111827',
          sidebar: '#0d1322',
          card: 'rgba(17, 24, 39, 0.75)',
          border: 'rgba(56, 189, 248, 0.15)',
        },
        primary: {
          DEFAULT: '#38bdf8',
          glow: 'rgba(56, 189, 248, 0.35)',
        },
        accent: {
          emerald: '#10b981',
          purple: '#818cf8',
          amber: '#f59e0b',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        code: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        ui: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.95)' },
        }
      }
    },
  },
  plugins: [],
}
