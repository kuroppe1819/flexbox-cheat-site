const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env.PUBLIC_URL': JSON.stringify('/flexbox-cheat-site'),
            BABEL_ENV: JSON.stringify('production'),
        }),
    ],
});
