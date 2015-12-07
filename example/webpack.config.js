var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    debug: true,
    entry:  [
        'webpack-hot-middleware/client?path=/__webpack_hmr',
        './main.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'http://localhost:8081/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [
                    "style",
                    "css",
                    require.resolve("../index.js")
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    Sassport: {
        modules: [
            require('./theme')
        ]
    }
}
