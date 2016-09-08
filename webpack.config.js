var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        lab02: ['./wwwroot/js/lab02.js'],
        lab03: ['./wwwroot/js/lab03.js'],
        lab04: ['./wwwroot/js/lab04.js'],
        lab05: ['./wwwroot/js/lab05.js'],
        lab06_01: ['./wwwroot/js/lab06_01.js'],
        lab06_02: ['./wwwroot/js/lab06_02.js'],
        lab07: ['./wwwroot/js/lab07.js'],
        lab08: ['./wwwroot/js/lab08.js'],
        lab09: ['babel-polyfill', './wwwroot/js/lab09.js'],
        lab10: ['babel-polyfill', './wwwroot/js/lab10.js'],
        lab11: ['babel-polyfill', './wwwroot/js/lab11.js'],
        lab12: ['babel-polyfill', './wwwroot/js/lab12.js'],
        lab13: ['babel-polyfill', './wwwroot/js/lab13.js']
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/js'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    stats: {
        colors: true
    }
    , devtool: 'source-map'
};


