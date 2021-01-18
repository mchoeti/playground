//"use strict";
/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", () => {

    const helpElements = document.querySelectorAll("[data-help]");
    for (const helpElement of helpElements) {
        helpElement.addEventListener("click", (event) => {
            event.preventDefault()

            const helpText = helpElement.attributes["data-help"].value;
            alert(helpText);
        });
    }

    const cardHeaders = document.getElementsByClassName("card-header");
    console.log("cardHeaders");
    for (const cardHeader of cardHeaders) {
        cardHeader.addEventListener("click", (event) => {
            console.log("Du hast geklickt");
            const cardBody = cardHeader.nextElementSibling;
            console.log("Du hast geklickt und das is der Body: ", cardBody);

            // EInfaches uns simples Ausblenden
            //cardBody.style.display = "none";

            // Via Bootstrap damit kann ich auch noch eine Klasse hinzufügen.
            //cardBody.classList.add("d-none");

            // Togglen also hinzufügen oder entfernen
            cardBody.classList.toggle("d-none");

        });
    }
});