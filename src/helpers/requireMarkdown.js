const Handlebars = require("handlebars");

module.exports = function(src) {
    /* Adding .md to the string is necessary so that require does not pick up
    files it can't handle. See https://github.com/webpack/docs/wiki/context */
    srcWithoutExtension = src.replace(".md", "");
    return new Handlebars.SafeString(
        require(`../pages/${srcWithoutExtension}.md`),
    );
};
