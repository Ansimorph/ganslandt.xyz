<template>
    <h1>
        Björn Ganslandt is a frontend developer who loves
        <span class="landing-headline-select">
            <span class="js-landing-headline">design</span>
            <select
                aria-label="Select interest"
                id="interests"
                class="landing-headline-select__input js-landing-select"
            >
                <option v-for="interest in interests" :key="interest">
                    {{ interest }}
                </option>
            </select>
        </span>
    </h1>
</template>

<script>
// TODO: This is horrible, find a better way to reference file
const interestList = require("../../src/_data/interests.json");

export default {
    data: () => {
        return {
            interests: interestList,
        };
    },
};
</script>

<style>
@import "../css/variables.css";
@import "../css/mixins.css";

.landing-headline-select {
    --dropdown-caret-size: 2base;

    display: inline-block;
    position: relative;
    padding-right: calc(var(--dropdown-caret-size) * 2 + 1base);
    text-decoration: underline;

    &:focus-within {
        @mixin focus-style;
    }

    &:hover {
        color: var(--blue);
    }

    &::after {
        pointer-events: none;
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border-left: var(--dropdown-caret-size) solid transparent;
        border-right: var(--dropdown-caret-size) solid transparent;
        border-top: var(--dropdown-caret-size) solid currentColor;
    }
}

.landing-headline-select__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    appearance: none;
    background: none;
    border: 0;
    opacity: 0;
    cursor: pointer;

    &::-ms-expand {
        display: none;
    }
}
</style>
