import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        thin: ['var(--font-roboto-thin)'],
        light: ['var(--font-roboto-light)'],
      },
      colors: {
        primary: '#0066CC',
        secondary: '#333333',
        lime: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
        },
      },
      animation: {
        'float-up-1': 'floatUp 20s linear infinite',
        'float-up-2': 'floatUp 23s linear infinite',
        'float-up-3': 'floatUp 25s linear infinite',
        'float-up-4': 'floatUp 21s linear infinite',
        'float-up-5': 'floatUp 27s linear infinite',
        'float-up-6': 'floatUp 22s linear infinite',
      },
      keyframes: {
        floatUp: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-110vh) rotate(360deg)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
