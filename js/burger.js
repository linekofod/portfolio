// Konstanter for burgermenuen
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

// Når der klikkes på burgerikonet - gå til funktionen burgerMenu
burger.addEventListener("click", burgerMenu);

// Indholdet i burgermenuen vises og der bliver oprettet klassen "active"
// "active" klassen gør, at nav nu er åben, og kan styles i media query i css
function burgerMenu() {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
}

// Når der klikkes på krydsikonet eller et link i nav - gå til funktionen closeMenu
links.forEach((link) => link.addEventListener("click", closeMenu));

// Klassen "active" bliver fjernet, så menuen forsvinder
function closeMenu() {
    burger.classList.remove("active");
    nav.classList.remove("active");
}
