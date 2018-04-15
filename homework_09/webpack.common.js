  const path = require('path');
  const webpack = require('webpack');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    plugins: [    
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/app.html',
    }),
        new ExtractTextPlugin({
          filename: 'style.css',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CleanWebpackPlugin(['bin'])
           ],
        
    output:  {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'bin')
    },
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader'
                }
              }
          ]
      },

  };