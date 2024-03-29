const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
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
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
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
          './static/great-styles.js',
          './static/great-styles.js.map',
        ],
      },
    }),
  ],
}
