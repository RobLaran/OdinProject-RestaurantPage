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
        
        this.createCategory(this.appetizers());
        this.createCategory(this.mainDish());
        this.createCategory(this.grilled());
        this.createCategory(this.soups());
        this.createCategory(this.chows());
        this.createCategory(this.drinks());
        
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

    createCategory(category=null) {
        if(category instanceof Category) {
            let categoryDiv = document.createElement("div");
            categoryDiv.className = "category wrapper";
    
            let title = document.createElement("h2");
            title.innerText = category.name;
    
            let itemsDiv = document.createElement("div");
            itemsDiv.className = "items";
    
            let items = category.items();
            for(let i = 0; i < items.length; i++) {
                itemsDiv.appendChild(this.createItem(items[i]));
            }
    
            categoryDiv.append(title, itemsDiv);
    
            this.#container.appendChild(categoryDiv);
        }
    }

    createItem(item=null) {
        if(item instanceof Item) {
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
    }
    
    // Appetizers:
    // 1. Chicharon
    // 2. Calamares 
    // 3. Dynamite Lumpia
    // 4. Kropek
    // 5. Kinilaw 
    appetizers() {
        const apps = new Category("Appetizers");

        apps.addItem(new Item("Chicharon", 80, chicharon));
        apps.addItem(new Item("Calamares", 120, calamares));
        apps.addItem(new Item("Dynamite Lumpia", 30, dynamite));
        apps.addItem(new Item("Kropek", 20, prawn));
        apps.addItem(new Item("Kinilaw", 60, kinilaw));

        return apps;
    }

    // Grilled (Inihaw): 
    // 1. Inihaw na Liempo
    // 2. Chicken Inasal
    // 3. Pork Belly
    // 4. Pork BBQ Skewers
    // 5. Inihaw na Bangus 
    grilled() {
        const grills = new Category("Grilled");

        grills.addItem(new Item("Inihaw na Liempo", 240, liempo));
        grills.addItem(new Item("Chicken Inasal", 180, chicken));
        grills.addItem(new Item("Pork Belly", 340, belly));
        grills.addItem(new Item("Pork BBQ Skewers", 90, bbq));
        grills.addItem(new Item("Inihaw na Bangus", 280, bangus));

        return grills;
    }

    // Main Dishes (Ulam):
    // 1. Butter Garlic Shrimp 
    // 2. Beef Steak
    // 3. Chicken Curry
    // 4. Lechon Kawali 
    // 5. Humba 
    mainDish() {
        const dishes = new Category("Main Dish");

        dishes.addItem(new Item("Buttered Garlic Shrimp", 180, shrimp));
        dishes.addItem(new Item("Beef Steak", 210, steak));
        dishes.addItem(new Item("Chicken Curry", 120, curry));
        dishes.addItem(new Item("Lechon Kawali", 320, kawali));
        dishes.addItem(new Item("Humba", 100, humba));

        return dishes;
    }

    // Soups & Stews (Sabaw at Nilaga):
    // 1. Sinigang na Baboy 
    // 2. Bulalo
    // 3. Tinolang Manok
    // 4. Lomi/Lugaw
    // 5. Beef/Pork Pares
    soups() {
        const stews = new Category("Soups & Stews");

        stews.addItem(new Item("Sinigang na Baboy", 230, sinigang)); 
        stews.addItem(new Item("Bulalo", 300, bulalo)); 
        stews.addItem(new Item("Tinolang Manok", 210, tinola)); 
        stews.addItem(new Item("Lomi/Lugaw", 60, lomi)); 
        stews.addItem(new Item("Beef/Pork Pares", 290, pares)); 

        return stews;
    }

    // Bar Chow (Pulutan):
    // 1. Sizzling Sisig 
    // 2. Crispy Pata 
    // 3. Chicharon Bulaklak 
    // 4. Chicken Skin Chicharon 
    // 5. Pork Isaw
    chows() {
        const barchows = new Category("Bar Chows");

        barchows.addItem(new Item("Sizzling Sisig", 130, sisig));
        barchows.addItem(new Item("Crispy Pata", 320, pata));
        barchows.addItem(new Item("Chicharon Bulaklak", 150, bulaklak));
        barchows.addItem(new Item("Chicken Skin Chicharon", 120, chickenskin));
        barchows.addItem(new Item("Pork Isaw", 110, isaw));

        return barchows;
    }

    // Inumin (Beverages):
    // 1. Softdrinks
    // 2. Sago Gulaman
    // 3. Coke/Chocolate Float
    // 4. Calamansi/Lemon Juice
    // 5. Alcoholic Drinks
    drinks() {
        const beverages = new Category("Beverages");

        beverages.addItem(new Item("Softdrinks", 30, softdrinks));
        beverages.addItem(new Item("Sago Gulaman", 70, gulaman));
        beverages.addItem(new Item("Coke/Chocolate Float", 100, cokefloat));
        beverages.addItem(new Item("Calamansi/Lemon Juice", 80, lemonjuice));
        beverages.addItem(new Item("Alcoholic Drinks", 160, alcoholic));

        return beverages;
    }
}
