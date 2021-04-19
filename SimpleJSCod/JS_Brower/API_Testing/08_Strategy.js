/*jshint esversion: 6 */
console.log("Welcome to Market Orders");

// Basic SETUP
global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./exchange.js");

// If BTC < MA ==>  BUY
// Also wenn der Preis unter dem letzten 100 Stunden drunter is dann kaufen.
// Aber nur dann wenn wir keine Position haben

// IF BTC price is > MA ==> also verkaufen

var hasPosition = false;
var strategy = function() {
    console.log("  ");
    console.log("=============================");
    console.log("Execute Strategy");

    indicators.hourlyMovingAverage("ETH", "USD", 100, function(ma) {
        exchange.coinPrice()
            .then((res) => {
                var price = res.last;
                console.log("MA is now: ", ma);
                console.log("Price is now: ", price);

                // Wenn Preis kleiner als MA ist und wir KEINE Position haben
                if (price < ma && !hasPosition) {
                    console.log("BUY");
                    exchange.marketBuyETH()
                        .then(res => {
                            console.log("Buy successful");
                            hasPosition = true;
                            // Erst dann wenn wir successfully gekauft haben soll es wieder losgehen
                            setTimeout(strategy, 5000);
                        })
                        .catch((error) => console.error);
                } else if (price > ma && hasPosition) {
                    console.log("SELL !!!!!");
                    exchange
                        .marketSellETH()
                        .then(res => {
                            console.log("Sold successful");
                            hasPosition = false;
                            // Erst dann wenn wir verkauft haben soll es wieder losgehen
                            setTimeout(strategy, 5000);
                        })
                        .catch((error) => console.error);
                } else {
                    console.log("HOLDING !!!!!");
                    setTimeout(strategy, 5000);
                }
            });
    });
};
strategy();