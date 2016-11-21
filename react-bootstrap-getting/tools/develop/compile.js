import 'colors';

import lib from './lib/build';
import es from './es/build';
// import dist from './dist/build';
import { copy } from './fs-utils';
// import { distRoot, bowerRoot } from './constants';
import { exec } from './exec';

export default function compile(options) {
  return Promise.all([
    lib(),
    es()
    // dist()
  ])
  .then(() => console.log("编译完成"));
}
