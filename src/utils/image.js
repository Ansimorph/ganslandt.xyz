const Image = require("@11ty/eleventy-img");

module.exports = function imageShortcode(src, alt, sizes) {
    let options = {
        widths: [360, 540, 860, 1024, 1280],
        formats: ["avif", "webp", "jpeg"],
        outputDir: "./dist/images/",
        urlPath: "/images/",
        sharpWebpOptions: {
            quality: 75,
        },
        sharpAvifOptions: {
            quality: 40,
            speed: 3,
        },
    };

    // generate images, while this is async we don’t wait
    Image(src, options);

    let imageAttributes = {
        alt,
        sizes,
        decoding: "async",
    };
    // get metadata even the images are not fully generated
    metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
};
