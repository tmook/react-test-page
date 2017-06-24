var path = require('path');
var webpack = require('webpack');

module.exports = {
   entry: './js/index.js',
   output: {
      path: __dirname,
      filename: 'js/bundle.js'
   },
   watch: false,
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
};


