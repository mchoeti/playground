//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete 
document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("add-student");

    addStudentButton.addEventListener("click", () => {
        // Basis Methode um ein ELement hinzuzufügen 
        const liElement = document.createElement("li");
        liElement.classList.add("list-group-item");

        // Hier wir ein neuer Opbjektbaum erzeugt ein Element erzeugt und dann das STRong hinzugefügt.
        // const strongElement = document.createElement("strong");
        // const textNode = document.createTextNode("Hallo DU !!!");
        // strongElement.appendChild(textNode);
        // liElement.appendChild(strongElement);

        // Alternative zuerst strong erstellen und dann als child hinzufügen
        strongElement = document.createElement("strong");
        strongElement.appendChild(document.createTextNode("Hallo uns Servas"));
        liElement.appendChild(strongElement);

        const ulElement = document.querySelector("ul.list-group");
        ulElement.appendChild(liElement);

        // Alternativ kann man aber auch alles hinzufügen beispielsweise ein simples Element.
        simpleElement = document.createElement("p");
        simpleElement.appendChild(document.createTextNode("Simples Element dazu"));
        liElement.appendChild(simpleElement);
    });
});