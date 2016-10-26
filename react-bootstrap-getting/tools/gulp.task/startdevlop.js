import {startDevlop} from '../../tools/brench';

module.exports = function(gulp, plugins) {
    return function(done) {
        startDevlop();
   };
};
