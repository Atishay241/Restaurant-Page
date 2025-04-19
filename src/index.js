import "./styles.css";

import home from "./pages/home.js"
import menu from "./pages/menu.js"
import about from "./pages/about.js"


console.log(menu);
console.log("Hello Atishay!")

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");



homeButton.addEventListener("click", home);
menuButton.addEventListener("click", menu);
aboutButton.addEventListener("click", about);


home();


