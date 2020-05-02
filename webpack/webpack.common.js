const path = require('path');
const srcDir = '../src';
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, `${srcDir}/Index.tsx`),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '0.0.0.0',
        port: 8080,
        open: true,
        useLocalIp: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader', 'babel-loader?cacheDirectory'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        new BabelMinifyPlugin(),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'index.html',
            template: 'static/index.html',
        }),
    ],
};
