/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
// const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mondo: {
          50: '#f6f4f0',
          100: '#e8e5d9',
          200: '#d3ccb5',
          300: '#b9ad8b',
          400: '#a5926a',
          500: '#96815c',
          600: '#806a4e',
          700: '#685340',
          800: '#59463a',
          900: '#504037',
          950: '#2c211c',
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
