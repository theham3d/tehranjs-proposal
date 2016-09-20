var path              = require('path'),
webpack           = require('webpack'),
autoprefixer      = require('autoprefixer'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
uglifyJsPlugin    = webpack.optimize.UglifyJsPlugin;

module.exports = {
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
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel',
			},
			{
				test: /\.scss?$/,
				include: path.resolve(__dirname, 'dev'),
				loader: ExtractTextPlugin.extract('style','css!postcss!sass')
				//loader: 'style!css!postcss!sass',
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
        		loaders: [
		          'file?hash=sha512&digest=hex&name=static/img/[hash].[ext]',
		          'img'
		        ]
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
	imagemin: {
		optipng: { optimizationLevel: 5 },
	    jpegtran: {
	      progressive: true,
	      arithmetic: false
	    },
	    pngquant: {
	      floyd: 0.5,
	      speed: 2
	    },
	    svgo: {
	      plugins: [
	        { removeTitle: true },
	        { convertPathData: false }
	      ]
	    }
	 },
	plugins: [
		new ExtractTextPlugin('static/css/[name].css', {allChunks: true}),
		new webpack.optimize.DedupePlugin(),
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	devtool: 'none',
};
