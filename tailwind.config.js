module.exports = {
  purge: {
    mode: 'layers',
    content: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '70px 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
