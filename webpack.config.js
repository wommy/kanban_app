var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(_dirname);

module.exports = {
	entry: path.resolve(ROOT_PATH, 'app/main');
	output:{
		path: path.resolve(ROOT_PATH, 'build');
		filename: 'bundle.js';
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Kanban app'
		})
	]
};