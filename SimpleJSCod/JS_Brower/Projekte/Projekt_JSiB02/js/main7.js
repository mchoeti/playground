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


    // Dom navigieren
    const cardElement = document.querySelector(".card");
    console.log(cardElement);
    console.log("Eltern: ", cardElement.parentElement);
    console.log("Kinder zählen", cardElement.childElementCount);
    console.log("Nachfolgendes Element: ", cardElement.nextElementSibling);
    console.log("Voriges Element: ", cardElement.previousElementSibling);
});