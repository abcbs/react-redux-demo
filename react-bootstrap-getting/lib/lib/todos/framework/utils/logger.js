"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = info;
exports.error = error;
exports.warn = warn;
exports.fatal = fatal;
exports.trace = trace;
// import bunyan from 'bunyan'
// var log = bunyan.createLogger({name: 'abc-logger'});
// if(log){
//     console.log("Logger Loaded")
// }

function info() {
    for (var _len = arguments.length, infoLog = Array(_len), _key = 0; _key < _len; _key++) {
        infoLog[_key] = arguments[_key];
    }

    console.log("info\n", infoLog);
}

function error(err) {
    console.log("err\n", err);
}

function warn(warnLog) {
    console.log("warn,", warnLog);
}

function fatal(fatalLog) {
    console.log("fatal\n", fatalLog);
}

function trace(traceLog) {
    console.log("trace,", traceLog);
}