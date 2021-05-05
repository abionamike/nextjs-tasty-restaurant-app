module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#1a202c',
          bgTab: '#1a1a1a',
          bgColor: '#252329',
          bgColor2: '#120f13',
          bgColor3: '#3c393f',
          bgColor4: '#0c101a',
        },
        white: {
          color1: '#b3c5cd'
        }
      },
      rotate: {
        '-4': '-4deg',
        '4': '4deg',
      },
      spacing: {
        100: '400px',
        200: '1400px'
      },
      height: {
        '22': '90px',
        '23': '94px',
        '1/10': '10%',
        '9/10': '90%',
      },
      width: {
        '22': '90px',
        '23': '94px',
      },
      top: {
        '58': '230px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
