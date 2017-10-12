'use strict';

var path = require('path');
var webpack = require('webpack'); 

module.exports = {
	entry: [
		'./src/js/main.js'
	],
	resolve: {
		modulesDirectories: [
			'node_modules',
			'lib'
		],
		alias: {
			zepto: "zepto.min",
			template: "template.min"
		}
	},
	node: {
		fs: 'empty'
	},
	externals: {
		zepto: 'zepto' //引用外部cdn时，可排除外部的代码
	},
	output: {
		path: __dirname + "/dest/js/",
		filename: "ui.js"
	}
};
