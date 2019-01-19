export default class LandingHeadline {
    private target: HTMLElement;
    private source: HTMLElement;

    constructor() {
        this.target = document.querySelector(".js-landing-headline");
        this.source = document.querySelector(".js-landing-select");
    }

    run() {
        this.source.addEventListener("change", (event: Event) => {
            this.target.textContent = (<HTMLSelectElement>event.target).value;
        });
    }
}
