const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV  === 'production',
    content: [
      './src/templates/**/*.hbs',
      './src/chunks/**/*.hbs',
    ]
  },
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'OpenSans': ["Open Sans", 'sans-serif'],
        'Raleway': ['Raleway', 'sans-serif'],
        'Playfair': ['Playfair Display', 'serif'],
        'Droid': ['Droid Serif', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '68': '4.25rem',
        '39': '2.437rem',
        '17': '1.62rem',
        '15': '0.937rem',
        '30px': '30px',
      },
      colors: {
        'primary': '#f58620',
        'secondary':'#007bff',
        'white': '#FFFFFF',
        'darkGrey': '#1c1c1c',
        'gray1': '#666666',
        'gray2': '#cccccc',
        'gray3': '#777777',
        'tomato-red': '#EE153B',
        'turquoise-600': '#0086A4',
        'turquoise-500': '#008EAF',
        'turquoise-300': '#0097B9',
        'lightgray': '#666666',
      },
      height: {
        'fit-content': 'fit-content'
      },
      width:{
        '1/9': '11.1111111%',
        '2/9': '22.2222222%',
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      gridTemplateColumns: {
        // Simple 16 column grid
       '20': 'repeat(20, minmax(0, 1fr))',
       '11': 'repeat(11, minmax(0, 1fr))',
      },
      gridColumnEnd: {
        '15': '15',
        '17': '17',
        '19': '19',
        '20': '20',
        '21': '21',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      animation: {
        'fade-in-down': 'fade-in-down 1.5s ease-out'
      },
      boxShadow: {
        custom: '0px 0px 15px rgb(0 0 0 / 8%)',
        bottomOnly: '0 8px 6px -6px gray;'
      },
      borderWidth: {
        '1': '1px',
      },
      backgroundImage: theme => ({
        'testimonial': "url('/assets/images/testimonial_bg.jpg')",
      })
    }
  },
  variants: {
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}
