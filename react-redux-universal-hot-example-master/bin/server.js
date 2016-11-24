#!/usr/bin/env node
require('../server.babel'); // babel registration (runtime transpilation for node)
var path = require('path');
// this must be equal to your Webpack configuration "context" parameter
var rootDir = path.resolve(__dirname, '..');
/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if (__DEVELOPMENT__) {
  if (!require('piping')({
      hook: true,
      ignore: /(\/\.|~$|\.json|\.scss$)/i
    })) {
    return;
  }
}

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
// webpack-isomorphic-tools settings reside in a separate .js file
// (because they will be used in the web server code too).

//What does .development() method do? It enables development mode.
// In short, when in development mode, it disables asset caching
// (and enables asset hot reload), and optionally runs its own "dev server" utility (see port configuration setting).
// Call it in development webpack build configuration, and,
// conversely, don't call it in production webpack build configuration.
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
// also enter development mode since it's a development webpack configuration
// (see below for explanation)
//   .development(__DEVELOPMENT__)
  // initializes a server-side instance of webpack-isomorphic-tools
  // (the first parameter is the base path for your project
  //  and is equal to the "context" parameter of you Webpack configuration)
  // (if you prefer Promises over callbacks
  //  you can omit the callback parameter
  //  and then it will return a Promise instead)
  .server(rootDir, function() {
    // webpack-isomorphic-tools is all set now.
    // here goes all your web application code:
    // (it must reside in a separate *.js file
    //  in order for the whole thing to work)
    //server是服务端使用WebpackIsomorphicTools的实例
    require('../src/server');
  });
