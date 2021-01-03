//"use strict";
/*jshint esversion: 6 */

// Ausgangsbasis für aktuelle Version
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hallo Du");

    // Variante 3 hier bin ich dann auch gleich fertig mit dem einlesen.
    const buttonClick = document.getElementById("buttonClick");
    const buttonReset = document.getElementById("buttonReset");
    const counterNumber = document.getElementById("counter-number");

    // jetzt besorge ich mir einfach mal den aktuellen Wert und wandle es in einen Integer Wert
    let currentCounter = parseInt(counterNumber.innerText, 10);
    console.log(currentCounter);
    buttonClick.addEventListener("click", () => {
        currentCounter++;
        // Und natürlich muss ich das in die DOM zurükschreiben
        counterNumber.innerText = currentCounter;
    });

    buttonReset.addEventListener("click", () => {
        currentCounter = 0;
        counterNumber.innerText = currentCounter;
    });

});

// Großer Vorteil wäre, dass ich nur einmal Daten einlesen muss
// Und der Wert steht in der Variablen current Counter ..  :-)
// Nicht vergessen der Wert muss in die Seite zurückgeschrieben weden.
// Siehe counterNumber.innerText = currentCounter;