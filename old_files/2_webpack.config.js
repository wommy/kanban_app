var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifestyle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
	entry: path.resolve(ROOT_PATH, 'app/main.jsx'),
	output: {
		path: path.resolve(ROOT_PATH, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: path.resolve(ROOT_PATH, 'app')
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlwebpackPlugin({
			title: 'Kanban app'
		})
	]
};

// if(TARGET === 'start' || !TARGET) {
// 	module.exports - merge(common, {
// 		devtool: 'eval-source-map',
// 		devServer: {
// 			historyApiFallback:true,
// 			hot: true,
// 			inline: true,
// 			progress: true
// 		},
// 		plugins: [
// 			new webpack.HotModuleReplacementPlugin()
// 		]
// 	});
// };

if(TARGET === 'start' || !TARGET) {
	module.exports - merge(common, {
		devtool: 'eval',
		module: {
			loaders: [
				{
					test: /\.jsx$/,
					loaders: ['babel'],
					include: path.resolve(ROOT_PATH, 'app')
				}
			]
		}
	});
}