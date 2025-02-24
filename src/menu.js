//* Images

// Main Dish
import shrimp from "./asset/img/Foods/MainDish/shrimp.jpg";
import steak from "./asset/img/Foods/MainDish/steak.jpg";
import humba from "./asset/img/Foods/MainDish/humba.jpg";
import curry from "./asset/img/Foods/MainDish/curry.jpg";
import kawali from "./asset/img/Foods/MainDish/kawali.jpg";

// Appetizers
import kinilaw from "./asset/img/Foods/Appetizers/kinilaw.jpg";
import calamares from "./asset/img/Foods/Appetizers/calamares.jpg";
import chicharon from "./asset/img/Foods/Appetizers/chicharon.jpg";
import dynamite from "./asset/img/Foods/Appetizers/dynamite.jpg";
import prawn from "./asset/img/Foods/Appetizers/prawn.jpg";

// Grilled
import bangus from "./asset/img/Foods/Grilled/bangus.jpg";
import bbq from "./asset/img/Foods/Grilled/bbq.jpg";
import belly from "./asset/img/Foods/Grilled/belly.jpg";
import chicken from "./asset/img/Foods/Grilled/chicken.jpg";
import liempo from "./asset/img/Foods/Grilled/liempo.jpg";

// Soups & Stews
import bulalo from "./asset/img/Foods/Soups/bulalo.jpg";
import lomi from "./asset/img/Foods/Soups/lomi.jpg";
import pares from "./asset/img/Foods/Soups/pares.jpg";
import sinigang from "./asset/img/Foods/Soups/sinigang.jpg";
import tinola from "./asset/img/Foods/Soups/tinola.jpg";

// Bar Chow
import bulaklak from "./asset/img/Foods/Pulutan/bulaklak.jpg";
import chickenskin from "./asset/img/Foods/Pulutan/chickenskin.jpg";
import isaw from "./asset/img/Foods/Pulutan/isaw.jpg";
import pata from "./asset/img/Foods/Pulutan/pata.jpg";
import sisig from "./asset/img/Foods/Pulutan/sisig.jpg";

// Beverages
import alcoholic from "./asset/img/Foods/Drinks/alcoholic.jpg";
import cokefloat from "./asset/img/Foods/Drinks/cokefloat.jpg";
import gulaman from "./asset/img/Foods/Drinks/gulaman.jpg";
import lemonjuice from "./asset/img/Foods/Drinks/lemonjuice.jpg";
import softdrinks from "./asset/img/Foods/Drinks/softdrinks.jpg";

export class Item {
    constructor(name="", price=0.00, img=null) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

export class Category {
    #items; 

    constructor(name) {
        this.name = name;
        this.#items = [];
    }
    
    addItem(item) {
        if(item instanceof Item) {
            this.#items.push(item);
        }
    }

    removeItem(item) {
        const itemIndex = this.#items.indexOf(item);

        this.#items.splice(itemIndex, 1);
    }

    items() {
        return this.#items;
    }
}
    
export class Menu {
    #container;
    #heading;
    #contentDiv;

    constructor() {
        this.#container = null;
        this.#contentDiv = document.getElementById("content");
        this.#heading = null;
    }

    render() {
        this.clearContent();

        this.contentContainer();
        this.heading();
        this.#container.appendChild(this.#heading);

        this.category("Appetizers", this.appetizers());
        this.category("Main Dish" , this.mainDish());
        this.category("Grilled", this.grilled());
        this.category("Soups & Stews", this.soups());
        this.category("Bar Chows", this.chows());
        this.category("Beverages", this.drinks());

        this.#contentDiv.appendChild(this.#container);
    }

    clearContent() {
        let element = this.#contentDiv.lastElementChild

        while(element) {
            content.removeChild(element);

            element = this.#contentDiv.lastElementChild;
        }
    }

    contentContainer() {
        this.#container = document.createElement("div");
        this.#container.className = "menu-content";
    }

    heading() {
        this.#heading = document.createElement("div");
        this.#heading.className = "heading-menu wrapper";

        const headingText = document.createElement("h2");
        headingText.innerText = "Pub's Menu";

        this.#heading.appendChild(headingText)
        this.#container.appendChild(this.#heading);
    }

    category(name="Category name", items=[]) {
        let category = document.createElement("div");
        category.className = "category wrapper";

        let title = document.createElement("h2");
        title.innerText = name;

        let itemsDiv = document.createElement("div");
        itemsDiv.className = "items";

        for(let i = 0; i < items.length; i++) {
            itemsDiv.appendChild(items[i]);
        }

        category.append(title, itemsDiv);

        this.#container.appendChild(category);
    }

    item(name="", price=0.00, img="") {
        const item = new Item(name, price, img);

        let itemDiv = document.createElement("div");
        itemDiv.className = "item-card";

        let itemImg = document.createElement("img");
        itemImg.className = "item-img";
        itemImg.src = item.img;

        let itemName = document.createElement("p");
        itemName.className = "item-name";
        itemName.innerText = item.name;

        let itemPrice = document.createElement("p");
        itemPrice.className = "item-price";
        itemPrice.innerText = "₱" + item.price;

        itemDiv.append(itemImg, itemName, itemPrice);

        return itemDiv;
    }
    
    // Appetizers:
    // 1. Chicharon
    // 2. Calamares 
    // 3. Dynamite Lumpia
    // 4. Kropek
    // 5. Kinilaw 
    appetizers() {
        const app = [];

        app.push(this.item("Chicharon", 80, chicharon));
        app.push(this.item("Calamares", 120, calamares));
        app.push(this.item("Dynamite Lumpia", 30, dynamite));
        app.push(this.item("Kropek", 20, prawn));
        app.push(this.item("Kinilaw", 60, kinilaw));

        return app;
    }

    // Grilled (Inihaw): 
    // 1. Inihaw na Liempo
    // 2. Chicken Inasal
    // 3. Pork Belly
    // 4. Pork BBQ Skewers
    // 5. Inihaw na Bangus 
    grilled() {
        const grills = [];

        grills.push(this.item("Inihaw na Liempo", 240, liempo));
        grills.push(this.item("Chicken Inasal", 180, chicken));
        grills.push(this.item("Pork Belly", 340, belly));
        grills.push(this.item("Pork BBQ Skewers", 90, bbq));
        grills.push(this.item("Inihaw na Bangus", 280, bangus));

        return grills;
    }

    // Main Dishes (Ulam):
    // 1. Butter Garlic Shrimp 
    // 2. Beef Steak
    // 3. Chicken Curry
    // 4. Lechon Kawali 
    // 5. Humba 
    mainDish() {
        const dishes = [];

        dishes.push(this.item("Buttered Garlic Shrimp", 180, shrimp));
        dishes.push(this.item("Beef Steak", 210, steak));
        dishes.push(this.item("Chicken Curry", 120, curry));
        dishes.push(this.item("Lechon Kawali", 320, kawali));
        dishes.push(this.item("Humba", 100, humba));

        return dishes;
    }

    // Soups & Stews (Sabaw at Nilaga):
    // 1. Sinigang na Baboy 
    // 2. Bulalo
    // 3. Tinolang Manok
    // 4. Lomi/Lugaw
    // 5. Beef/Pork Pares
    soups() {
        const stews = [];

        stews.push(this.item("Sinigang na Baboy", 230, sinigang)); 
        stews.push(this.item("Bulalo", 300, bulalo)); 
        stews.push(this.item("Tinolang Manok", 210, tinola)); 
        stews.push(this.item("Lomi/Lugaw", 60, lomi)); 
        stews.push(this.item("Beef/Pork Pares", 290, pares)); 

        return stews;
    }

    // Bar Chow (Pulutan):
    // 1. Sizzling Sisig 
    // 2. Crispy Pata 
    // 3. Chicharon Bulaklak 
    // 4. Chicken Skin Chicharon 
    // 5. Pork Isaw
    chows() {
        const barchows = [];

        barchows.push(this.item("Sizzling Sisig", 130, sisig));
        barchows.push(this.item("Crispy Pata", 320, pata));
        barchows.push(this.item("Chicharon Bulaklak", 150, bulaklak));
        barchows.push(this.item("Chicken Skin Chicharon", 120, chickenskin));
        barchows.push(this.item("Pork Isaw", 110, isaw));

        return barchows;
    }

    // Inumin (Beverages):
    // 1. Softdrinks
    // 2. Sago Gulaman
    // 3. Coke/Chocolate Float
    // 4. Calamansi/Lemon Juice
    // 5. Alcoholic Drinks
    drinks() {
        const beverages = [];

        beverages.push(this.item("Softdrinks", 30, softdrinks));
        beverages.push(this.item("Sago Gulaman", 70, gulaman));
        beverages.push(this.item("Coke/Chocolate Float", 100, cokefloat));
        beverages.push(this.item("Calamansi/Lemon Juice", 80, lemonjuice));
        beverages.push(this.item("Alcoholic Drinks", 160, alcoholic));

        return beverages;
    }
}
