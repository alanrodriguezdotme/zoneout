var path = require("path");
var webpack = require("webpack");
var WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {

	devtool: 'eval',

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/App.tsx'
	],

	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: '/build/'
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
		"$": "$",
		_: "underscore"
	},

	devServer: {
		inline: true,
		hot: true,
		headers: { 'Access-Control-Allow-Origin': '*' }
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
				loaders: ['style', 'css', 'sass']
			},
			{ 
				test: /\.css$/,
				exclude: [/node_modules/, /typings/],
				loader: 'style-loader!css-loader'
			},
			{ 
				test: /\.jpg/,
				loader: "file-loader",
				exclude: [/node_modules/, /typings/]
			},
			{ 
				test: /\.png/,
				loader: "url-loader?mimetype=image/png",
				exclude: [/node_modules/, /typings/]
			},
			{ 
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=[name].[ext]',
				exclude: [/node_modules/, /typings/]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new WebpackNotifierPlugin({ alwaysNotify: true })
	]
}