const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

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
        new InjectManifest({
            swSrc: path.resolve(__dirname, `../src/sw.js`),
            swDest: 'sw.js',
            mode: 'production'
        }),
        new WebpackPwaManifest({
            filename: "manifest.webmanifest",
            short_name: "Flexbox Cheat Site",
            name: "Flexbox Cheat Site",
            description: "A simple web site for flexbox cheatsheet.",
            start_url: "/",
            display: "standalone",
            theme_color: "#2a4365",
            background_color: "#ffffff",
            icons: [
              {
                src: 'static/image/logo16.png',
                size: "16x16",
                type: "image/png"
              },
              {
                src: 'static/image/logo24.png',
                size: "24x24",
                type: "image/png"
              },
              {
                src: 'static/image/logo32.png',
                size: "32x32",
                type: "image/png"
              },
              {
                src: 'static/image/logo48.png',
                size: "48x48",
                type: "image/png"
              },
              {
                src: 'static/image/logo96.png',
                size: "96x96",
                type: "image/png"
              },
              {
                src: 'static/image/logo144.png',
                size: "144x144",
                type: "image/png"
              },
              {
                src: 'static/image/logo192.png',
                size: "192x192",
                type: "image/png"
              },
              {
                src: 'static/image/logo512.png',
                size: "512x512",
                type: "image/png"
              }
            ]
          })
    ];

    if (isAnalyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return merge(common, {
        mode: 'production',
        plugins: plugins,
    });
};
