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
          bg: 'var(--bg)',
          sidebar: 'var(--sidebar-bg)',
          card: 'var(--card-bg)',
          hover: 'var(--hover-bg)',
          border: 'var(--border)',
          accent: 'var(--accent)',
          chord: 'var(--chord-color)',
          text: 'var(--text)',
          muted: 'var(--muted-text)',
        }
      }
    },
  },
  plugins: [],
}
