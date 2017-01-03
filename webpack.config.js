var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var app_dir = path.join(__dirname, 'src');
var build_dir = path.join(__dirname, 'dist');

module.exports = {
    context: app_dir,
    entry: [
      'webpack-dev-server/client?http://localhost:8888',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './index.js'
    ],
    output: {
        filename: '[name].js',
        path: build_dir,
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    cache: true,
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }, {
                // images
                test: /\.(ico|jpe?g|png|gif)$/,
                loader: "file"
            }, {
                test: /\.json?$/,
                loader: 'json'
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: 'index.template.ejs', inject: 'body'}),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};
