var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include:path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  resolve: {
    root: [path.resolve('./src')],
    extensions: ['','.jsx', '.js']
  }
};