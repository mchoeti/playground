//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete   
document.addEventListener("DOMContentLoaded", () => {
    const closeButtons = document.querySelectorAll("[data-dismiss='alert']");
    console.log("Hallo Chris");

    for (const closeButton of closeButtons) {
        closeButton.addEventListener("click", () => {

            closeButton.parentElement.remove();
        });
    }
});