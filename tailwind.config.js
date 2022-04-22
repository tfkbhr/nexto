const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    colors: {
      primary: colors.indigo,
    },
    extend: {
      colors,
    },
  },
  plugins: [],
}
