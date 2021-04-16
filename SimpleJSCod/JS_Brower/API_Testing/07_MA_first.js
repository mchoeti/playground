/*jshint esversion: 6 */
console.log("Welcome to Market Orders");

// Basic SETUP
global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./exchange.js");