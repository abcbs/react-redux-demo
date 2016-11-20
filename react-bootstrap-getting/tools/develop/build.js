import 'colors';

import lib from './dist/build';
import es from './dist/build';
import dist from './dist/build';
import { copy } from './fs-utils';
// import { distRoot, bowerRoot } from './constants';
import { exec } from './exec';

export default function build(options) {
  return Promise.all([
    lib(),
    es(),
    dist()
  ])
  .then(() => console.log("编译完成"));
}
