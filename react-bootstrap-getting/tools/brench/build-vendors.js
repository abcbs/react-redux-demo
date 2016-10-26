import {exec} from './exec';
import configure,{options,buildConfig} from '../../config/config.path';

const {buildPath, buildLibPath,publicPath,contentBase,nodeModulesPath}= configure;

export default function buildVendors() {
    console.log('Building: '.cyan + 'Vendors'.green);

    return exec(`rimraf ${buildPath}`)
        .then(() => Promise.all([
            exec(`webpack --config webpack.config.vendors --bail`)
            //exec(`webpack --config webpack.config.vendors --bail -p`)
        ]))
        .then(() => console.log('Built: '.cyan + 'Vendors'.green));
}
