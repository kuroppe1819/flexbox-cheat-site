const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isAnalyze = argv.analyze === undefined;
    const plugins = [
        new CopyPlugin({
            patterns: [
                { from: 'static/image', to: 'image' },
                { from: "static/robots.txt", to: "" },
                { from: "static/CNAME", to: "" }
            ]
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
