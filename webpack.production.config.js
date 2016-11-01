var path = require("path");
var webpack = require("webpack");
var WebpackNotifierPlugin = require("webpack-notifier");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = {

	devtool: 'source-map',

	entry: './src/App.tsx',

	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: './build/'
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.css',  '.scss'],
		modulesDirectories: ['node_modules', 'typings'],
		alias: {
			$: 'jquery/src/jquery',
			_: 'underscore'
		}
	},

	externals: {
		"jquery": "jQuery",
		"$": "$",
		_: "underscore"
	},

	module: {
		loaders: [
			{ 
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /typings/],
				loader: 'babel-loader'
			},
			{ 
				test: /\.tsx?$/,
				exclude: [/node_modules/, /typings/],
				loader: 'ts-loader'
			},
			{
				test: /\.scss$/,
				exclude: [/node_modules/, /typings/], 
				loader: ExtractTextPlugin.extract('style','css!sass')
			},
			{
				test: /\.css$/,
				exclude: [/node_modules/, /typings/],
				loader: ExtractTextPlugin.extract('style','css')
			},
			{ 
				test: /\.jpg/,
				exclude: [/node_modules/, /typings/], 
				loader: "file-loader" 
			},
			{ 
				test: /\.png/,
				exclude: [/node_modules/, /typings/], 
				loader: "url-loader?mimetype=image/png"
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=[name].[ext]',
				exclude: [/node_modules/, /typings/], 
			}
		]
	},

	plugins: [
		new WebpackNotifierPlugin({ alwaysNotify: true }),
		new ExtractTextPlugin("styles.css")
	]
 }