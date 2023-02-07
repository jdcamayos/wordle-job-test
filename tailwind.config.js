const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'my-green': '#6AAA64',
      'my-gold': '#CEB02C',
      'my-grey': '#939B9F',
      'my-grey-alt': '#818181',
      'light-bg': '#F9F9F9',
      'light-bg-alt': '#DADCE04D',
      'dark-bg': '#262B3C',
      'dark-bg-alt': '#DADCE008',
    },
    extend: {
      fontFamily: {
        sans: ['var(--roboto-font)', ...fontFamily.sans],
        serif: ['var(--roboto-font)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
  darkMode: "class"
}
