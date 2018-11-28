const Handlebars = require("handlebars");

module.exports = function(src) {
    const image = require(`../assets/images/${src}?min=320,max=600`);
    return new Handlebars.SafeString(`src="${image}" srcset="${image.srcSet}"`);
};
