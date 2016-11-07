import runCmd  from   './runcmd'
/**
import 'colors';
import portfinder from 'portfinder';
import { exec } from 'child-process-promise';
import ip from 'ip';

portfinder.basePort = 4000;

const SIGINT = 'SIGINT';
let processMap = {};

function output(prefix, message) {
  let formattedMessage = message.toString().trim().split('\n')
    .reduce((acc, line) => `${acc}${ acc !== '' ? '\n' : '' }${prefix} ${line}`, '');

  console.log(formattedMessage);
}

function listen({stdout, stderr}, name) {
  stdout.on('data', data => output(`[${name}] `.grey, data));
  //stderr.on('data', data => output(`[${name}] `.grey, data));
}

function shutdown() {
  Object.values(processMap).forEach(process => process.kill(SIGINT));
}

function catchExec(name, err) {
  if (err.killed) {
    console.log('Shutdown: '.cyan + name.green);
    shutdown();
    return false;
  }

  console.log(`${name} -- Failed`.red);
  console.log(err.toString().red);
  return true;
}

function runCmd(name, cmd, options) {
  exec(cmd, options)
    .progress(childProcess => {
      listen(childProcess, name);
      processMap[name] = childProcess;
      return;
    })
    .then(() => console.log('Shutdown: '.cyan + name.green))
    .catch(err => {
      if (catchExec(name, err)) {
        // Restart if not explicitly shutdown
        runCmd(name, cmd, options);
      }
    });
}

console.log('Starting docs in Development mode'.cyan);

process.on(SIGINT, shutdown);
**/
export default function startDevlop () {
  runCmd('docs-server', 'webpack-dev-server --config webpack.config.server.js --progress  --hot --colors');
}


