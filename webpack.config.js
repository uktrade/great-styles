const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
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
    new MiniCssExtractPlugin({}),
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
