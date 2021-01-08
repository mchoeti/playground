//"use strict";
/*jshint esversion: 6 */

// Query Selector klappen mit CSS 
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    console.log(heading);

    const headingContainer = document.querySelector(".container h1");

    // UNd hier holen wir uns mal alle eine komplexen CSS Selector
    const cardHeadings = document.querySelectorAll(".card div.card-header");
    console.log(cardHeadings);

    // Alle abholen und dann das erste anzeigen
    const firstCardHeader = document.getElementsByClassName("card-header")[0];
    //Attributes gibts auf allen HTML Elementen ==> Listed Namend nodes MAP
    // console.log(firstCardHeader.attributes[0]);
    // console.log(firstCardHeader.attributes[1]);
    // Oder Alle
    // console.log("Oder alle", firstCardHeader.attributes);
    // console.log(firstCardHeader.attributes["class"]);
    // oder alle
    console.log(firstCardHeader.attributes.class);
    // unser Data Extra
    console.log(firstCardHeader.attributes["data-extra"]);

    // Und damit kann ich mir auch gleich mal "nur" den Value raussuchen.
    const dataExtraAttribute = firstCardHeader.attributes["data-extra"].value;
    console.dir(dataExtraAttribute);
});