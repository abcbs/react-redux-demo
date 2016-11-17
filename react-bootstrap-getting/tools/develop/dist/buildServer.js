import {exec} from '../exec';
import fsp from 'fs-promise';
import {publicRoot as buildPath} from '../constants';

export default function buildServer() {
    console.log('Building: '.cyan + 'Vendors'.green);
    return exec(`rm -rf ${buildPath}`)
        .then(() => fsp.mkdirs(buildPath))
        .then(() => exec(`webpack --config webpack.config.js --progress --colors`))
        .then(() => console.log('Built: '.cyan + 'Vendors'.green));
}

