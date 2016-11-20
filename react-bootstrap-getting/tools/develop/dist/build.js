import { exec } from '../exec';
import {publicRoot} from '../constants';
import {vendersRoot} from '../constants';
export default function BuildDistributable() {
  console.log('Building: '.cyan + 'distributable'.green);
    return exec(`rimraf  ${publicRoot}`).then(//rimraf
        ()=>exec('webpack --config webpack.config.js --progress --colors')
    )
        .then(
            ()=>exec('rimraf ${vendersRoot}')//
        ).then(
            ()=>exec('webpack --config webpack.config.vendors')
        ).then(() => console.log('Built: '.cyan + 'distributable'.green));
}

