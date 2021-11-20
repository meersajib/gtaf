const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    container: {
      // screens: {
      //   xl: "390px",
      //   sm: "800px",
      //   md: "1440px",
      //   lg: "1440px",
      //   xl: "1440px"
      // }
    },
    extend: {
      textColor: {
        'gtaf-text-color-1': '#6B6C72',
        'gtaf-primary': '#00C614',
        'danger': '#e3342f',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    
      gridTemplateColumns: {
        'gtaf-main-wrapper': '235px minmax(0, 1fr)',
        'gtaf-tab-wrapper': '89px minmax(0, 1fr)',
        'gtaf-tab-logo-wrapper': '125px minmax(0, 1fr)',
      },
      boxShadow: {
        'gtaf-btn-shadow': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      borderWidth: {
        'gtaf-border-1': '0 1px 0 0',
        'gtaf-border-b': '0 0 1px 0',
        'gtaf-border-w': '1px'
      },
      borderColor: {
        'gtaf-border': '#E5E5E6',
      },
      fontSize: {
        'gtaf-font-13px': '13px'
      },
      backgroundColor: {
        'gtaf-warning': '#FDF4ED',
        'primary': '#F2F2F3',
        'secondary': '#88898E',
        'success' : '#44C776',
        'warning': '#F58A28',
        'error': '#F52828'
      },
      screens: {
        xl: { 'max': '390px' },
        sm: { 'min': '768px', 'max': '1010px' },
        md: { 'min': '1021px', 'max': '1440px' },
        lg: {'min' : '1440px', 'max' : '2800px' },
        xl: {'min' : '1440px', 'max' : '2800px'}
      }
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}
