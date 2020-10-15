const autoprefixer = require('autoprefixer');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports =(env,argv)=> {
	function isDevelopment() {
		return argv.mode === 'development';
	}
	var config = {
		entry: {
			editor: './src/editor.js',
			script: './src/script.js'
		},
		output: {
			filename: '[name].js',
		},
	optimization:{
		minimizer: [
			new terserWebpackPlugin({
				sourceMap:true
			}),
			new optimizeCssAssetsWebpackPlugin(
				{
					cssProcssOption:{
						map : {
							inline:false,
							annotation:true
						}
					}
				}
			)
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new miniCssExtractPlugin({
			chunkFilename : "[id].css",
			filename:'[name].css'
		})
	],
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: __dirname + "/src/",
				use: {
					loader: 'babel-loader',
					options: {
						"plugins": ["@babel/plugin-proposal-class-properties"],
						presets: [
							'@babel/preset-env',
							[
								'@babel/preset-react',
								{
									"pragma": "React.createElement",
									"pragmaFrag": "React.Fragment",
									"development":true
								}
							],
						]
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					// Creates `style` nodes from JS strings
					miniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins:[
								autoprefixer()
							]
						}
					},
					// Compiles Sass to CSS
					'sass-loader',
				],
			}
		]
	},
	externals: {
		jquery : 'jQuery',
		'@wordpress/blocks':['wp','blocks'],
		'@wordpress/i18n':['wp','i18n'],
		'@wordpress/editor':['wp','editor'],
		'@wordpress/components':['wp','components'],
		'@wordpress/element':['wp','element']
	} 
};
return config;
}