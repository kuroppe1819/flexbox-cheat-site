const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin(),
        new CopyPlugin({
            patterns: [{ from: 'static/image', to: 'image' }],
        }),
    ],
});
