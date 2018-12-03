const Handlebars = require("handlebars");

module.exports = function(src) {
    return new Handlebars.SafeString(require(`../pages/${src}`));
};
