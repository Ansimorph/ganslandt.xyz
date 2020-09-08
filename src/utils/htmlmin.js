const htmlmin = require("html-minifier");

module.exports = function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true,
            sortClassName: true,
            sortAttributes: true,
            html5: true,
            decodeEntities: true,
            minifyCSS: {
                level: 2,
            },
        });
        return minified;
    }
    return content;
};
