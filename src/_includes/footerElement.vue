<template>
    <footer>
        <ul class="footer">
            <li class="footer__entry">
                <a class="footer__link" href="/imprint/">Imprint & Legal</a>
            </li>
            <li class="footer__entry">
                <a class="footer__link" href="mailto:hi@ganslandt.xyz"
                    >hi@ganslandt.xyz</a
                >
            </li>
        </ul>
    </footer>
</template>

<style>
@import "../css/variables.css";
@import "../css/mixins.css";

.footer {
    display: flex;
    justify-content: center;
    padding: 12base 0;
    background-color: var(--white);
    color: var(--dark-grey);
    font-family: var(--sans-family);
    font-size: 4base;
}

.footer__entry {
    display: flex;

    &:not(:last-child) {
        &::after {
            display: block;
            opacity: 0.7;
            margin: 0 2base;
            content: "|";
        }
    }
}

.footer__link {
    opacity: 0.7;
    text-decoration: none;

    &:hover {
        opacity: 1;
    }
}
</style>
