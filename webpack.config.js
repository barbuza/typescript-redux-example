const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  context: path.resolve('.'),

  entry: {
    client: [
      'webpack-dev-server/client?http://127.0.0.1:3000',
      'webpack/hot/only-dev-server',
      './src'
    ]
  },

  output: {
    path: 'dist',
    filename: '[name]-[hash].js'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]

};
