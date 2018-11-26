const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

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
                test: /\.(njk|nunjucks)$/,
                loader: [
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src", "source:srcset"],
                            interpolate: true,
                        },
                    },
                    {
                        loader: "nunjucks-html-loader",
                        options: nunjucksOptions,
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: ["responsive-loader"],
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
