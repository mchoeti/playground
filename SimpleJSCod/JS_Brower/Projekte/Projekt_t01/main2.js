//"use strict";
/*jshint esversion: 6 */

// Das is mal meine Basis
document.addEventListener("DOMContentLoaded", () => {

    // Definieren meiner beiden Variablen 
    const buttonIncrement = document.getElementById("button-increment");
    const buttonReset = document.getElementById("button-reset");

    // Mal ausgeben testen und eine Variable anlegen die ich dann später verwende
    //const counter = document.getElementById("counter");
    console.log(counter.innerText);

    // Zerlegen
    console.log(counter.innerText.split(": "));

    // Umwandeln in Zahl Nur das 2. Element und das 10er Dezimalsystem
    console.log("Ich bin eine Zahl:  ", parseInt(counter.innerText.split(": ")[1], 10));

    // Jetzt ein Event Listeners
    let ccounter = 0;
    buttonIncrement.addEventListener("click", () => {
        const currentCounter = parseInt(counter.innerText.split(": ")[1], 10);
        counter.innerText = "Anzahl Click " + (currentCounter + 1);
        console.log(currentCounter);
    });

});