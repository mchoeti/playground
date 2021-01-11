//"use strict";
/*jshint esversion: 6 */

// Query Selector klappen mit CSS
document.addEventListener("DOMContentLoaded", () => {
    console.log("Willkommen bei einem neuen JS Projekt");

    // hier hol ich mir noch einen CSS Selector raus. Siehe auch style4.css
    const helpElements = document.querySelectorAll("[data-help]");
    console.log(helpElements);

    for (const helpElement of helpElements) {
        // Sicherstellen das Element existiert bzw. nicht existierenden keine ERRORs werfen.
        if (!helpElement.attributes["data-help"]) {
            continue;
        }

        helpElement.addEventListener("click", (event) => {
            //alert("Help wurde geklickt");
            const helpText = helpElement.attributes["data-help"].value;
            console.log(helpText);
            alert(helpText);
        });
    }

    const cardElements = document.getElementsByClassName("card");
    for (const cardElement of cardElements) {
        // Neues Klasse hinzugefügt , card bg-success :-)
        // Aber das ist halt nicht schön und es geht einfacher
        // cardElemnt.attributes["class"].value = "card bg-success";
        // console.log(cardElemnt.attributes["class"].value);

        // einfacherer Weg mit classList
        console.log(cardElement.classList);
        console.log("Hat das Element die Klasse card? ", cardElement.classList.contains("card"));

        //.add() damit fügt man eine Klasse hinzugefügt
        cardElement.classList.add("bg-success");
        cardElement.classList.add("bg-success");

        // Remove() geht natürlcih auch Element
        cardElement.classList.remove("bg-success");

        //toggle() an oder ausschalten
        cardElement.classList.toggle("bg-warning");
    }
});