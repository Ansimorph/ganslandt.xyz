const HtmlWebpackPlugin = require("html-webpack-plugin");
const minifyOptions = require("./htmlminify.config");
const glob = require("glob");
const path = require("path");

function addPageOptions(path, htmlOptions, options) {
    let pageOptions = {};

    // Read options from json file
    try {
        pageOptions = require(path);
    } catch (e) {
        console.log(`No json settings found in: ${path}. Using Defaults.`);
    }

    // Adjust Title
    if (pageOptions.title === "" || pageOptions.title === undefined) {
        pageOptions.title = options.baseTitle;
    } else {
        pageOptions.title += ` | ${options.baseTitle}`;
    }

    return Object.assign(htmlOptions, pageOptions);
}

module.exports = function generateMarkdownPages(options) {
    const pagePath = path.join(options.basePath, options.srcPath, "pages/");

    return glob
        .sync("**/*.md", {
            cwd: pagePath,
            root: "/",
        })
        .map(page => {
            let htmlOptions = {
                filename: page.replace(/\w*.md$/, "index.html"),
                template: `${
                    options.srcPath
                }/components/markdown-base/markdown-base.handlebars`,
                path: path.resolve(__dirname, options.outputPath),
                minify: minifyOptions,
                page: page,
                chunks: ["content"],
            };

            htmlOptions = addPageOptions(
                path.resolve(pagePath, page.replace(".md", ".json")),
                htmlOptions,
                options,
            );

            return new HtmlWebpackPlugin(htmlOptions);
        });
};
