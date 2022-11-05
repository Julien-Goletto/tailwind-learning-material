const menu = document.querySelector(".toggle-menu");
const button = document.querySelector(".toggle-button");

const expandMenuHandler = () => {
  menu.classList.toggle("hidden")
  console.log("Menu caché héhéhé")
}
button.addEventListener('click', expandMenuHandler)

console.log(menu, button);