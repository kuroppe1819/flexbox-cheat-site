const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.PUBLIC_URL': JSON.stringify('/'),
            BABEL_ENV: JSON.stringify('development'),
        }),
    ],
});
