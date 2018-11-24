const target = document.querySelector(".js-landing-headline");
const source = document.querySelector(".js-landing-select");

source.addEventListener("change", event => {
    target.textContent = event.target.value;
});
