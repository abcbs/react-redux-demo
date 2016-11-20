import { transform } from 'babel-core';
import fs from 'fs';
import path from 'path';
import outputFileSync from 'output-file-sync';
import { copy } from './fs-utils'
import {styleRoot,mediaRoot,templateRoot}from './constants'

function buildContent(content, filename, destination, babelOptions = {}) {
  babelOptions.filename = filename;
  //具体的Babel翻译
  const result = transform(content, babelOptions);
  outputFileSync(destination, result.code, {encoding: 'utf8'});
}

function buildFile(filename, destination, babelOptions = {}) {
  const content = fs.readFileSync(filename, {encoding: 'utf8'});
  // We only have .js files that we need to build
  const value=filename.toLowerCase();
  let fileType=0;
  if(value&&(value.indexOf(".css")!==-1||
      value.indexOf("less")!==-1||value.indexOf("sass")!==-1)){
      fileType=2
  }else if(value&&(value.indexOf("js")!==-1||value.indexOf("jsx")!==-1)){
      fileType=1
  }else if(value&&(value.indexOf("html")!==-1||value.indexOf("htm")!==-1)){
    fileType=3;
  }
  if (fileType===1) {
    //处理js内容
    const outputPath = path.join(destination, path.basename(filename));
    buildContent(content, filename, outputPath, babelOptions);
  }else if (fileType===2) {
    const outputPath = path.join(destination, path.basename(filename));
    copy(filename, outputPath);
    const stylePath = path.join(styleRoot, path.basename(filename));
    copy(filename, stylePath);
  }else  if(fileType===3){
    const outputPath = path.join(templateRoot, path.basename(filename));
    copy(filename, templateRoot);
  }else
  {
    const outputPath = path.join(mediaRoot, path.basename(filename));
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
