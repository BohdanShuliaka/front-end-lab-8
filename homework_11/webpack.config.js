  const path = require('path');
  const webpack = require('webpack');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/output-module.js',
    plugins: [    
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
    }),
        new ExtractTextPlugin({
          filename: 'style.css',
        }),
           ],
        
    output:  {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
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