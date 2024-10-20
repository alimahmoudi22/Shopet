// **mobile menu**
const headerBtn = document.querySelector(".header__menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileBtn = document.querySelector(".mobile__logo svg");

headerBtn.addEventListener("click",() => {
    mobileMenu.classList.add("mobile-menu--active");
});
mobileBtn.addEventListener("click",() => {
    mobileMenu.classList.remove("mobile-menu--active");
});