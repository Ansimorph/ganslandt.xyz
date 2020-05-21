<template>
    <header class="header">
        <div class="container">
            <a class="header__title" href="/">Björn Ganslandt</a>
        </div>
    </header>
</template>

<style>
@import "../css/variables.css";
@import "../css/mixins.css";

.header {
    background-color: var(--dark-grey);
    color: var(--white);
    padding: 3base 0;
}

.header__title {
    font-size: 7base;
    font-weight: 700;
    font-family: var(--headline-family);
    text-decoration: none;
}
</style>
