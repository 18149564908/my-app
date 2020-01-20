const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'production',
    entry: {
        vendor: [
            'react',
            // 'react-container-query',
            // 'react-document-title',
            'react-dom',
            // 'react-redux',
            // 'react-router-dom',
            // 'redux',
            // 'whatwg-fetch',
            // 'classnames',
            // 'enquire-js',
            // 'es6-promise',
            // 'good-storage',
            // 'nprogress',
            // 'numeral',
            // 'path-to-regexp',
        ],
    },
    output: {
        filename: '[name].[contenthash:8].chunk.js',
        path: resolve('./vendor'),
        library: '[name]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: '[name]',
            path: resolve('./vendor/[name].manifest.json')
        })
    ]
}
