import homeImg from "./dar.png";

class Home {
    constructor() {
        this.container = null;
        this.logo = null;
        this.description = null;
        this.openInfo = null;
        this.location = null;
    }

    render() {
        let body = document.body;

        this.contentContainer();
        this.homeLogo();
        this.homeDescription();

        body.appendChild(this.container);
    }

    contentContainer() {
        this.container = document.createElement("div");
        this.container.className = "home-content";
    }

    homeLogo() {
        this.logo = document.createElement("img");
        this.logo.src = homeImg;

        this.container.appendChild(this.logo);
    }

    homeDescription() {
        this.description = document.createElement("div");
        this.description.className = "desc";

        this.descHeading = document.createElement("h2");
        this.descHeading.innerText = "Hi, Welcome To DarTing's Pub!";

        this.descBody = document.createElement("p");  
        this.descBody.innerText = "Ladies and gentlemen, welcome to DarTing's Pub! Tonight, as the music pulses and the drinks flow, we embark on a voyage of laughter, camaraderie, and unforgettable moments. In this haven of spirits and smiles, let us revel in the magic of this shared space, where each sip is a toast to life's vibrant tapestry. Behind the bar, our skilled mixologists craft liquid poetry, while we, the merry souls, weave tales of joy and connection. So, let's raise our glasses high, dance to the rhythm of our hearts, and make tonight a symphony of celebration. Here's to the memories we'll create, the laughter we'll share, and the bonds we'll forge. Cheers to a night of pure delight at DarTing's Pub!";

        this.descButtons = document.createElement("div");
        this.descButtons.className = "buttons";

        this.bookInBtn = document.createElement("button");
        this.bookInBtn.className = "book-in btn";
        this.bookInBtn.innerText = "Book In";
        
        this.orderBtn = document.createElement("button");
        this.orderBtn.className = "order btn";
        this.orderBtn.innerText = "Order Now";

        this.descButtons.appendChild(this.bookInBtn);
        this.descButtons.appendChild(this.orderBtn);

        this.description.appendChild(this.descHeading);
        this.description.appendChild(this.descBody);
        this.description.appendChild(this.descButtons);

        this.container.appendChild(this.description);
    }

    openHoursInfo() {

    }

    locationInfo() {

    }
}

const home = new Home();

export { home }