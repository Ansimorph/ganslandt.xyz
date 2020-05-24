<template>
    <picture>
        <source
            type="image/webp"
            :srcset="getSourceSet('webp')"
            :sizes="sizes"
        />
        <source :srcset="getSourceSet('jpg')" :sizes="sizes" />
        <img :src="getFileName(this.smallestSize, 'jpg')" :alt="alt" />
    </picture>
</template>

<script>
import { promises as fs } from "fs";
import SrcsetGenerator from "@flexis/srcset";
import Vinyl from "vinyl";
import path from "path";
import mozJpegPlugin from "imagemin-mozjpeg";
import webpPlugin from "imagemin-webp";

async function generateImages(src, sizeArray, baseName) {
    const filePath = path.join(__dirname, src);
    const contents = await fs.readFile(filePath);
    const source = new Vinyl({
        filePath,
        contents,
    });

    const optimization = {
        webp: webpPlugin({
            quality: 75,
        }),
        jpg: mozJpegPlugin({
            quality: 80,
        }),
    };

    const srcset = new SrcsetGenerator({ optimization });
    const images = srcset.generate(source, {
        width: sizeArray,
        format: ["jpg", "webp"],
    });

    for await (const image of images) {
        await fs.writeFile(
            path.join(
                __dirname,
                "../../dist/images/",
                image.path.replace("file", baseName),
            ),
            image.contents,
        );
    }
}

export default {
    data: () => {
        return {
            sizeArray: [1280, 1024, 860, 540, 360],
        };
    },
    created: function() {
        generateImages(this.src, this.sizeArray, this.baseName);
    },
    computed: {
        baseName: function() {
            return this.src.match(/([^\\\/]+)$/)[0].split(".")[0];
        },
        smallestSize: function() {
            return Math.min(...this.sizeArray);
        },
    },
    methods: {
        getSourceSet: function(filetype) {
            let output = "";
            this.sizeArray.forEach(size => {
                output += `${this.getFileName(size, filetype)} ${size}w,`;
            });
            return output;
        },
        getFileName: function(size, filetype) {
            return `/images/${this.baseName}@${size}w.${filetype}`;
        },
    },
    props: ["src", "alt", "sizes"],
};
</script>
