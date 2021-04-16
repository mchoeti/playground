/*jshint esversion: 6 */
console.log("Welcome to Market Orders");

// Basic SETUP
global.fetch = require("node-fetch");
const exchange = require("./exchange.js")
    //const indicators = require("./indicators.js");

// Achtung aufpassen wegen dem MArket Price
// hier muss man entweder drüber gehen oder massiv drunter. In meinem Bsp: hab ich das NICHT umgesetzt
// Ich kaufe nur zu einem bestimmten Preis

// Kaufen
exchange.marketBuy("ethusd", 24)
    .then(result => console.log(result))
    .catch(error => console.result(result));

// Verkaufen
exchange.marketSell("ethusd", 29999)
    .then(result => console.log(result))
    .catch(error => console.result(result));