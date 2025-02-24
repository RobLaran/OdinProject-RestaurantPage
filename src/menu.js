//* Images

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

        this.categories();
        this.categories();
        this.categories();
        this.categories();
        this.categories();

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

    categories() {
        let category = document.createElement("div");
        category.className = "category wrapper";

        let title = document.createElement("h2");
        title.innerText = "Category name";

        let items = document.createElement("div");
        items.className = "items";

        for(let i = 0; i < 5; i++) {
            items.appendChild(this.item());
        }

        category.append(title, items);

        this.#container.appendChild(category);
    }

    item() {
        let item = document.createElement("div");
        item.className = "item-card";

        let itemImg = document.createElement("img");
        itemImg.className = "item-img";

        let itemName = document.createElement("p");
        itemName.innerText = "Item name";

        let itemPrice = document.createElement("p");
        itemPrice.innerText = "XXXpesos";

        item.append(itemImg, itemName, itemPrice);

        return item;
    }
}

export class Item {
    constructor(name, price, img) {
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
