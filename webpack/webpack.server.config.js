const path = require('path')
module.exports = {
    entry: './source/server.jsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../built/server'),
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['latest-minimal', 'react']
                }
            }
        ]
    },
    target: 'node',
}