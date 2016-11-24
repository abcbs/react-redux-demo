import 'colors';

import lib from './lib/build';
import es from './es/build';
import {develop} from './release'

export default function compile(options) {
  return Promise.all([
    lib(),
    es(),
    develop()
  ])
  .then(() => console.log("编译完成"));
}
