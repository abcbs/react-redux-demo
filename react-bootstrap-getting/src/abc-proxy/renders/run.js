require('babel-register');

var path = require('path');

var rootDir = path.resolve(__dirname, '../../../');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

require('./proxy');
