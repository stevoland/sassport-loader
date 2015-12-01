var extractText = require("extract-text-webpack-plugin");
var extractor = new extractText("style","[name].css");
module.exports = {
    entry: "./main.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: extractor.extract(
                    "style",
                    [
                        "css",
                        require.resolve("../index.js")
                    ].join("!")
                )
            }
        ]
    },
    plugins: [extractor]
}
