/*jshint esversion: 6 */
console.log("Welcome my API Key");

// Basic SETUP
global.fetch = require("node-fetch");
const secret = "yourSecret";
const key = "yourkey";
const ccAPIKey = "yourCCkey";

//const restClient = new GeminiAPI({ key, secret, sandbox: true });
// Module einbinden is
const indicators = require("./indicators.js");

// und dann natürlich noch den IMport anpassen
indicators.hourlyMovingAverage("ETH", "USD", 100, function(result) {
    console.log("Moving Average per hour is: ", result);
});

//

// indicators.minuteMovingAverage("ETH", "USD", 100, function(result) {
//     console.log("Moving Average per minute is: ", result);
// });