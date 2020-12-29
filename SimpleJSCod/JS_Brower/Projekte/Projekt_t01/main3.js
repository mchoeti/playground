//"use strict";
/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", () => {

    const anfang = document.getElementById("Summe").innerText;
    const zaehler = document.getElementById("zähler");
    const reset = document.getElementById("reset");

    let f = 0;
    zaehler.addEventListener("click", () => {
        f++;
        document.getElementById("Summe").innerText = "Anzahl Klicks: " + f;
        console.log(document.getElementById("Summe").innerText);
    });
    reset.addEventListener("click", () => {

        document.getElementById("Summe").innerText = anfang;
        f = 0;

    });

});