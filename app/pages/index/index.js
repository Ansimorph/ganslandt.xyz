const responsiveImage = require("../../assets/images/bjoern.jpg?min=320,max=600");
const landingHeadline = require("../../components/landing-headline/landing-headline.js");
const socialMediaIcons = require("../../components/social-media-icons/social-media-icons.js");

const page = /*html*/ `
<main>
    <img
        src="${responsiveImage.src}"
        srcset="${responsiveImage.srcSet}"
    />
    <div class="container">
        ${landingHeadline}
        ${socialMediaIcons}
    </div>
</main>
`;

module.exports = page;
