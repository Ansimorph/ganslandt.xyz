const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const generateMarkdownPages = require("./generateMarkdownPages");

require("dotenv").config();

const options = {
    basePath: process.cwd("../"),
    baseTitle: "Björn Ganslandt is a freelance frontend web developer",
    srcPath: "src",
    outputPath: "dist",
    fontRegex: /\.(woff|woff2|eot|ttf|otf)$/,
};

const minifyOptions = require("./htmlminify.config");
const markdownPages = generateMarkdownPages(options);
const partialDirs = glob.sync("**/", {
    cwd: path.resolve(__dirname, options.srcPath, "components"),
    realpath: true,
});

module.exports = {
    entry: {
        landing: `./${options.srcPath}/landing.ts`,
        content: `./${options.srcPath}/content.ts`,
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
                test: /\.handlebars$/,
                use: [
                    {
                        loader: "handlebars-loader",
                        options: {
                            partialDirs: partialDirs,
                            helperDirs: path.resolve(
                                `${options.srcPath}/helpers/`,
                            ),
                            inlineRequires: /\/assets\/(:?images|audio|video)\//gi,
                        },
                    },
                    "markup-inline-loader",
                ],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "markdown-loader",
                        options: {},
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: ["responsive-loader"],
            },
            {
                test: /\.(svg)$/,
                loader: ["file-loader"],
            },
            {
                test: options.fontRegex,
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
        path: `${options.basePath}/${options.outputPath}`,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            handlebars: "handlebars/dist/handlebars.js",
        },
    },
    plugins: [
        ...markdownPages,
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: options.baseTitle,
            template: `${options.srcPath}/pages/index/index.handlebars`,
            path: path.resolve(__dirname, options.outputPath),
            minify: minifyOptions,
            chunks: ["landing"],
        }),
        new FaviconsWebpackPlugin({
            logo: `./${options.srcPath}/assets/images/favicon.png`,
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
        new CopyWebpackPlugin([
            {
                from: `./${options.srcPath}/assets/static/*.*`,
                flatten: true,
            },
        ]),
    ],
};
