<template>
    <div class="container">
        <div class="landing-hero">
            <div class="landing-hero__image">
                <responsiveImage
                    src="../../src/assets/images/bjoern.jpg"
                    alt="Björn Ganslandt"
                    sizes="(min-width: 45em) 50vw, 100vw"
                ></responsiveImage>
            </div>
            <div class="landing-hero__text">
                <div class="space-12base">
                    <landingHeadline></landingHeadline>
                </div>
                <div class="space-12base">
                    <buttonLink
                        text="contact me"
                        href="mailto:hi@ganslandt.xyz"
                    ></buttonLink>
                </div>
                <socialMediaIcons></socialMediaIcons>
            </div>
        </div>
    </div>
</template>

<script>
import landingHeadline from "./landingHeadline.vue";
import buttonLink from "./buttonLink.vue";
import socialMediaIcons from "./socialMediaIcons.vue";
import responsiveImage from "./responsiveImage.vue";

export default {
    components: {
        landingHeadline,
        buttonLink,
        socialMediaIcons,
        responsiveImage,
    },
};
</script>

<style>
@import "../css/variables.css";
@import "../css/mixins.css";

.landing-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4base;
    padding-bottom: 4base;

    @mixin breakpoint-m {
        margin-top: 15base;
        flex-direction: row;
        align-items: flex-start;
    }
}

.landing-hero__image {
    /* Has fixed aspect ratio to prevent reflow on load */
    --hero-aspect-ratio: calc(358 / 432);

    position: relative;
    z-index: -1;
    opacity: 0.9;
    width: 100vw;
    max-width: 130base;
    height: calc(100vw * var(--hero-aspect-ratio));
    max-height: calc(130base * var(--hero-aspect-ratio));
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20540%20448%22%3E%3Cfilter%20id%3D%22prefix__a%22%3E%3CfeGaussianBlur%20stdDeviation%3D%2212%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23343434%22%2F%3E%3Cg%20fill-opacity%3D%22.5%22%20filter%3D%22url%28%23prefix__a%29%22%3E%3Ccircle%20r%3D%221%22%20fill%3D%22%23d6dad9%22%20transform%3D%22rotate%28103.5%2034.7%20204.2%29%20scale%28157.44923%2076.77429%29%22%2F%3E%3Cpath%20fill%3D%22%23b6b9b7%22%20d%3D%22M142.4%20197.2h232v54.9h-232z%22%2F%3E%3Ccircle%20r%3D%221%22%20fill%3D%22%23f1f2f1%22%20transform%3D%22rotate%2817%20-298.4%20980.5%29%20scale%2831.33039%2070.02642%29%22%2F%3E%3Ccircle%20r%3D%221%22%20fill%3D%22%23171a1b%22%20transform%3D%22matrix%28-22.5917%2057.23128%20-24.38782%20-9.62694%20201.2%20141%29%22%2F%3E%3Ccircle%20r%3D%221%22%20fill%3D%22%236e7170%22%20transform%3D%22matrix%2835.32537%20-32.79714%2073.66681%2079.34556%20209.7%20311%29%22%2F%3E%3Cpath%20fill%3D%22%231c1f21%22%20d%3D%22M284.6%20166.6l15.4%201.1%2013.2-84.6%2078%20150.2z%22%2F%3E%3Cpath%20fill%3D%22%233e4244%22%20d%3D%22M124.7%20311.6l64.7%2087.3%20114.6%209-85.3-83.5z%22%2F%3E%3Cpath%20fill%3D%22%23acadac%22%20d%3D%22M247.9%20296.4l-116-42.2%20225.6-57z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A");
    background-size: contain;

    @mixin breakpoint-m {
        width: 60%;
        height: auto;
        max-width: initial;
        max-height: initial;
    }

    /* Radial Gradient to mask edges */
    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-image: radial-gradient(
            rgba(var(--dark-grey), 0) 50%,
            var(--dark-grey)
        );
    }

    img {
        height: auto;
    }
}

.landing-hero__text {
    text-align: center;
    max-width: 100base;

    @mixin breakpoint-m {
        text-align: left;
        margin-top: 14base;
        width: 40%;
    }

    @mixin breakpoint-l {
        margin-top: 20base;
    }
}
</style>
