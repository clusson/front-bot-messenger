'use strict'
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const BUILD_DIR = path.resolve(__dirname, 'www')
const APP_DIR = path.resolve(__dirname, 'src')
const config = {
    entry: APP_DIR + '/App.js',
    cache: true,
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?/,
            include: APP_DIR,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }]
        }],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: APP_DIR + '/**/*.html', to: '', flatten: true },
            { from: APP_DIR + '/**/*.png', to: 'img', flatten: true },
            { from: APP_DIR + '/**/*.jpg', to: 'img', flatten: true }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}
module.exports = config