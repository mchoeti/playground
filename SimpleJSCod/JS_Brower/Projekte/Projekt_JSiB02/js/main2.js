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
});