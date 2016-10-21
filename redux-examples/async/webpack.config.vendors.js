var path = require('path');
var webpack = require('webpack');

const vendors = ['react','react-dom','redux','react-redux','redux-thunk','redux-logger',
  'isomorphic-fetch','babel-polyfill'];

module.exports =
{
  name: "vendors",
  entry: {
    vendors: vendors,
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'vendors.js',
    library: "vendors_[hash]"
    //path: 'dist'
    //filename: '[name].[chunkhash].js',
    //library: '[name]_[chunkhash]'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //这个使用uglifyJs压缩你的js代码
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DllPlugin({
      context: __dirname,
      name: "vendors_[hash]",
      //name: '[name]_[chunkhash]',
      path: path.resolve(__dirname, "./dist/manifest.json")

    })
  ]
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var reduxSrc = path.resolve(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
  // Resolve Redux to source
  module.exports.resolve = { alias: { 'redux': reduxSrc } }
  // Compile Redux from source
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: [ 'babel' ],
    include: reduxSrc
  })
}
