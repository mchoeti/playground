//"use strict";
/*jshint esversion: 6 */
// Vorbereitung_ for Next session
document.addEventListener("DOMContentLoaded", () => {

    const helpElements = document.querySelectorAll("[data-help]");
    for (const helpElement of helpElements) {
        helpElement.addEventListener("click", (event) => {
            event.preventDefault();

            const helpText = helpElement.attributes["data-help"].value;
            alert(helpText);
        });
    }

    const cardElements = document.getElementsByClassName("card");
    for (const cardElement of cardElements) {

        // if (cardElement.style["background-color"] === "") {
        //     cardElement.style["background-color"] = "darkblue"
        // }
        console.log(cardElement.style);
        console.log("Farbe des Style Elements background: ", cardElement.style.backgroundColor);

        if (cardElement.style.backgroundColor === "") {
            cardElement.style.backgroundColor = "darkred";
        }

        // Display soll verschwinden. Damit kann ich ein ELement ausblenden.
        cardElement.addEventListener("click", () => {
            cardElement.style.display = "none";
        });

    }

});