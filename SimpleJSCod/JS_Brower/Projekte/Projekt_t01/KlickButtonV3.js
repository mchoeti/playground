//"use strict";
/*jshint esversion: 6 */

// Ausgangsbasis für aktuelle Version
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hallo Du");

    const buttonClick = document.getElementById("buttonClick");
    const buttonReset = document.getElementById("buttonReset");
    // Span Element wo die Klicks aufsummiert weren sollen
    const counterNumber = document.getElementById("counter-number");

    buttonClick.addEventListener("click", () => {
        const currentCounter = parseInt(counterNumber.innerText, 10);
        counterNumber.innerText = currentCounter + 1;

    });

    buttonReset.addEventListener("click", () => {
        console.log("Now we do a reset");
        counterNumber.innerText = 0;
    });
});