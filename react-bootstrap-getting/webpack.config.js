var path = require('path')
var webpack = require('webpack')
const buildPath = path.resolve(__dirname, './build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const publicPath =  "/build/";
module.exports = {

  //devtool: 'eval-source-map',
  entry: {
    app:'./src/index'
 },
  output: {
    path: buildPath,
    filename: 'app.js',
    publicPath: publicPath
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./dist/manifest.json")
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader:  'babel' ,
      query:{"presets": ["react","es2015", "stage-1"]},
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}




 
