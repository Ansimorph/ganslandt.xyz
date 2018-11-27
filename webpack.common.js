const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

require("dotenv").config();
const stripDirs = require("strip-dirs");

const basePath = process.cwd();
const fontRegex = /\.(woff|woff2|eot|ttf|otf)$/;

const pages = glob
    .sync("**/*.js", {
        cwd: path.join(basePath, "app/pages/"),
        root: "/",
    })
    .map(
        page =>
            new HtmlWebpackPlugin({
                filename: "index.html",
                page,
                title: `Björn Ganslandt is a freelance
                frontend web developer`,
                template: "app/layouts/app.ejs",
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                },
            }),
    );

module.exports = {
    entry: {
        app: ["./app/landing.ts"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["css-loader", "postcss-loader"],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: ["responsive-loader"],
            },
            {
                test: /\.(svg)$/,
                loader: ["svg-inline-loader"],
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
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        ...pages,
        new FaviconsWebpackPlugin({
            logo: "./app/assets/images/favicon.png",
            persistentCache: true,
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: true,
                twitter: false,
                yandex: false,
                windows: false,
            },
        }),
    ],
};
