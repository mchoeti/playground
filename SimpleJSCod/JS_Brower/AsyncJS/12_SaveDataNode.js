//"use strict";
/*jshint esversion: 6 */
//const fs = require("fs");

// Simpler API Call mit Axios , wo ich mir heute und morgen ein paar Daten abhole
const fs = require("fs");
var words = fs.readFileSync("words.json");
console.log(words);




var express = require("express");
// var app = express();
// var server = app.listen(3000, listening);

// function listening() {
//     console.log(".............listeninge..............");
// }