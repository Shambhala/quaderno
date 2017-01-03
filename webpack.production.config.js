const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var appDir = path.join(__dirname, 'src');
var buildDir = path.join(__dirname, 'dist');

module.exports = {
    context: appDir,
    entry: {
        bundle: "./index.js"
    },

    output: {
        filename: '[name]-[hash].min.js',
        path: buildDir,
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
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
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins: [
        /* webpack gives your modules and chunks ids to identify them. Webpack can vary the
      *  distribution of the ids to get the smallest id length for often used ids with
      * this plugin
      */
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        /**
       * handles creating an index.html file and injecting assets. necessary because assets
       * change name because the hash part changes. We want hash name changes to bust cache
       * on client browsers.
       */
        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            cache: true,
            minify: {
                //removeEmptyElements: true,
                removeComments: true,
                removeCDATASectionsFromCDATA: true,
                collapseWhitespace: true
            },
            inject: 'body'
        }),
        /**
       *  extracts the css from the js files and puts them on a separate .css file. this is for
       *  performance and is used in prod environments. Styles load faster on their own .css
       *  file as they dont have to wait for the JS to load.
       */
        new ExtractTextPlugin('[name]-[hash].min.css'),

        // handles uglifying js
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                screw_ie8: true
            }
        }),
        // creates a stats.json
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})

    ]
};
