const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: "[name].[hash:5].js",
        chunkFilename: "[name].[contenthash:5].js",
        publicPath: 'http://localhost:3000/dist/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        https: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/api': 'http://localhost:8080'
        },
        open: 'http://localhost:3000/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            'react-hot-loader/babel'
                        ]
                    }
                },
                {
                    loader: 'eslint-loader'
                }
            ]
        }, ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});