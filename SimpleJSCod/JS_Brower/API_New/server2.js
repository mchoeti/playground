//"use strict";
/*jshint esversion: 6 */
//const fs = require("fs");

var words = {
    "rainbow": 5,
    "unicorn": 10,
    "doom": -5,
    "tomato": 7,
    "apple": 14
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

//app.get('/search/:flower/:num', sendFlower);
// neue Line
//app.get('/add/:word/:score', addWord);
app.get('/search/:flower/:num', sendFlower);
// Option würde das mit einem Fragezeichen klappen 
app.get('/add/:word/:score?', addWord);
// Adding Search Function
app.get('/search/:word/', searchWord);

function addWord(request, response) {
    //response.send(console.log("HAllo"));
    var data = request.params;
    var word = data.word;
    // Mit Number() konvertiere ich den String auch gleiuch mal in eine Nummer
    var score = Number(data.score);
    // Wenn kein Score dann gliech mal einen standartwert setzen!!
    var reply;
    if (!score) {
        score = 0;
        words[word] = score;
        reply = {
            msg: "Std Score gesetzt"
        };
        //response.send(reply);
    } else {
        // Word is the key and score is the value
        words[word] = score;
        reply = {
            msg: "Danke für deinen Beitrag"
        };
        //response.send(reply);
    }
    response.send(reply);
}

// Suchfuntion überprüft ob es da was gibt
function searchWord(request, response) {
    var word = request.params.word;
    var reply;
    if (words[word]) {
        reply = {
            status: "Found !!!!",
            word: word,
            score: words[word]
        };
    } else {
        reply = {
            status: " Not Found !!!!",
            word: word
        };
    }
    response.send(reply);
}

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