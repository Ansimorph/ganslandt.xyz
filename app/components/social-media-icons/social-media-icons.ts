import iconCodepen from "../../assets/images/icon-codepen.svg";
import iconGithub from "../../assets/images/icon-github.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";

export default /*html*/ `
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
