const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = {
    root: path.resolve('.'),
    npm: path.resolve('.', '/node_modules'),
    images: path.resolve('.', '/src/assets/images')
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js'
        //     [
        //     // 'webpack-dev-server/client?' + require("ip").address() + ':8080/',
        //     // 'webpack-hot-middleware/client',
        //     // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        //     './index.js'
        // ]
    },
    module: {
        loaders: [
            {
                test: [/\.js$/, /\.es6$/],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1!postcss-loader'
                })
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: "css-loader!less-loader!postcss-loader"
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                loader: 'file-loader?publicPath=../&name=./assets/images/[name].[ext]'
            },
            {
                test: /\.[ot]tf$/,
                exclude: /node_modules/,
                loader: 'file-loader?publicPath=../&name=./assets/fonts/[name].[ext]'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('[name].bundle.css')
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
    ]
};