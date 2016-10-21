var path = require('path')
var webpack = require('webpack');
const vendors = ['react','react-dom','redux','react-redux','redux-thunk','redux-logger',
  'isomorphic-fetch','babel-polyfill'];



module.exports = {

  entry: {
    app:path.join(__dirname, 'src'),

    vendors: ['react','react-dom','redux','react-redux','redux-thunk','redux-logger',
      'isomorphic-fetch','babel-polyfill']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/dist/'

  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //这个使用uglifyJs压缩你的js代码
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ,
     new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
      mangle: true
    })
  ],
  module: {
    loaders: [
      {
        test:/\.js?$/,
        exclude:/node_modules/,
        loader:'babel',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  }

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
