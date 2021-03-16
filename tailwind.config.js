module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        appGreen: '#0fc69a',
        appBlue: '#141a33',
        appBorder: '#555b78',
        appGrey: '#c8c9cc',
        appTransparent: '#3a4057',
        appSkyBlue: '#08d3f6'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
