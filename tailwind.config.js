/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.jsx',
    './src/components/**/*.jsx',
  ],
  theme: {
    extend: {
      colors:{
        'navbar-text-color': '#1F092E',
      },
      height: {
        '160': '40rem',
      },
      lineHeight: {
        '20': '5rem',
      }
    },
  },
  plugins: [],
}
