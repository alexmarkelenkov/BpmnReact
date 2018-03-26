const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app/client.jsx",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["env", "react"]
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
}