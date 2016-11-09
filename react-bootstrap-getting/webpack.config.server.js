
import configure  from  './config/config.path';
//var configure  =require ( './config/config.path');
configure.entryFile='./src/todos/index';

var config = require('./config/webpack.config.server');
// config.entry={
//     app:"./src/todos/index"
// }
module.exports = config;
