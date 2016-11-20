import build from '../../tools/develop/build';

import yargs from 'yargs';


module.exports = function(gulp, plugins) {
    return function(done) {
        let buildProcess=build(argv);
        buildProcess
            .catch(err => {
                if (err.stack) {
                    console.error(err.stack.red);
                } else {
                    console.error(err.toString().red);
                }
                process.exit(1);
            });
    };
};