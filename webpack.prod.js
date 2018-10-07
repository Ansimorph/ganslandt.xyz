const CleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    plugins: [new CleanWebpackPlugin(["dist"])],
});

process.env.NODE_ENV = "production";
