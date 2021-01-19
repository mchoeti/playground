//"use strict";
/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", () => {
    const helpElements = document.querySelectorAll("[data-help]");
    for (const helpElement of helpElements) {
        helpElement.addEventListener("click", (event) => {
            event.preventDefault();

            const helpText = helpElement.attributes["data-help"].value;
            alert(helpText);
        });
    }

    const cardHeaders = document.getElementsByClassName("card-header");
    console.log("cardHeaders");
    for (const cardHeader of cardHeaders) {

        // für Cursor Eigenschaft
        cardHeader.style.cursor = "pointer";

        cardHeader.addEventListener("click", (event) => {
            console.log("Du hast geklickt");
            const cardBody = cardHeader.nextElementSibling;
            console.log("Du hast geklickt und das is der Body: ", cardBody);

            // ACHTUNG nie die Klasse vergessen also die . notation 
            // Also den PUNKT !!!!
            const cardIcon = cardHeader.querySelector(".card-toggle-icon");
            // EInfaches uns simples Ausblenden
            //cardBody.style.display = "none";

            // Via Bootstrap damit kann ich auch noch eine Klasse hinzufügen.
            //cardBody.classList.add("d-none");

            // Togglen also hinzufügen oder entfernen
            cardBody.classList.toggle("d-none");

            // Umstänldich
            //const cardIcon = cardHeader.children[0].children[0].

            // besser einfach via query Selector arbeiten
            //const cardIcon = cardHeader.querySelector("card-toggle-icon");

            if (cardBody.classList.contains("d-none")) {
                console.log("Ja... es ist da");
                cardIcon.classList.remove("fa-angle-double-down");
                cardIcon.classList.add("fa-angle-double-right");
            } else {
                cardIcon.classList.remove("fa-angle-double-right");
                cardIcon.classList.add("fa-angle-double-down");
            }
        });
    }
});