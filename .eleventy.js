import svgContents from "eleventy-plugin-svg-contents";
import htmlnano from "htmlnano";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import postcssMixins from "postcss-mixins";
import postcssCustomUnit from "postcss-custom-unit";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import postcss from "postcss";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    bundlePluginOptions: {
      transforms: [
        async function (content) {
          let { type, page } = this;
          let result = await postcss([
            postcssMixins,
            postcssCustomUnit({
              units: [
                {
                  from: "base",
                  convert: (val) => Math.round(val * 4) / 10 + "rem",
                },
              ],
            }),
          ]).process(content, { from: page.inputPath, to: null });

          return result.css;
        },
      ],
    },
  });

  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addTransform("htmlnano", async (content, outputPath) => {
    if (!outputPath.endsWith("html")) return content;

    const result = await htmlnano.process(content);
    return result.html;
  });

  eleventyConfig.addPassthroughCopy({ "./src/assets/": "/" });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
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
    defaultAttributes: {
      decoding: "async",
    },
  });

  return {
    dir: {
      input: "src/",
      data: "_data",
      output: "dist",
    },
  };
}
