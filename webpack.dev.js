const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge.strategy({
    "module.rules": "prepend",
})(common, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader"],
            },
        ],
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: `/dist`,
        hot: true,
        open: true,
        watchContentBase: true,
        host: "0.0.0.0",
        inline: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
