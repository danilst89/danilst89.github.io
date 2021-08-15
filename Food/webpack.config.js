<<<<<<< HEAD
'use strict';

let path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/script.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/js'
    },
    watch: true,

    devtool: "source-map",

    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]
                    ]
                }
            }
        }]
    }
=======
'use strict';

let path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/script.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/js'
    },
    watch: true,

    devtool: "source-map",

    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]
                    ]
                }
            }
        }]
    }
>>>>>>> 0832ea9b5529a42b2045a6278e9c214a76d7cccf
};