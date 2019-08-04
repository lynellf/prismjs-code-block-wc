const merge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
	mode: 'production',
	output: {
		path: `${__dirname}/dist`,
		publicPath: '/dist/',
		filename: 'codeBlockProd.min.js',
		chunkFilename: '[name].js'
	}
})
