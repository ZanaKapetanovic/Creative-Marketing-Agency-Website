/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false,
  corePlugins : {
    preflight: false
  },
  prefix: 'tw-',
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

