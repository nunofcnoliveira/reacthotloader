const webpack = require("webpack");
const path = require("path");

const DEV = path.resolve(__dirname, "src");
const OUTPUT = path.resolve(__dirname, "dist");

var config = {
	entry: {
		"app": [
			"react-hot-loader/patch",
			DEV + "/index.js"
		]
	},
	output: {
		path: OUTPUT,
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				include: DEV, 
				loader: "babel-loader"
			},
			{
				test: /\.css$/, 
				loader: "style-loader!css-loader"
			},
			{
				test: /\.woff$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
			},
			{
				test: /\.woff2$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
			},
			{
				test: /\.(eot|ttf|svg|gif|jpg|png)$/,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
}

module.exports = config;
