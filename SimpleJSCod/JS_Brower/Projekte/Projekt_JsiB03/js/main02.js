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
        //console.log(lastElement);
        const removeLiElement = document.querySelectorAll("li");
        console.log(removeLiElement);
        // Damit entferne ich immer das 1. Element :-)
        // Also First in first out :-)
        removeLiElement[0].remove();

        // und dann noch ein2 h2
        const removeH2 = document.querySelectorAll("h2");
        console.log(removeH2);
        removeH2[0].remove();
    });

    // Anpassen und editieren. Eventuell neuen Button einbauen

});