const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, `../src/index.tsx`),
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
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // font は CDN から取得してくるのであとで消す
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'file-loader',
                            name: 'static/fonts/[name].[ext]',
                        },
                    },
                ],
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
            filename: 'index.html',
            template: 'static/html/index.html',
            chunks: ['index'],
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
            filename: 'terms.html',
            template: 'static/html/terms.html',
            chunks: ['terms'],
            scriptLoading: true,
        }),
    ],
};
