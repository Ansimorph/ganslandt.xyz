const page = /*html*/ `
<h1 class="landing-headline">
    Björn Ganslandt is a frontend developer who loves
    <span class="landing-headline__select-wrapper">
        <span for="interests" class="js-landing-headline">design</span>
        <label class="visually-hidden" for="interests">Select interest</label>
        <select
            id="interests"
            class="landing-headline__select js-landing-select"
        >
            <option>design</option>
            <option>CSS</option>
            <option>design systems</option>
            <option>Vue</option>
            <option>HTML</option>
            <option>to hear from you</option>
        </select>
    </span>
</h1>
`;
module.exports = page;
