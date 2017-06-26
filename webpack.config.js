var debug = process.env.NODE_ENV !== 'production';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Dotenv = require('dotenv-webpack');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
var DotenvConfig = new Dotenv({ path:'./.env' });


module.exports = {
   context: __dirname + '/src',
   entry: './index.js',
   output: {
      path: __dirname + '/dist',
      filename: 'static/bundle.js',
   },
   module: {
      loaders: [
         {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
               presets: ['es2015', 'react', 'stage-0']
            }
         }
      ]
   },
  plugins: debug ? [HTMLWebpackPluginConfig, DotenvConfig] : 
    [ HTMLWebpackPluginConfig,
      DotenvConfig,
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
   ],
};


