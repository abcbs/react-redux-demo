var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  /**
   entry: [
   'webpack-hot-middleware/client',

   './src/index'
   ],
   output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',

  },**/
  entry: {
    app:path.join(__dirname, 'src'),

    vendors: ['react','react-dom','redux','react-redux','redux-thunk','redux-act','react-router',
      'babel-polyfill','classnames','style-loader']
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
    /**,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
      mangle: true
    })**/
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
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      },

      {
        test: /\.(png|jpg)$/,
        loader:'file?name=[name].[ext]'
      }


    ]
  }
}

