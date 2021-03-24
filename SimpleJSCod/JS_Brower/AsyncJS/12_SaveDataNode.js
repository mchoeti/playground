//"use strict";
/*jshint esversion: 6 */
//const fs = require("fs");

// Step One mal abholen was es gibt aus einem File 
const fs = require("fs");
var data = fs.readFileSync("words.json");
// Damit das File auch als JSON gelesen wird
var words = JSON.parse(data);
console.log(words);


fs.writeFile("word.json", words, finished);

function finished(err) {
    console.log("Ready samma");
}


// var express = require("express");
// var app = express();
// var server = app.listen(3000, listening);

// function listening() {
//     console.log(".............listeninge..............");
// }