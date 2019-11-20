var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]        
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        hot:true
    }
};