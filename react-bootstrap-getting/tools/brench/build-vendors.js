import {exec} from '../develop/exec';
import fsp from 'fs-promise';
import configure,{options,buildConfig} from '../../config/config.path';

const {buildPath, buildLibPath,publicPath,contentBase,nodeModulesPath}= configure;

export default function buildVendors() {
    console.log('Building: '.cyan + 'Vendors'.green);
    return exec(`rimraf ${buildPath}`)
        .then(() => fsp.mkdirs(buildPath))
        .then(() => exec(`webpack --config webpack.config.vendors`))
        .then(() => console.log('Built: '.cyan + 'Vendors'.green));
}

