/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif']
    },
    screens: {
      'sm': { 'max': '900px' },
      'lg': { 'min': '901px'}
    }
  },
  plugins: [],
}
