const menu = document.querySelector("#mobileMenu");
const menuLinks = document.querySelector(".navbar_menu");
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}
menu.addEventListener("click", mobileMenu);
