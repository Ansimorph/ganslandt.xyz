<template>
    <div class="container">
        <div class="landing-hero">
            <div
                class="landing-hero__image"
                v-html="
                    image(
                        'src/assets/images/bjoern.jpg',
                        'Björn Ganslandt',
                        '(min-width: 45em) 50vw, 100vw',
                    )
                "
            ></div>
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

export default {
    components: {
        landingHeadline,
        buttonLink,
        socialMediaIcons,
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
    position: relative;
    z-index: -1;
    opacity: 0.9;
    width: 100vw;
    max-width: 130base;
    aspect-ratio: 520/431;

    @mixin breakpoint-m {
        width: 60%;
        height: auto;
        max-width: initial;
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
