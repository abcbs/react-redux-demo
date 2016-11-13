require('babel-register');

const webpack = require('webpack');

const webpackConfigBase = require('./webpack.config').default;

module.exports = config => {
  const { env } = process;

  config.set({
    // only use PhantomJS for our 'test' browser
    browsers: ['PhantomJS'],

    // just run once by default unless --watch flag is passed
    singleRun: !argv.watch,

    // which karma frameworks do we want integrated
    frameworks: ['mocha', 'chai'],

    // displays tests in a nice readable format
    //reporters: ['spec'],
     reporters: ['mocha', 'coverage'],
    //
    port: 9876,
    //
    colors: true,
    //
    autoWatch: true,
    // include some polyfills for babel and phantomjs
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/**/*.js' // specify files to watch for tests
    ],
    preprocessors: {
      // these files we want to be precompiled with webpack
      // also run tests throug sourcemap for easier debugging
      ['./test/**/*.js']: ['webpack', 'sourcemap']
    },


    // This explicitly doesn't use webpack-merge because we want to override
    // the DefinePlugin in the base config.
    webpack: Object.assign({}, webpackConfigBase, {
      // plugins: [
      //   new webpack.DefinePlugin({
      //     'process.env.NODE_ENV': JSON.stringify('test'),
      //   }),
      // ],
      devtool: 'cheap-module-inline-source-map',
    }),

    mochaReporter: {
      output: 'autowatch',
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage',
    },

    customLaunchers: {
      ChromeCi: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },


    browsers: env.BROWSER ? env.BROWSER.split(',') : ['Chrome'],

    singleRun: env.CONTINUOUS_INTEGRATION === 'true',
    webpackMiddleware: {
      noInfo: true
    },
    // tell karma all the plugins we're going to be using to prevent warnings
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  });
};
