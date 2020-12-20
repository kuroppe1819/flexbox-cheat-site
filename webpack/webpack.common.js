const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        contact: path.resolve(__dirname, `../src/entries/contact.tsx`),
        index: path.resolve(__dirname, `../src/entries/index.tsx`),
        privacy: path.resolve(__dirname, `../src/entries/privacy.tsx`),
        terms: path.resolve(__dirname, `../src/entries/terms.tsx`),
        "en/contact": path.resolve(__dirname, `../src/entries/en/contact.tsx`),
        "en/index": path.resolve(__dirname, `../src/entries/en/index.tsx`),
        "en/privacy": path.resolve(__dirname, `../src/entries/en/privacy.tsx`),
        "en/terms": path.resolve(__dirname, `../src/entries/en/terms.tsx`),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial',
        },
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
                test: /\.(js|ts|tsx)?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'contact.html',
            template: 'static/html/contact.html',
            chunks: ['contact'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'en/contact.html',
            template: 'static/html/en/contact.html',
            chunks: ['en/contact'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'index.html',
            template: 'static/html/index.html',
            chunks: ['index'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'en/index.html',
            template: 'static/html/en/index.html',
            chunks: ['en/index'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'privacy.html',
            template: 'static/html/privacy.html',
            chunks: ['privacy'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'en/privacy.html',
            template: 'static/html/en/privacy.html',
            chunks: ['en/privacy'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'terms.html',
            template: 'static/html/terms.html',
            chunks: ['terms'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'en/terms.html',
            template: 'static/html/en/terms.html',
            chunks: ['en/terms'],
            scriptLoading: true,
        }),
    ],
};
