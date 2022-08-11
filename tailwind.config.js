/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.jsx',
    './src/components/**/*.jsx',

  ],
  theme: {
    extend: {
      colors: {
        'navbar-color': '#1F092E',
      },
    },
  },
  plugins: [],
}
