const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const navList = document.querySelector(".nav-list");


navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
})
navList.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
})

const emailIcon = document.getElementById("email-icon");
emailIcon.addEventListener("click", function() {
    navigator.clipboard.writeText("info@zuzana-n.cz");
});

const phoneIcon = document.getElementById("phone-icon");
phoneIcon.addEventListener("click", function() {
    navigator.clipboard.writeText("+420604828515");
});