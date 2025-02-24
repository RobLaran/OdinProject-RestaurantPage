export class Contact {
    #container;
    #heading;
    #contentDiv;

    constructor() {
        this.#container = null;
        this.#contentDiv = document.getElementById("content");
        this.#heading = null;
    }

    render() {
        this.contentContainer();
        this.heading();
        this.#container.appendChild(this.#heading);
        
        this.#contentDiv.appendChild(this.#container);
    }

    contentContainer() {
        this.#container = document.createElement("div");
        this.#container.className = "contact-content";
    }

    heading() {
        this.#heading = document.createElement("div");
        this.#heading.className = "heading-contact heading wrapper";

        const headingText = document.createElement("h2");
        headingText.className = "heading";
        headingText.innerText = "Contact Our Pub";

        this.#heading.appendChild(headingText)
        this.#container.appendChild(this.#heading);
    }
}