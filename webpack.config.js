 var path              = require('path'),
webpack           = require('webpack'),
autoprefixer      = require('autoprefixer'),
OpenBrowserPlugin = require('open-browser-webpack-plugin');
var configServe = {
	port: 6767,
};
module.exports = {
	devServer: {
		hot: true,
		inline: true,
		historyApiFallback: true,
		progress: true,
		port: configServe.port,
	},
	entry: [
		path.resolve(__dirname, './dev/app.js')
	],
	output: {
		path: path.join(__dirname, "build"),
		filename: 'bundle.js',
		//publicPath: "build"
	},
	module: {
		loaders: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
			},
			{
				test: /\.scss?$/,
				include: path.resolve(__dirname, 'dev'),
				loader: 'style!css!postcss!sass',
			},
			{
	            test   : /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
	            include: path.resolve(__dirname, 'dev'),
	            loader: 'url',
				query: {
				  name: 'static/fonts/[hash].[ext]'
				}
        	},
        	{
        		test   : /\.(jpg|png|svg|gif)(\?[a-z0-9]+)?$/,
        		include: path.resolve(__dirname, 'dev'),
		        loader: "file",
        		query: {
				    name: 'static/img/[hash].[ext]'
				  }
        	},
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'dev'),
                loaders: [
                    "file?name=[name].[ext]",
                    "extract",
                    "html"
                ]
            }
		]
	},
	postcss: [
		autoprefixer({ browsers: ['last 5 versions'] }),
	],

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:' + configServe.port }),
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	stats: {
		colors: true,
	},
	devtool: 'source-map',
};
