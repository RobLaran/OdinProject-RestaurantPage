import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

home.render();

const homeTab = document.getElementById("home-tab");
const menuTab = document.getElementById("menu-tab");
const contactTab = document.getElementById("contact-tab");

const clearContent = () => {
    const content = document.getElementById("content");
    
    let element = content.lastElementChild

    while(element) {
        content.removeChild(element);

        element = content.lastElementChild;
    }
};

homeTab.addEventListener("click", () => {
    clearContent()
    home.render();
});

menuTab.addEventListener("click", () => {
    clearContent()

    let menuContent = "";
    console.log(menu);
});

contactTab.addEventListener("click", () => {
    clearContent()
    
    console.log(contact);
});