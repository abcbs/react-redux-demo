import {exec} from './exec';
import configure,{options,buildConfig} from '../../config/config.path';

const {buildPath, buildLibPath,publicPath,contentBase,nodeModulesPath}= configure;

export default function gits() {
    console.log('Building: '.cyan + 'Vendors'.green);

    return exec(`rimraf ${buildPath}`)
        .then(() => Promise.all([
            exec(`git add .`)
        ])).then(()=>
            exec(`git add -u`)
        ).then(()=>
            exec("git commit -m  'by prom'")
        )
        .then(() => console.log('Git: '.cyan + 'Commit'.green));
}