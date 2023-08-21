const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");

menu.addEventListener("click", () => {
    mobileMenu.classList.toggle("displayMenu");
})