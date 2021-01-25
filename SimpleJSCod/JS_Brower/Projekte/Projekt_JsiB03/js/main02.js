//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete 
document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("add-student");

    addStudentButton.addEventListener("click", () => {
        // Basis Methode um ein ELement hinzuzufügen 
        const liElement = document.createElement("li");
        liElement.innerText = "Hallo Welt, mein Name";
        liElement.classList.add("list-group-item");

        const ulElement = document.querySelector("ul.list-group");
        const lastElement = ulElement.appendChild(liElement);
        console.log(lastElement);
    });

    // Trying to remove the button
    const removeStudentButton = document.getElementById("remove-student");
    // Funktion eingebaut
    removeStudentButton.addEventListener("click", () => {
        console.log("Und nun hast du den Remove Button geklickt");

    });


});