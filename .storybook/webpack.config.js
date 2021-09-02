const path = require('path')

module.exports = {
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, '../src/scss/helpers/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        use: [{ loader: 'raw-loader' }],
      },
    ],
  },
}
