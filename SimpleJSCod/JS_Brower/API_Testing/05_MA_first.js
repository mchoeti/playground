/*jshint esversion: 6 */
console.log("Welcome my API Key");

// Basic SETUP
global.fetch = require("node-fetch");
// const secret = "yourSecret";
// const key = "yourkey";
// const ccAPIKey = "yourCCkey";
//const restClient = new GeminiAPI({ key, secret, sandbox: true });
const indicators = require("./indicators.js");

// und dann natürlich noch den IMport anpassen
indicators.hourlyMovingAverage("ETH", "USD", 100, function(result) {
    console.log("Moving Average per hour is: ", result);
});

// Per Minutes
indicators.minuteMovingAverage("ETH", "USD", 200, function(result) {
    console.log("Moving Average per Minute is: ", result);
});