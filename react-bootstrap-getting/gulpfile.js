/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
require('babel-register');
require ('babel-polyfill') ;

var gulp = require('gulp');
var babel = require('gulp-babel');
//var flatten = require('gulp-flatten');
//var del = require('del');

//var babelPluginModules = require('fbjs-scripts/babel-6/rewrite-modules');
//var extractErrors = require('./scripts/error-codes/gulp-extract-errors');
//var devExpressionWithCodes = require('./scripts/error-codes/dev-expression-with-codes');

// Load all of the Gulp plugins.
var plugins = require('gulp-load-plugins')();
//const eslint = require('gulp-eslint');
function getTask(name) {
	return require(`./tools/gulp.task/${name}`)(gulp, plugins);
}



gulp.task('webpack:startDevlop', getTask('startdevlop'));

gulp.task('webpack:retainVendors', getTask('retainvendors'));

gulp.task('webpack:buildVendors', getTask('buildvendors'));

gulp.task('webpack:gits', getTask('gits'));

gulp.task('examples:await', getTask('examples'));

gulp.task('default', ['examples:await']);
