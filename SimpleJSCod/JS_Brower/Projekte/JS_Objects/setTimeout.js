//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete  // kleine Update
// a normales F5 reicht auch
console.log("Hello World im am back");

// fat arrow Schreibweise - Auch bekannt als Pfeilfunktion
setTimeout(() => {
    console.log("Nach 5 Sec sollte das erscheinen");
}, 5000);

setInterval(() => {
    console.log("Ich werde alle 2000ms ausgeführt");
}, 2000);

/// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Functions/Pfeilfunktionen