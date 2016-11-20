import {exec} from '../exec';
import fsp from 'fs-promise';
import {publicRoot as buildPath} from '../constants';
import cmdExec from '../cmdExec'
//webpack --config webpack.config.js --progress --colors
export default function buildServer(fn) {
    console.log('Building: '.cyan + 'Product'.green);
    return  new Promise((resolve, reject) => {
            exec(`rm -rf ${buildPath}`)//rimraf rm -rf
                .then(() => fsp.mkdirs(buildPath)).then(//debug
                    cmdExec('buid server',
                        `webpack --config webpack.config.js --debug false --progress --colors`,{
                            hot:false,
                            debug:false,
                            env: {
                                // PORT: 3000,
                                // NODE_ENV:"production",
                                // ...process.env
                                debug:false
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

