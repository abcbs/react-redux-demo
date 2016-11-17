import {exec} from '../exec';
import fsp from 'fs-promise';
import {vendersRoot as buildPath} from '../constants';

export default function buildVendors() {
    console.log('Building: '.cyan + 'Vendors'.green);
    return exec(`rm -rf ${buildPath}`)
        .then(() => fsp.mkdirs(buildPath))
        .then(() => exec(`webpack --config webpack.config.vendors`))
        .then(() => console.log('Built: '.cyan + 'Vendors'.green));
}

