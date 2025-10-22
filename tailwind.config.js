// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Inter', 'system-ui', '-apple-system', 'sans-serif' ],
      },
    },
  },
  plugins: [],
}
