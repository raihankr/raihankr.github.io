/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const rotate3d = plugin(({ addUtilities, matchUtilities, theme }) => {
  addUtilities({
    '.preserve-3d': {
      transformStyle: 'preserve-3d'
    },
    '.flat': {
      transformStyle: 'flat'
    },
    '.backface-visible': {
      backfaceVisibility: 'visible'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    }
  });
  matchUtilities(
    {
      perspective: (value) => ({
        perspective: value
      })
    },
    { values: theme('spacing') }
  );
  matchUtilities(
    {
      'rotate-x': (value) => ({
        transform: `rotateX(${value})`
      }),
      'rotate-y': (value) => ({
        transform: `rotateY(${value})`
      })
    },
    { values: theme('rotate') }
  );
});

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '481px',
      md: '769px',
      lg: '1025px',
      xl: '1201px'
    },
    extend: {
      fontFamily: {
        sans: ['"Product Sans"'],
        heading: ['Helvetica']
      },
      backgroundImage: {
        'personal-photo': "url('/image/my-photo.jpg')"
      }
    }
  },
  plugins: [rotate3d],
}

