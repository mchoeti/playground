//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete   
document.addEventListener("DOMContentLoaded", () => {
    const closeButtons = document.querySelectorAll("[data-dismiss='alert']");
    console.log("Hallo Chris, klick auf das X");

    for (const closeButton of closeButtons) {
        closeButton.addEventListener("click", () => {

            // Damit wird das Element wirklich entfernt
            closeButton.parentElement.remove();
        });
    }
});