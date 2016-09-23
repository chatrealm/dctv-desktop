var path = require('path')

module.exports = {
    entry: {
        app: './app/src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'app/build'),
        publicPath: 'http://localhost:8080/build/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    target: 'electron'
}