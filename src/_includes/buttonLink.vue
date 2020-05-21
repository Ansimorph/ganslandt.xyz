<template>
    <a class="button-link" :href="href">{{ text }}</a>
</template>

<script>
export default {
    props: ["href", "text"],
};
</script>

<style>
@import "../css/variables.css";
@import "../css/mixins.css";

.button-link {
    display: inline-block;
    font-size: 6base;
    font-family: var(--sans-family);
    line-height: 1;
    padding: 3base 5base;
    background-color: var(--blue);
    color: var(--white);
    text-decoration: none;
    border-radius: 0.5base;
    transition: background-color 0.2s ease-in-out;

    &:focus {
        @mixin focus-style;
    }

    &:hover {
        color: var(--white);
        background-color: color(var(--blue) lightness(50%));
    }

    &:active {
        background-color: color(var(--blue) lightness(40%));
        outline: 0;
    }
}
</style>
