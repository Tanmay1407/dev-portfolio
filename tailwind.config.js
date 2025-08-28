/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0ea5e9',
          600: '#0284c7',
        }
      },
      boxShadow: {
        glow: '0 0 0 3px rgba(14,165,233,0.2)'
      }
    },
  },
  plugins: [],
}
