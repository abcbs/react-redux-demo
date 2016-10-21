var path = require('path');
var webpack = require('webpack');

module.exports =
  {
    name: "app",
    dependencies: ["vendor"],
    entry: {
      indexPage: './src/index',
      indexPageA: './testb'

    },

    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].js",
      //filename: '[name].[chunkhash].js',
      publicPath: '/dist'
     },
    plugins: [
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, "./src/venders/manifest.json")
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
