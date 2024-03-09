/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/library/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors, 
      primary: colors.green['700'],
      secondary: colors.blue['700'],
      neutral: colors.gray['200'],
      primary_lite: colors.green['800'],
      secondary_lite: colors.blue['800'],
      neutral_lite: colors.gray['800'],
    }


  },
  plugins: [],
}
