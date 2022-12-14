module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        strongCyan: '#3E2723', 
        darkBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)'
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif']
      }
    },
  },
  plugins: [],
}

//'hsl(171, 66%, 44%)'