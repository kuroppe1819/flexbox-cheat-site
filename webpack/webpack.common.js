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
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js',
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
            favicon: 'static/image/favicon.ico',
            chunks: ['contact'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'en/contact.html',
            template: 'static/html/en/contact.html',
            favicon: 'static/image/favicon.ico',
            chunks: ['en/contact'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'index.html',
            template: 'static/html/index.html',
            favicon: 'static/image/favicon.ico',
            chunks: ['index'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'en/index.html',
            template: 'static/html/en/index.html',
            favicon: 'static/image/favicon.ico',
            chunks: ['en/index'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'privacy.html',
            template: 'static/html/privacy.html',
            favicon: 'static/image/favicon.ico',
            chunks: ['privacy'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'en/privacy.html',
            template: 'static/html/en/privacy.html',
            favicon: 'static/image/favicon.ico',
            chunks: ['en/privacy'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'terms.html',
            template: 'static/html/terms.html',
            favicon: 'static/image/favicon.ico',
            chunks: ['terms'],
            scriptLoading: true,
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist',
            filename: 'en/terms.html',
            template: 'static/html/en/terms.html',
            favicon: 'static/image/favicon.ico',
            chunks: ['en/terms'],
            scriptLoading: true,
        }),
    ],
};
