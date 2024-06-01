const eleventyVue = require("@11ty/eleventy-plugin-vue");
const svgContents = require("eleventy-plugin-svg-contents");
const imageShortcode = require("./src/utils/image.js");

module.exports = function (config) {
    config.addPlugin(eleventyVue, {
        rollupPluginVueOptions: {
            style: {
                postcssPlugins: [
                    require("postcss-import"),
                    require("postcss-mixins"),
                    require("postcss-nested"),
                    require("postcss-custom-units"),
                    require("postcss-round-float"),
                ],
            },
        },
    });

    config.addPlugin(svgContents);

    config.addTransform("htmlmin", require("./src/utils/htmlmin.js"));

    config.addPassthroughCopy({ "./src/assets/": "/" });

    config.addJavaScriptFunction("image", imageShortcode);

    return {
        dir: {
            input: "src/",
            data: "_data",
            includes: "_includes",
            output: "dist",
        },
    };
};
