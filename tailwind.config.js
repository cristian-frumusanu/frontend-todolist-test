/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/index.html', './src/**/*.{vue, ts, js}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 7%': { transform: 'rotateZ(0)' },
          '15%': { transform: 'transform: rotateZ(-15deg)' },
          '20%': { transform: 'rotateZ(10deg)' },
          '25%': { transform: 'rotateZ(-10deg)' },
          '30%': { transform: 'rotateZ(6deg)' },
          '35%': { transform: 'rotateZ(-4deg)' },
          '40%, 100%': { transform: 'rotateZ(0)' },
        },
      },
      animation: {
        wiggle: '<wiggle 2s linear infinite>',
      },
    },
  },
  plugins: [],
};
