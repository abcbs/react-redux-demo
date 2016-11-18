import { transform } from 'babel-core';
import fs from 'fs';
import path from 'path';
import outputFileSync from 'output-file-sync';
import { copy } from './fs-utils'


function buildContent(content, filename, destination, babelOptions = {}) {
  babelOptions.filename = filename;
  //具体的Babel翻译
  const result = transform(content, babelOptions);
  outputFileSync(destination, result.code, {encoding: 'utf8'});
}

function buildFile(filename, destination, babelOptions = {}) {
  const content = fs.readFileSync(filename, {encoding: 'utf8'});
  // We only have .js files that we need to build
  if (path.extname(filename) === '.js') {
    //处理js内容
    const outputPath = path.join(destination, path.basename(filename));
    buildContent(content, filename, outputPath, babelOptions);
  }else if (path.extname(filename) === '.css') {
    const outputPath = path.join(destination, path.basename(filename));
    copy(filename, outputPath);
  }
}

export default function buildBabel(folderPath, destination, babelOptions = {}, firstFolder = true) {
  let stats = fs.statSync(folderPath);

  if (stats.isFile()) {
    buildFile(folderPath, destination, babelOptions);
  } else if (stats.isDirectory()) {
    let outputPath = firstFolder ? destination : path.join(destination, path.basename(folderPath));
    let files = fs.readdirSync(folderPath).map(file => path.join(folderPath, file));
    files.forEach(filename => buildBabel(filename, outputPath, babelOptions, false));
  }
}
