/*
 * @Author: guangwei.bao 
 * @Date: 2019-03-30 15:07:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2019-04-01 16:31:53
 * @Describe: 打包配置文件
 */

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const HappyPack = require('happypack');
// 在内部创建的每个HappyPack插件都会创建自己的线程，用于运行加载器。但是，如果您使用多个HappyPack插件，
// 那么最好自己创建一个线程池，然后配置插件以共享该池，从而最大限度地减少其中线程的空闲时间。
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

const webpackConfig = {
	/*
	* 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
	*/
	mode: 'development',
	/*
	* 控制是否生成，以及如何生成 source map。
	*/
	devtool: 'cheap-module-eval-source-map',
	// 入口
	entry: './src/index.js',
	// 出口
	output: {
		path: path.join(__dirname, 'lib'),
		publicPath: 'react-ngwlan-storage/',
		filename: 'index.js',
		libraryTarget: 'umd', // 组件采用UMD格式打包
		library: 'react-ngwlan-storage' // 组件名称
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				// HappyPack通过并行转换文件使得初始webpack构建更快。
				use: 'happypack/loader?id=babel',
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, './src')
				// 排除 node_modules 目录下的文件
				// exclude: path.resolve(__dirname, 'node_modules')
			}
		]
	},
	resolve: {
		// 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
		// 其中 __dirname 表示当前工作目录，也就是项目根目录
		modules: [ path.resolve(__dirname, './node_modules') ],
		// 用于配置在尝试过程中用到的后缀列表,优先级从前往后
		extensions: [ '.js', '.jsx', '.json' ]
	},
	plugins: [
		// HappyPack通过并行转换文件使得初始webpack构建更快。
		new HappyPack({
			id: 'babel',
			threadPool: happyThreadPool,
			// babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
			loaders: [ 'cache-loader', 'babel-loader?cacheDirectory', 'source-map-loader' ]
		})
	]
};
module.exports = webpackConfig;
