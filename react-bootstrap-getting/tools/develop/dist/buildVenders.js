import {exec} from '../exec';
import fsp from 'fs-promise';
import {vendersRoot as buildPath} from '../constants';
import cmdExec from '../cmdExec'
export default function buildVendors() {
    console.log('Building: '.cyan + 'Vendors'.green);

    return   new Promise((resolve, reject) => {
            exec(`rm -rf ${buildPath}`)//rimraf rm -rf
                .then(() => fsp.mkdirs(buildPath)).then(
                cmdExec('build vendor',`webpack --debug false --config webpack.config.vendors`,{
                        hot:false,
                        env: {
                            // PORT: 3000,
                            // NODE_ENV:"production",
                            // ...process.env
                            debug:false,
                        }},
                    (err ,data)=> {
                        if (err) {
                            reject(err);
                        }else{
                            console.log("产品发布成功");
                        }
                        resolve("成功");
                    })
            )
        }
    )
}

