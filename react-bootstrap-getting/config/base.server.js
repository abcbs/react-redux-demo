import webpack from 'webpack';
import ip from 'ip';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import configure,{options,buildConfig} from './config.path';

const webpackDevServerAddress = `http://${ip.address()}:${options.port}`;

const cssSourceMap = options.debug ? '?sourceMap' : '';

const entryFile = configure.entryFile;


const nodeModulesPath=configure.nodeModulesPath;

const baseServer = {
  devtool: options.debug ? 'source-map' : null,
  dependencies: ["vendors","baseframevendor","reactvendor","bootvendor"],
  entry: {
    app: entryFile
  },
  output: {
    filename: '[name].js',
    //打包文件存放的绝对路径,html.js,css会在这个路径下
    path: buildConfig.buildPath,
    //设置为webpack-dev-server服务器下资源目录的绝对路径
    //网站运行时的访问路径
    //如果不设置的话，打包出的html中默认路径会是相对路径
    publicPath: options.debug ? `${webpackDevServerAddress}${buildConfig.publicPath}` 
        : buildConfig.publicPath
  },
  module: {
    loaders: [
      {
        // React-hot loader and
        test: /\.js$/, // All .js files
        loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
        {
            test: /\.css/,
            loader: 'style-loader!css-loader'
        },
        { test: /\.less$/,
            //loader: ExtractTextPlugin.extract('style', `css${cssSourceMap}!less${cssSourceMap}`)
            loader: 'style!css!less'
       },
        {
            test: /\.scss/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
        },
      { test: /\.json$/, loader: 'json' },
      { test: /\.jpe?g$|\.gif$|\.png|\.ico$/,
          //loader: 'file?name=[name].[ext]'
          loader: 'url-loader?limit=8192&name=images/[name]_[hash].[ext]' // 图片提取到images目录
      },
      { test: /\.eot$|\.ttf$|\.svg$|\.woff2?$/, loader: 'file?name=[name].[ext]'
      },

    ],
  },

  plugins: [
   /**
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(buildConfig.dllReferencePath,"baseframevendor-manifest.json"))
    }),**/
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(buildConfig.dllReferencePath,"reactvendor-manifest.json"))
    }),
    //new ExtractTextPlugin('[name].css')
    new ExtractTextPlugin("css/bundle-[name]-[hash:8].css"), // css输出到css目录
  ]
};

if (process.env.NODE_ENV === 'production'||options.debug===false) {
  // baseServer.devtool = 'source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  baseServer.plugins = (baseServer.plugins || []).concat([
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
  ])
}else{
   baseServer.plugins = (baseServer.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NoErrorsPlugin()
   ])
}

export default baseServer;
