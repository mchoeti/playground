//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete 
document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("add-student");

    addStudentButton.addEventListener("click", () => {
        // Basis Methode um ein ELement hinzuzufügen 
        const liElement = document.createElement("li");
        liElement.classList.add("list-group-item");
        const ulElement = document.querySelector("ul.list-group");

        //Mit Prepend wir element am ANfang hinzugefügt als Kind
        ulElement.prepend(liElement);
        // P Element hinzufügen
        simpleElement = document.createElement("p");
        // Alternativ Strong Hinzufügen
        //simpleElement = document.createElement("strong");
        // // nicht vergessen createTextNode verwenden
        simpleElement.appendChild(document.createTextNode("Simples Element dazu"));
        // um auch den Text anzueigen
        liElement.appendChild(simpleElement);

        // ALternativ wären dann auch noch before and after 
        //ulElement.after(liElement);
        //ulElement.before(liElement);


    });
});