const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

require("dotenv").config();
const stripDirs = require("strip-dirs");

const basePath = process.cwd();
const srcPath = "src";
const outputPath = "dist";
const fontRegex = /\.(woff|woff2|eot|ttf|otf)$/;
const minifyOptions = {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
};

const pages = glob
    .sync("**/*.handlebars", {
        cwd: path.join(basePath, srcPath, "pages/"),
        root: "/",
    })
    .map(
        page =>
            new HtmlWebpackPlugin({
                filename: stripDirs(page.replace("handlebars", "html"), 2),
                template: `${srcPath}/pages/${page}`,
                path: path.resolve(__dirname, outputPath),
                minify: minifyOptions,
                chunks: ["landing"],
            }),
    );

const markdownPages = glob
    .sync("**/*.md", {
        cwd: path.join(basePath, srcPath, "pages/"),
        root: "/",
    })
    .map(
        page =>
            new HtmlWebpackPlugin({
                filename: page.replace(/\w*.md$/, "index.html"),
                template: `${srcPath}/components/markdown-base/markdown-base.handlebars`,
                path: path.resolve(__dirname, outputPath),
                minify: minifyOptions,
                chunks: ["content"],
            }),
    );

const partialDirs = glob.sync("**/", {
    cwd: path.resolve(__dirname, srcPath, "components"),
    realpath: true,
});

module.exports = {
    entry: {
        landing: `./${srcPath}/landing.ts`,
        content: `./${srcPath}/content.ts`,
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
                            helperDirs: path.resolve(`${srcPath}/helpers/`),
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
        path: `${basePath}/${outputPath}`,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            handlebars: "handlebars/dist/handlebars.js",
        },
    },
    plugins: [
        ...pages,
        ...markdownPages,
        new FaviconsWebpackPlugin({
            logo: `./${srcPath}/assets/images/favicon.png`,
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
                from: `./${srcPath}/assets/static/*.*`,
                flatten: true,
            },
        ]),
    ],
};
