/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.jsx', './src/components/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'navbar-text-color': '#1F092E',
        'link-color': '#2B0D3F',
        violet: {
          950: '#1F092E',
        },
        blue:{
          950:'#3C3951'
        }
      },
      height: {
        160: '40rem',
      },
      lineHeight: {
        20: '5rem',
      },
    },
  },
  plugins: [],
}
