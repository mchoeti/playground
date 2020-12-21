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
    console.log("Loaded: " , document.readyState);
});