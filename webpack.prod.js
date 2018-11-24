const CleanWebpackPlugin = require("clean-webpack-plugin");
const Critters = require("critters-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge.strategy({
    "module.rules": "prepend",
})(common, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader],
            },
        ],
    },
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new MiniCssExtractPlugin(),
        new Critters({ preloadFonts: true, compress: false }),
    ],
});

process.env.NODE_ENV = "production";
