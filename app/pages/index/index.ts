const responsiveImage = require("../../assets/images/bjoern.jpg?min=320,max=600");

import landingHeadline from "../../components/landing-headline/landing-headline";
import socialMediaIcons from "../../components/social-media-icons/social-media-icons";

export default /*html*/ `
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
