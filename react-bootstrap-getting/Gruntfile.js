'use strict';
require('babel-register');
require ('babel-polyfill') ;

module.exports = function(grunt) {
	require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
	//var webpack = require("webpack");
	var webpackConfig = require("./webpack.config.vendors.js").default;
	grunt.initConfig({

	});

	var webpack = require('./tools/grunt.task/webpack');
	grunt.registerTask('webpack:startDevlop', webpack.startDevlop);
	
	grunt.registerTask("default", ["webpack:startDevlop"]);


	// Production build
	grunt.registerTask("build", ["webpack:build"]);
};
