const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin")
    .default;
const PreloadWebpackPlugin = require("preload-webpack-plugin");

require("dotenv").config();

const basePath = process.cwd();
const fontRegex = /\.(woff|woff2|eot|ttf|otf)$/;

const nunjucksOptions = JSON.stringify({
    searchPaths: `${basePath}/app/`,
});

const pages = glob
    .sync("**/*.njk", {
        cwd: path.join(basePath, "app/pages/"),
        root: "/",
    })
    .map(
        page =>
            new HtmlWebpackPlugin({
                filename: page.replace("njk", "html"),
                template: `app/pages/${page}`,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                },
            }),
    );

module.exports = {
    entry: {
        app: ["./app/landing.js"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitError: true,
                    emitWarning: true,
                },
                enforce: "pre",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                ],
            },
            {
                test: /\.(njk|nunjucks)$/,
                loader: [
                    "html-loader",
                    `nunjucks-html-loader?${nunjucksOptions}`,
                ],
            },
            {
                test: /\.(jpe?g|png|svg|gif)$/,
                loader: "file-loader",
                options: { name: "[name].[ext]" },
            },
            {
                test: fontRegex,
                loader: "file-loader",
                options: { name: "[name].[ext]" },
            },
            {
                test: /\.(cast5)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: { name: "[name]" },
                    },
                    {
                        loader: "decryption-loader",
                        options: { password: process.env.PASSWORD },
                    },
                ],
            },
        ],
    },
    output: {
        path: `${basePath}/dist`,
        filename: "assets/js/bundle.js",
    },
    plugins: [
        ...pages,
        new MiniCssExtractPlugin(),
        new HTMLInlineCSSWebpackPlugin(),
        new PreloadWebpackPlugin({
            rel: "preload",
            include: "allAssets",
            fileWhitelist: [fontRegex],
            as(entry) {
                if (/\.css$/.test(entry)) return "style";
                if (fontRegex.test(entry)) return "font";
                if (/\.png$/.test(entry)) return "image";
                return "script";
            },
        }),
    ],
    devServer: {
        contentBase: `${basePath}/app`,
        hot: true,
        open: true,
        watchContentBase: true,
    },
};
