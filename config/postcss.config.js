module.exports = ({ file, options, env }) => ({
  parse: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
      'postcss-cssnext': {},
      'autoprefixer': {},
  }
})
