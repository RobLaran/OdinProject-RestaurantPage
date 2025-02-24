import homeImg from "./asset/img/dar.png";

export class Home {
    constructor() {
        this.container = null;
        this.logo = null;
        this.description = null;
        this.openInfo = null;
        this.location = null;
    }

    render() {
        let content = document.getElementById("content");

        let element = content.lastElementChild

        while(element) {
            content.removeChild(element);

            element = content.lastElementChild;
        }

        this.contentContainer();
        this.homeLogo();
        this.homeDescription();
        this.openHoursInfo();
        this.locationInfo();

        content.appendChild(this.container);
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
        this.description.className = "desc wrapper";

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
        this.openInfo = document.createElement("div");
        this.openInfo.className = "open-info wrapper";

        this.openInfoHeading = document.createElement("h2");
        this.openInfoHeading.innerText = "Open Hours";

        this.openHours = document.createElement("div");
        this.openHours.className = "open-hours";

        this.sundayHour = document.createElement("p");
        this.sundayHour.innerText = "Sunday: 1:00pm - 9:00pm";

        this.mondayHour = document.createElement("p");
        this.mondayHour.innerText = "Monday: 8:00am - 10:00pm";

        this.tuesdayHour = document.createElement("p");
        this.tuesdayHour.innerText = "Tuesday: 8:00am - 10:00pm";

        this.wednesdayHour = document.createElement("p");
        this.wednesdayHour.innerText = "Wednesday: 8:00am - 10:00pm";

        this.thursdayHour = document.createElement("p");
        this.thursdayHour.innerText = "Thursday: 8:00am - 10:00pm";

        this.fridayHour = document.createElement("p");
        this.fridayHour.innerText = "Friday: 8:00am - 10:00pm";

        this.saturdayHour = document.createElement("p");
        this.saturdayHour.innerText = "Saturday: 1:00pm - 9:00pm";

        this.openHours.append(this.sundayHour);
        this.openHours.append(this.mondayHour);
        this.openHours.append(this.tuesdayHour);
        this.openHours.append(this.wednesdayHour);
        this.openHours.append(this.thursdayHour);
        this.openHours.append(this.fridayHour);
        this.openHours.append(this.saturdayHour);

        this.openInfo.appendChild(this.openInfoHeading);
        this.openInfo.appendChild(this.openHours);

        this.container.appendChild(this.openInfo);
    }

    locationInfo() {
        this.location = document.createElement("div");
        this.location.className = "location-info wrapper";

        this.locationHeading = document.createElement("h2");
        this.locationHeading.innerHTML = "Pub's Location";

        this.locationDetail = document.createElement("div");
        this.locationDetail.className = "location-detail";

        this.locationData = document.createElement("p");
        this.locationData.innerText = "Panal street, Abgao, Maasin City, Southern Leyte, 6600";

        let map = document.createElement("iframe");
        map.className = "map";
        map.src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d981.891254432808!2d124.84175626955093!3d10.134645999373614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA4JzA0LjciTiAxMjTCsDUwJzMyLjYiRQ!5e0!3m2!1sen!2sph!4v1740386892534!5m2!1sen!2sph";
        map.width = "480";
        map.height = "450";
        map.loading = "lazy";
        map.referrerPolicy = "no-referrer-when-downgrade";

        this.locationDetail.appendChild(this.locationData);

        this.location.appendChild(this.locationHeading);
        this.location.appendChild(map);
        this.location.appendChild(this.locationData);

        this.container.appendChild(this.location);
    }
}

