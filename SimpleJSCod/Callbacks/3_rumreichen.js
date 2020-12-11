//"use strict";
/*jshint esversion: 6 */

const fs = require("fs");

// anonyme Funktionen in Node JSON
fs.readdir(__dirname, (err, files) => {
    console.log(files);
});

// Und damit wir es als Hallo Welt ausgegeben
// Ohne  Encoding gibts nur die Nummern :-)
fs.readFile("daten.txt", { encoding: "utf8" }, (err, data) => {
    console.log(data);
});