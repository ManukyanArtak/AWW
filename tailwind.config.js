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
          350: '#0000004d',
          450: 'rgba(31, 9, 46, 0.5)',
          550: '#ADADAD',
        },
        teal: {
          550: '#00baab',
          580: '#00b5a5',
        },
      },
      lineHeight: {
        20: '5rem',
      },
      container: {
        screens: {
          sm: '330px',
          md: '648px',
          lg: '1140px',
        },
      },
      margin: {
        7.5: '30px',
        17: '72px',
        18: '76px',
        22: '90px',
        25: '100px',
        26: '102px',
        30: '120px',
        33: '140px',
        54: '216px',
      },
      padding: {
        7.5: '30px',
        4.5: '18px',
        6.5: '26px',
        33: '140px',
      },
      width: {
        13: '50px',
        29: '30px',
        37: '152px',
        38: '155px',
        50: '200px',
        53: '213px',
        55: '220px',
        58: '226px',
        61: '250px',
        67: '272px',
        90: '350px',
        '1/16': '6%',
        '1/7': '15%',
        sm: '370px',
        md: '572px',
      },
      height: {
        15: '50px',
        15.5: '60px',
        22: '88px',
        34: '130px',
        100: '460px',
        160: '40rem',
      },
      maxWidth: {
        xs: '370px',
      },
      borderRadius: {
        20: '20px',
        100: '100px',
      },
      divideWidth: {
        134: '134px',
      },
      fontSize: {
        30: '30px',
        56: '56px',
      },
      translate: {
        50: '-50%',
      },
    },
  },
  plugins: [],
}
