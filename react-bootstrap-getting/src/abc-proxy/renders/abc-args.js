import yargs from 'yargs';

export const options = yargs
    .default('host', '192.168.1.102')
    .default('port', '3000')
    .default('apiHost', '192.168.1.102')
    .default('apiPort', '3030')
    // .default('iso_config','../../../../config/webpack-isomorphic-tools')
    // .default('iso_rootDir','../../../../')
    // .default('publicPath','../../')
    .argv;