//"use strict";
/*jshint esversion: 6 */


// anonyme Funktion zum Auslesen der aktuellen Ordner
const fs = require("fs");
fs.readdir(__dirname, (err, files) => {
    console.log(files);
});

// Simples Beispiel, mumss unbedingt verstanden werden.
// Eine Funktion in JS ist ein Wert und der kannn jedem zugewiesen werden.
const sayHello = () => {
    console.log("Hello 3");
};

// Ich kann auch einer Variabeln immer einen Wert eingeben.
// Eine Funktion in JS ist ein Wert und der kannn jedem zugewiesen werden.
const a = sayHello;
a();