const iconCodepen = require("../../assets/images/icon-codepen.svg");
const iconGithub = require("../../assets/images/icon-github.svg");
const iconTwitter = require("../../assets/images/icon-twitter.svg");

const page = /*html*/ `
<ul class="social-media-icons">
    <li>
        <a
            href="https://codepen.io/Ansimorph/"
            class="social-media-icons__icon"
        >
            ${iconCodepen}
        </a>
    </li>
    <li>
        <a
            href="https://github.com/Ansimorph/"
            class="social-media-icons__icon"
        >
            ${iconGithub}
        </a>
    </li>
    <li>
        <a
            href="https://twitter.com/Ansimorph/"
            class="social-media-icons__icon"
        >
            ${iconTwitter}
        </a>
    </li>
</ul>
`;

module.exports = page;
