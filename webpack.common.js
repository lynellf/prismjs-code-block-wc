const path = require('path')
module.exports = {
	entry: './src/app.ts',
	module: {
		rules: [
			{
				test: /.tsx?$/,
				include: [ path.resolve(__dirname, 'src') ],
				exclude: [ path.resolve(__dirname, 'node_modules') ],
				loader: 'babel-loader',
				query: {
					presets: [ [ '@babel/preset-typescript' ] ],
					plugins: [
						'@babel/plugin-proposal-class-properties',
						[
							'prismjs',
							{
								languages: [
									'clike',
									'cs',
									'css',
									'git',
									'go',
									'go',
									'graphql',
									'java',
									'java',
									'javascript',
									'json',
									'jsx',
									'markup',
									'php',
									'pug',
									'python',
									'scss',
									'sql',
									'tsx',
									'typescript'
								],
								plugins: [ 'line-numbers' ],
								theme: 'twilight',
								css: false
							}
						]
					]
				}
			}
		]
	},
	resolve: {
		extensions: [ '.json', '.js', '.jsx', '.ts', '.tsx' ]
	}
}
