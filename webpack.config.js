const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
	optimization: {
		// minimize: false,
	},
};
