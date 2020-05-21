<template>
    <div>
        <main>
            <landingHero></landingHero>
            <articles></articles>
        </main>
        <footerElement></footerElement>
    </div>
</template>

<script>
import landingHero from "./_includes/landingHero.vue";
import articles from "./_includes/articles.vue";
import footerElement from "./_includes/footerElement.vue";

export default {
    data: () => {
        return {
            layout: "layout.njk",
            title: "Björn Ganslandt: freelance frontend web developer",
        };
    },
    components: {
        landingHero,
        articles,
        footerElement,
    },
};
</script>

<style>
@import "./css/reset.css";
@import "./css/base.css";
@import "./css/typography.css";
@import "./css/utilities.css";

@import "./css/variables.css";
@import "./css/mixins.css";

@font-face {
    font-family: "Plex-Sans";
    src: url("/fonts/IBMPlexSans-Regular-Latin1.woff2") format("woff2"),
        url("/fonts/IBMPlexSans-Regular-Latin1.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--dark-grey);
    color: var(--white);
    overflow-x: hidden;
}

main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
}
</style>
