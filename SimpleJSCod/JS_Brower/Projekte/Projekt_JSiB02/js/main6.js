//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete    
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

        if (cardElement.style.backgroundColor === "") {
            cardElement.style.backgroundColor = "darkred";
        }

        // Mit STRG und Leertaste gibts die Autocomplete        
        // cardElement.addEventListener("click", () => {
        //     cardElement.style.display = "none"
        // })

    }

});