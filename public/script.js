// import { response } from "express";

fetch(("http://localhost:8080/services"))
    .then(response => response.json())
    .then(services => {
        const servicesContainer = document.getElementsByClassName("cards");
        servicesLength = services.length
        let i = 0;
        for (let l = 0; l < Math.ceil(services.length / 2); l++) {
            const cardsLine = document.createElement("div")
            cardsLine.classList.add("cardsLine")
            for (let j = i; j < i + 2 && j < services.length; j++) {
                const serviceCard = document.createElement("div")
                serviceCard.classList.add("card")
                serviceCard.innerHTML = `
                <h4 class = "serviceName"><b>${services[j].name}</b></h4>
                <p class = "serviceDescription">${services[j].description}</p>
                <button class="cardButton" onclick = 'alert("I will do a router for ${services[j].name} later!")'>Explore <i class="fa fa-arrow-circle-right" style="color: #4F7D7D;" aria-hidden="true"></i></button>
                
                `
                cardsLine.appendChild(serviceCard)
            }
            i += 2;
            servicesContainer[0].appendChild(cardsLine)

        }

    })
    .catch(error => console.error("error fetching services: ", error))