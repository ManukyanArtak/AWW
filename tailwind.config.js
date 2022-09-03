/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.jsx', './src/components/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'link-color': '#2B0D3F',
        violet: {
          850: '#431860',
          950: '#1F092E',
        },
        yellow: {
          450: '#E5C02C',
        },
        blue: {
          950: '#3C3951',
        },
        gray: {
          450: 'rgba(31, 9, 46, 0.5)',
          550: '#ADADAD',
        },
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
