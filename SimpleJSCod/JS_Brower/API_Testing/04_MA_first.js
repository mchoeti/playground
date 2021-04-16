/*jshint esversion: 6 */
console.log("Welcome my API Key");

// Basic SETUP
global.fetch = require("node-fetch");
const GeminiAPI = require("gemini-api").default;
const secret = "yourSecret";
const key = "yourkey";
const ccAPIKey = "yourCCkey";
const restClient = new GeminiAPI({ key, secret, sandbox: true });

const CryptoCompareAPI = require("cryptocompare");
CryptoCompareAPI.setApiKey(ccAPIKey);

CryptoCompareAPI.priceHistorical('BTC', ['USD', 'EUR'], new Date('2021-01-01'))
    .then(prices => {
        console.log(prices);
        // -> { BTC: { USD: 997, EUR: 948.17 } }
    })
    .catch(console.error);

// 100 hours Movinger Averages


// 1. Wir brauchen mal Daten von CryptoCompare
// Suchen mal auf https://www.npmjs.com/package/cryptocompare und hs
// 2. Kalkulieren MA von den letzten 100 hours man kann ja auch Tage kalkulieren histoMinute() oder histoDay() usw..
// 3. Checken ob der Preis die 100 MA kreuzet ==> Dann kömma Buy/Sell/Hold

function movingAverage(cryptoAsset, fiatCurrency, hours, callback) {

    if (hours > 169) {
        console.error("Nur bis 169 Stunden erlaubt");
        // und gleich abbrechen
        return;
    }

    CryptoCompareAPI.histoHour(cryptoAsset, fiatCurrency)
        .then(data => {
            data = data.reverse();

            // Schritt 2 ist eben den MA zu berechnen
            var sum = 0;
            for (var i = 0; i < hours; i++) {
                //console.log(i);
                //console.log(data[i].close);
                sum += data[i].close;
            }
            //console.log(data[0]);
            //console.log(data.length);
            var movingAverage = sum / hours;
            callback(movingAverage);
            console.log(movingAverage);
        })
        .catch(console.error);

}


// und dann natürlich noch den IMport anpassen
movingAverage("ETH", "USD", 100, function(result) {
    console.log("Moving Average in Hours is: ", result);
});


function minMovingAverage(cryptoAsset, fiatCurrency, minutes, callback) {

    CryptoCompareAPI.histoMinute(cryptoAsset, fiatCurrency)
        .then(data => {
            var sum = 0;
            for (var i = 0; i < minutes; i++) {
                sum += data[i].close;
            }
            var minMovingAverage = sum / minutes;
            callback(minMovingAverage);
            console.log(minMovingAverage);
        })
        .catch(console.error);
}

minMovingAverage("ETH", "USD", 10, function(result) {
    console.log("Moving Average in Minutes is: ", result);
});



function dailyMovingAverage(cryptoAsset, fiatCurrency, days, callback) {

    CryptoCompareAPI.histoDay(cryptoAsset, fiatCurrency)
        .then(data => {
            var sum = 0;
            for (var i = 0; i < days; i++) {
                sum += data[i].close;
            }
            var dailyMovingAverage = sum / days;
            callback(dailyMovingAverage);
            console.log(dailyMovingAverage);
        })
        .catch(console.error);
}

dailyMovingAverage("ETH", "USD", 1, function(result) {
    console.log("Moving Average in DAYS is: ", result);
});