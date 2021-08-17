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
          // extract to separate file
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
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
              implementation: require('node-sass'),
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
                includePaths: [path.resolve(__dirname, 'src/scss')],
              }
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|jpeg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 0,
            name: './images/[name].[ext]'
          }
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 0,
            name: './fonts/[name].[ext]'
          }
        }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/scss/images", to: "images" },
        { from: "./src/scss/fonts", to: "fonts" },
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
  ]
}