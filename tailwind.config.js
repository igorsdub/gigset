/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        stage: {
          bg: '#121214',
          sidebar: '#18181b',
          card: '#1e1e24',
          hover: '#27272a',
          border: '#333338',
          accent: '#4f46e5',
          chord: '#38bdf8',
        }
      }
    },
  },
  plugins: [],
}
