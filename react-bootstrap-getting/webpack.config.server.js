import configure  from  './config/config.path';
import path from 'path';
import webpack from 'webpack';
//var configure  =require ( './config/config.path');
configure.entryFile='./src/todos/index';
//configure.entryFile='./src/material-ui/app';
var baseServer = require('./config/webpack.config.server');
// config.entry={
//     app:"./src/todos/index"
// }

const server= {
    ...baseServer,
    externals: [
        {
        jquery: path.resolve(__dirname,"/external/jquery/jquery.min"),
        }

    ],
    resolve: {
        alias: {
            jquery: path.resolve(__dirname, "/external/jquery/jquery.min"),
        }
    },
    // 当require的模块找不到时，尝试添加这些后缀后进行寻找
    extentions: ['', 'js'],
};

server.plugins = (baseServer.default.plugins || []).concat([
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),

]);
/**
server.entry = Object.assign(
    baseServer.default.entry,
    {"introduction/pages":"./src/todos/frames/IntroductionPage"},
    {"/home/pages":"./src/todos/frames/HomePage"}

);**/

module.exports = server;
