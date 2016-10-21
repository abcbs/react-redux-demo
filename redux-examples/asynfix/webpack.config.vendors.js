var path = require('path');
var webpack = require('webpack');

const buildPath = path.resolve(__dirname, './dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const publicPath =  "/build/";
const contentBase = path.resolve(__dirname, '');

const vendors = ['react','react-dom','redux','react-redux',
  'redux-thunk','redux-logger','redux-act','redux-logger','reselect',
  'isomorphic-fetch','babel-polyfill','classnames','lodash','material-ui','normalizr','history'];

module.exports =
{
  name: "vendors",
  entry: {
    vendors: vendors,
  },

  output: {
    path: buildPath,
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
    /**,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
      mangle: true
    })**/
  ]
}

