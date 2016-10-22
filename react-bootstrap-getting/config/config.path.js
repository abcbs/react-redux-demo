import path from 'path';
import yargs from 'yargs';
//工程路径配置常量
const pathConfig = {
    buildPath: path.resolve(__dirname, '../dist'),
    buildLibPath: path.resolve(__dirname,  '../dist','[name]-manifest.json'),
    publicPath:  "/build/",
    contentBase:path.join(__dirname, ''),
    nodeModulesPath : path.resolve(__dirname, '../node_modules')

};

export const buildConfig={
    buildPath : 'build',
    nodeModulesPath : 'node_modules',
    publicPath :  "/build/",
    contentBase : "",
    dllReferencePath:path.resolve(__dirname, '../dist')
};

export const jsLoader = 'babel?cacheDirectory';

export var entryFile="./src/app";

export const options = yargs
    .alias('p', 'optimize-minimize')
    .alias('d', 'debug')
    .default('host', '192.168.1.102')
    .default('port', '3000')
    .default('debug', false)
    .argv;

export  default pathConfig;