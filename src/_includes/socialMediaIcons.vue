<template>
    <ul class="social-media-icons space-12base">
        <li class="social-media-icons__icon">
            <a href="https://codepen.io/Ansimorph/">
                <template
                    v-html="svgContents('/src/assets/images/icon-codepen.svg')"
                ></template>
                <span class="visually-hidden">Codepen</span>
            </a>
        </li>
        <li class="social-media-icons__icon">
            <a href="https://github.com/Ansimorph/">
                <template
                    v-html="svgContents('/src/assets/images/icon-github.svg')"
                ></template>
                <span class="visually-hidden">Github</span>
            </a>
        </li>
        <li class="social-media-icons__icon">
            <a href="https://front-end.social/@Ansimorph" rel="me">
                <template
                    v-html="svgContents('/src/assets/images/icon-mastodon.svg')"
                ></template>
                <span class="visually-hidden">Mastodon</span>
            </a>
        </li>
    </ul>
</template>

<style>
@import "../css/variables.css";
@import "../css/mixins.css";

.social-media-icons {
    display: flex;
    justify-content: center;

    @mixin breakpoint-m {
        justify-content: flex-start;
    }
}

.social-media-icons__icon {
    &:not(:last-child) {
        margin-right: 6base;
    }

    svg {
        fill: currentColor;
        width: 8base;
        height: 8base;
    }
}
</style>
