import configure ,{options} from  './config/config.path';
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


const home=baseServer.devEntryBundle.concat("./src/enteries/home.js");
const introduct=baseServer.devEntryBundle.concat("./src/enteries/introduct.js");
const manager=baseServer.devEntryBundle.concat("./src/enteries/manager.js");
server.entry = Object.assign(
    baseServer.default.entry,{
        home:options.debug ? "./src/enteries/home.js" : home,
        introduct:options.debug ? "./src/enteries/introduct.js" : introduct,
        manager:options.debug ? "./src/enteries/manager.js" : manager
 });

module.exports = server;
