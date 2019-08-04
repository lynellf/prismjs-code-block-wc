const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
module.exports = merge(common, {
	mode: 'development',
	watch: true,
	output: {
		path: `${__dirname}/dev`,
		publicPath: '/dev/',
		filename: 'main.js',
		chunkFilename: '[name].js'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, '/dev/'),
		inline: true,
		open: true,
		port: 8080
	},
	stats: {
		outputPath: true
	}
})
