//"use strict";
/*jshint esversion: 6 */

// Das is mal meine Basis
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hallo Du");

    // Definieren meiner beiden Variablen 
    const buttonClick = document.getElementById("buttonClick");
    const buttonReset = document.getElementById("buttonReset");

    const counterNumber = document.getElementById("counter-number");
    buttonClick.addEventListener("click", () => {
        const currentCounter = parseInt(counterNumber.innerText, 10);
        counterNumber.innerText = currentCounter + 1;
        console.log(currentCounter);
    });

    buttonReset.addEventListener("click", () => {
        console.log("Hallo");
        counterNumber.innerText = "0";
    });

});

// Simple aber gut