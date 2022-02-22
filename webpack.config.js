const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js',
    'great-styles': './src/scss/great-styles.scss',
  },
  output: {
    path: path.resolve(__dirname, 'static'),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        type: 'asset/source',
        generator: {
          filename: '[name].css',
        },
        use: [
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
                includePaths: [path.resolve(__dirname, 'src/scss')],
              },
            },
          },
        ],
      },
      {
        include: path.resolve(__dirname, 'src/scss/images'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 0,
            name: './images/[name].[ext]',
          },
        },
      },
      {
        include: path.resolve(__dirname, 'src/scss/fonts'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 0,
            name: './fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/scss/images', to: 'images' },
        { from: './src/scss/fonts', to: 'fonts' },
      ],
    }),
    new RemovePlugin({
      after: {
        include: [
          './static/bundle.js',
          './static/bundle.js.map',
          './static/great-styles.js',
          './static/great-styles.js.map',
        ],
      },
    }),
  ],
}
