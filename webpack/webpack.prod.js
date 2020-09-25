const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = (env, argv) => {
    const isAnalyze = argv.analyze === undefined;
    const plugins = [
        new webpack.DefinePlugin({
            'process.env.ROOT_PATH': JSON.stringify('/flexbox-cheat-site'),
            BABEL_ENV: JSON.stringify('production'),
        }),
        new CopyPlugin({
            patterns: [{ from: 'static/image', to: 'image' }],
        }),
    ];

    if (isAnalyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return merge(common, {
        mode: 'production',
        plugins: plugins,
    });
};
