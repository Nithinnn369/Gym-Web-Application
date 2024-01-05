function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
}

const scrollRevealOption = {
    distance: "50px",
    origin: "top",
    duration: 1000,
};

ScrollReveal().reveal(".firstImage", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".heading1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".heading2", {
    ...scrollRevealOption,
    delay: 800,
});

ScrollReveal().reveal(".description1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".joinButton", {
    ...scrollRevealOption,
    delay: 1200,
});
