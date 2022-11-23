/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#64748b',
        three: '#cbd5e1',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
