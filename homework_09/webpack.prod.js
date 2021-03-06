const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new OptimizeCssAssetsPlugin(),
    new BundleAnalyzerPlugin()
   ]
 });