/*jshint esversion: 6 */
//console.log("Welcome to Market Orders");

const GeminiAPI = require("gemini-api").default;

const secret = "yourSecret";
const key = "yourkey";
const ccAPIKey = "yourCCkey";


const restClient = new GeminiAPI({ key, secret, sandbox: true });

module.exports = {
    marketBuy: function(symbol, price) {
        return restClient.newOrder({
            amount: 1,
            price: price,
            side: "buy",
            symbol: symbol,
            options: ["immediate-or-cancel"]
        });
    },
    marketBuyETH: function() {
        return restClient.newOrder({
            amount: 1,
            price: 20000,
            side: "buy",
            symbol: "ethusd",
            options: ["immediate-or-cancel"]
        });
    },
    marketSell: function(symbol, price) {
        return restClient.newOrder({
            amount: 1,
            price: price,
            side: "sell",
            symbol: symbol,
            options: ["immediate-or-cancel"]
        });
    },
    marketSellETH: function() {
        return restClient.newOrder({
            amount: 1,
            price: 1,
            side: "sell",
            symbol: "ethusd",
            options: ["immediate-or-cancel"]
        });
    },


    //ein Schneller Shortcut
    coinPrice: function() {
        return restClient.getTicker("ethusd");
    }

};