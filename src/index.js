import "./styles.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

const home = new Home();
const menu = new Menu();
const contact = new Contact();

const homeTab = document.getElementById("home-tab");
const menuTab = document.getElementById("menu-tab");
const contactTab = document.getElementById("contact-tab");

const clearContent = () => {
    const content = document.getElementById("content");
    let activeElems = document.getElementsByClassName("active");
    
    let element = content.lastElementChild

    while(element) {
        content.removeChild(element);

        element = content.lastElementChild;
    }

    for(let i = 0; i < activeElems.length; i++) {
        activeElems[i].classList.remove("active");
    }
};

let currentTab = null;
homeTab.classList.add("active");


homeTab.addEventListener("click", () => {
    clearContent();
    currentTab = "home";

    if(currentTab === "home") homeTab.classList.add("active");

    home.render();
});

menuTab.addEventListener("click", () => {
    clearContent()
    currentTab = "menu";

    if(currentTab === "menu") menuTab.classList.add("active");

    menu.render();
});

contactTab.addEventListener("click", () => {
    clearContent()
    currentTab = "contact";

    if(currentTab === "contact") contactTab.classList.add("active");

    contact.render();
});


home.render();