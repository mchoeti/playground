//"use strict";
/*jshint esversion: 6 */

const fs = require("fs");
// Synch vs Asynchronous

// Synchron blöd wenn man nicht gleich Zuriff hat.
// Bei einem Sync bleibt alles stehen geht halt nix weitr. Anfrage pro Anfrage...
/*
const content = fs.readFileSync("daten.txt", { encoding: "utf8" });
console.log("content: ", content);
*/

// ASynchronous // Hat also den Vorteil, dass wir nicht warten müssen
fs.readFile("daten.txt", { encoding: "utf8" }, (err, data) => {
    // Wenn kein Fehlerm , also err dann kommen immmer die Daten Variablennamen is wurscht. Ich verwende hier data
    console.log("Daten: ", data);
});

fs.readFile("daten2.txt", { encoding: "utf8" }, (err, data) => {
    // Wenn kein Fehlerm , also err dann kommen immmer die Daten Variablennamen is wurscht. Ich verwende hier data
    console.log("Daten: ", data);
});

// Deswegen kommt das immer vorher
console.log("Testing");