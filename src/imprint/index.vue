<template>
    <div>
        <headerElement></headerElement>
        <div class="container">
            <main>
                <h1 id="imprint-legal-information">
                    Imprint &amp; legal information
                </h1>
                <p>
                    Björn Ganslandt<br />
                    Dadlergasse 18/6<br />
                    1150 Vienna
                </p>
                <p><a href="mailto:hi@ganslandt.xyz">hi@ganslandt.xyz</a></p>
                <p>
                    Informationspflicht gemäß<br />
                    §5 E-Commerce Gesetz,<br />
                    §14 Unternehmensgesetzbuch bzw.<br />
                    §63 Gewerbeordnung und <br />
                    §25 Mediengesetz Offenlegungspflicht:
                </p>
                <p>
                    <a
                        href="https://firmen.wko.at/Web/DetailsKontakt.aspx?FirmaID=125bfdb6-c3a8-48e6-862f-97788f04e584"
                        >WKO registry entry</a
                    >
                </p>
                <h2 id="privacy">Privacy</h2>
                <p>
                    This page does not set cookies or use tracking to analyze
                    your behavior.
                </p>
            </main>
        </div>
    </div>
</template>

<script>
import headerElement from "../_includes/headerElement.vue";

export default {
    data: () => {
        return {
            layout: "layout.njk",
            title: "Imprint",
        };
    },
    components: {
        headerElement,
    },
};
</script>

<style>
@import "../css/reset.css";
@import "../css/base.css";
@import "../css/typography.css";
@import "../css/utilities.css";

@import "../css/variables.css";
@import "../css/mixins.css";

@font-face {
    font-family: "Plex-Serif";
    src: url("/fonts/IBMPlexSerif-Regular-Latin1-subset.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
}

@font-face {
    font-family: "Plex-Serif";
    src: url("/fonts/IBMPlexSerif-Italic-Latin1-subset.woff2") format("woff2");
    font-weight: 300;
    font-style: italic;
    font-stretch: normal;
    font-display: swap;
}

main {
    font-size: 4.5base;
    font-family: "Plex-Serif", serif;
    line-height: 7base;
    padding-top: 8base;
    padding-bottom: 8base;
    max-width: 60ch;
}

h1,
h2,
p {
    margin-bottom: 4base;
}

p {
    & + h2 {
        margin-top: 14base;
    }
}
</style>
