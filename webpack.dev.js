const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge.strategy({
    "module.rules": "prepend",
})(common, {
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ["isomorphic-style-loader"],
    //         },
    //     ],
    // },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: `/dist`,
        hot: true,
        open: true,
        watchContentBase: true,
    },
});
