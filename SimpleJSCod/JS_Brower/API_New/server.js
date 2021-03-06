//"use strict";
/*jshint esversion: 6 */
//const fs = require("fs");

var words = {
    "rainbow": 5,
    "unicorn": 10,
    "doom": -5,
    "tomato": 7
};

// SMoke Test
console.log("Server is starting");

// Schritt eins mal an simplen Webserver
var express = require('express');
var app = express();
var server = app.listen(3000, listening);

function listening() {

    console.log("listening....");
}
// Ability to host static files
app.use(express.static('website'));
//app.get('/flower', sendFlower);
/* 
 nicht vergessn im Brwoser muss man  halt nun auch die Adresse eingeben
 http://localhost:3000/search/Blumen/50
*/

app.get('/search/:flower/:num', sendFlower);

function sendFlower(request, response) {
    var data = request.params;
    var num = data.num;
    var antwort = " ";
    for (var i = 0; i < num; i++) {
        antwort += "I love " + data.flower + "  auch";
    }
    response.send(antwort);

    //response.send("I love " + data.flower + "  auch");
}

// Jetzt bauen wir mal neue API Werte dazu
app.get('/all', sendAll);

function sendAll(request, response) {
    response.send(words);
}


/*

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

*/