<template>
    <section class="articles-section">
        <div class="container">
            <h2 class="articles-section__headline">Sideprojects & Articles</h2>
            <div class="articles">
                <article
                    class="articles__entry"
                    v-for="article in articles"
                    :key="article.title"
                >
                    <h3 class="articles__title">{{ article.title }}</h3>
                    <p class="articles__description">
                        {{ article.description }}
                    </p>
                    <a class="articles__link" :href="article.url">
                        <template v-if="article.slides"
                            >See the slides</template
                        >
                        <template v-else>Read all about it</template>
                    </a>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            articles: [
                {
                    slides: true,
                    title: "Aligning design & development",
                    description:
                        "How better communication between designers & developers will improve your product.",
                    url: "https://aligning.netlify.com/",
                },
                {
                    slides: true,
                    title: "Space Jam!",
                    description: "Writing HTML like it's 1996.",
                    url: "http://space-jam-presentation.surge.sh/index.htm",
                },
                {
                    slides: false,
                    title: "Wenn Pattern Libraries wachsen",
                    description:
                        "Wie man Verantwortung und Code für Patterns im Unternehmen verteilt.",
                    url:
                        "https://www.produktbezogen.de/wenn-pattern-libraries-wachsen-verantwortung/",
                },
                {
                    slides: false,
                    title: "Nudelholz ",
                    description: "A synthesizer for your browser",
                    url: "https://nudelholz.netlify.com",
                },
            ],
        };
    },
};
</script>

<style>
@import "../css/variables.css";
@import "../css/mixins.css";

.articles-section {
    padding: 12base 0;
    color: var(--dark-grey);
    background-color: color(var(--dark-grey) lightness(92%));
}

.articles-section__headline {
    display: block;
    margin-bottom: 12base;
    text-align: center;
}

.articles {
    display: grid;
    grid-gap: 8base;

    @mixin breakpoint-m {
        grid-template-columns: repeat(auto-fit, minmax(100base, 1fr));
    }
}

.articles__entry {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 8base;
    font-size: 4.5base;
    line-height: 6base;
    background-color: var(--white);
}

.articles__title,
.articles__description {
    margin-bottom: 5base;
    max-width: 150base;
}

.articles__description {
    flex: 1;
}

.articles__link {
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
