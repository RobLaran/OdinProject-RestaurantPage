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
        this.contactForm();
        this.contactDetail();
        
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

    contactForm() {
        const form = document.createElement("div");
        form.className = "contact-form wrapper";

        const nameInputDiv = document.createElement("div");
        nameInputDiv.className = "name-input-div";

        const nameLabel = document.createElement("label");
        nameLabel.innerHTML = "Name";
        nameLabel.setAttribute("for", "name-input");

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "name-input";
        nameInput.className = "name input";
        nameInput.placeholder = "Enter your name";

        nameInputDiv.append(nameLabel, nameInput);

        const emailInputDiv = document.createElement("div");
        emailInputDiv.className = "email-input-div";

        const emailLabel = document.createElement("label");
        emailLabel.innerHTML = "Email";
        emailLabel.setAttribute("for", "email-input");

        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.id = "email-input";
        emailInput.className = "email input";
        emailInput.placeholder = "Enter your email address";

        emailInputDiv.append(emailLabel, emailInput);

        const messageInputDiv = document.createElement("div");
        messageInputDiv.className = "message-input-div";

        const messageLabel = document.createElement("label");
        messageLabel.innerHTML = "Message";
        messageLabel.setAttribute("for", "message-input");

        const messageInput = document.createElement("textarea");
        messageInput.id = "message-input";
        messageInput.className = "message input";
        messageInput.placeholder = "Type your message here";

        messageInputDiv.append(messageLabel, messageInput);

        const submitBtnDiv = document.createElement("div");
        submitBtnDiv.className = "submit-btn-div";

        const submitBtn = document.createElement("button");
        submitBtn.className = "submit btn";
        submitBtn.innerText = "Submit";

        submitBtnDiv.append(submitBtn);

        form.append(nameInputDiv, emailInputDiv, messageInputDiv, submitBtnDiv);

        this.#container.appendChild(form);
    }

    contactDetail() {
        const contactDetailDiv = document.createElement("div");
        contactDetailDiv.className = "contact-detail wrapper";

        const emailAddressDiv = document.createElement("div");
        emailAddressDiv.className = "email contact";

        const emailAddressLabel = document.createElement("label");
        emailAddressLabel.innerText = "Email Adress: ";
        emailAddressLabel.setAttribute("for", "email-address");

        const emailAddress = document.createElement("p");
        emailAddress.id = "email-address";
        emailAddress.innerText = " LaraJojo@ymail.com";
        emailAddress.className = "detail";

        emailAddressDiv.append(emailAddressLabel, emailAddress);

        const facebookDiv = document.createElement("div");
        facebookDiv.className = "facebook contact";

        const facebookLinkLabel = document.createElement("label");
        facebookLinkLabel.innerText = "Facebook Link: ";
        facebookLinkLabel.setAttribute("for", "facebook-link");

        const facebookLink = document.createElement("a");
        facebookLink.id = "facebook-link";
        facebookLink.innerText = "https://www.facebook.com/Developer-Link";
        facebookLink.className = "detail";

        facebookDiv.append(facebookLinkLabel, facebookLink);

        const  phoneDiv = document.createElement("div");
        phoneDiv.className = "phone contact";

        const phoneLabel = document.createElement("label");
        phoneLabel.innerText = "Contact Number: ";
        phoneLabel.setAttribute("for", "contact-number");

        const contactNumber = document.createElement("p");
        contactNumber.id = "contact-number";
        contactNumber.innerText = "0906-143-XXXX";
        contactNumber.className = "detail";

        phoneDiv.append(phoneLabel, contactNumber);

        contactDetailDiv.append(emailAddressDiv, facebookDiv, phoneDiv);

        this.#container.append(contactDetailDiv);
    }
}