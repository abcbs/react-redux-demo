import webpack from 'webpack';
import configure,{options,buildConfig} from './config.path';

const {buildPath, buildLibPath,publicPath,contentBase,nodeModulesPath}= configure;

const reactvendor = ['react','react-dom'];

const reduxvendor=['redux','react-redux',
  'redux-thunk','redux-logger','redux-act','reselect','react-router-redux','redux-undo'];

const baseframevendor=['babel-polyfill','classnames','lodash','normalizr',
  'isomorphic-fetch','react-tap-event-plugin','fastclick','humps'];

const materialuivendor=['material-ui'];

const bootvendor=['react-bootstrap','bootstrap'];

const baseVendors  =
{
  name: "vendors",
  entry: {
    baseframevendor:baseframevendor,
    reactvendor:reactvendor,
    reduxvendor: reduxvendor,
    bootvendor:bootvendor,
    materialuivendor:materialuivendor
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    library: '[name]_[chunkhash]'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DllPlugin({
      context: __dirname,
      //name: "vendors_[hash]",
     // name: "[name]_[hash]",
      name: '[name]_[chunkhash]',
     // path: path.resolve(__dirname, "./dist/manifest.json")
      path: buildLibPath

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

if (process.env.NODE_ENV === 'production'||options.debug===false) {
  //baseVendors.devtool = 'source-map';

  baseVendors.plugins = (baseVendors.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      //sourceMap: true,//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
      mangle: true
    }),
    //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin()
  ]);
}


export default baseVendors;