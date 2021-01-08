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
});