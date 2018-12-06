const HtmlWebpackPlugin = require("html-webpack-plugin");
const minifyOptions = require("./htmlminify.config");
const glob = require("glob");
const path = require("path");

module.exports = function generateMarkdownPages(options) {
    return glob
        .sync("**/*.md", {
            cwd: path.join(options.basePath, options.srcPath, "pages/"),
            root: "/",
        })
        .map(
            page =>
                new HtmlWebpackPlugin({
                    filename: page.replace(/\w*.md$/, "index.html"),
                    template: `${
                        options.srcPath
                    }/components/markdown-base/markdown-base.handlebars`,
                    path: path.resolve(__dirname, options.outputPath),
                    minify: minifyOptions,
                    page: page,
                    chunks: ["content"],
                }),
        );
};
