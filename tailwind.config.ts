import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: {
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          900: '#111827',
        },
        zinc: {
          950: '#09090b',
          900: '#18181b',
        },
        orange: {
          400: '#fb923c',
          500: '#ff6a00',
        },
      },
    },
  },
  plugins: [],
}

export default config