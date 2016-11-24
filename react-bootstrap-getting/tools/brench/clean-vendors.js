import fsp from 'fs-promise';
import path from 'path';
import {exec} from './exec';
import configure,{options,buildConfig} from '../../config/config.path';

const {buildPath, buildLibPath,publicPath,contentBase,nodeModulesPath}= configure;

export default function cleanVendors() {
    return exec(`rimraf ${buildPath}`)
        .then(() => fsp.mkdir(buildPath))
        //.then(metadata)
        .then(() => console.log('重做库目录成功'));
}
