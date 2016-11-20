import 'colors';
import {exec, setExecOptions } from './exec';
import fsp from 'fs-promise';
import buildServer from './dist/buildServer';
import buildVenders from './dist/buildVenders';
import { releaseVendersRoot, vendersRoot,
    releaseProductRoot ,publicRoot,releaseExternalRoot,externalRoot,
    repoRoot,releaseRoot
} from './constants';
import ncp from 'ncp'
// import yargs from 'yargs';
// const argv = yargs
//     .help('h')
//     .option('port', {
//         port: 3000,
//         default: false,
//         describe: 'Increased debug output'
//     })
//     .option('debug', {
//         demand: false,
//         default: false,
//         describe: 'Only used when supplied with the --docs-only flag'
//     })
//     .argv;

// setExecOptions(argv);

function retain(fn) {
    console.log('Building: '.cyan + '目录重做，'.green);
    function delVender() {
        return exec(`rm -rf  ${releaseVendersRoot}`).
            then(() => fsp.mkdirs(releaseVendersRoot)).then(()=> "第三方库重做完成");
    }
    function delProduct() {
        return exec(`rm -rf  ${releaseProductRoot}`).
        then(() => fsp.mkdirs(releaseProductRoot)).then(()=>"产品重做完成");
    }
    function delExternal() {
        return exec(`rm -rf  ${releaseExternalRoot}`).
        then(() => fsp.mkdirs(releaseExternalRoot)).then("引入库重做完成");
    }
    return Promise.all([
        delVender(),
        delProduct(),
        delExternal()
    ]).then(()=>"成功"
    )

}

function copy() {
    console.log('Building: '.cyan + 'copy'.green);
       return Promise.all([
        ncp(vendersRoot, releaseVendersRoot),
        ncp(publicRoot, releaseProductRoot),
        ncp(externalRoot, releaseExternalRoot),
        ncp(repoRoot+'/index.html', releaseRoot+'index.html')
    ]).then(()=>"成功"
    );
}

export default function release() {
    console.log('构建: '.cyan + '产品发布开始'.green);
    return  buildVenders().then((data)=>{ console.log("第三方发布成功,",data);}).then(
        ()=>
        buildServer().then((data) => {
            console.log("发布结果,",data);
        }).then(data=>{
            retain().then(data=>{
                console.log("重做目录结果为",data)
                copy().then(data=>console.log("拷贝目录结果,",data));
            })

        })
    )
}

