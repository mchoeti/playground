//"use strict";
/*jshint esversion: 6 */

// Das DomDocument - gibts natürlich nur wenn wir das im Browser ausführen
console.log(document);

// Gib mal den Titel aus
console.log(document.title);

// ändere mal den Title
document.title = "Hallo Welt";

// Auf aktuellen Link bzw. URL zugreifen
console.log(document.location.href);

// Document Ready noch im Aufbau
console.log("Ohne Callback", document.readyState);

// 
document.addEventListener("DOMContentLoaded", () => {
    console.log("Dom Content Loaded:", document.readyState);
});

// Seite ist nun fertig geladen
window.addEventListener("loaded", () => {
    console.log("Loaded: ", document.readyState);
});

// Hier holen wir uns einmal ein Element und dann ändern wir die Werte
document.addEventListener("DOMContentLoaded", () => {
// mal das Element abholen
    const dateElement = document.getElementById("date-countdown");
    console.log(dateElement.innerText);
    // Ändern und wieder ausgeben, auch in der Seite
    dateElement.innerText = "23.12.2020";
    console.log("Neuer Wert", dateElement.innerText);

    // mit Inner HTMl kann man auch HTML verwenden aber wirklich nicht schön.
    // Außerdem is es ein SIcherheitsproblem !!!!! daher immer innerText verwenden.
    dateElement.innerHTML = "<strong>24.12.2020</strong>";
    console.log("Neuer Wert mit Inner HTLM ", dateElement.innerHTML);

});