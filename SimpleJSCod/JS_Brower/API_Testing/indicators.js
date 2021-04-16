/*jshint esversion: 6 */

// und natürlich muss ich alles wieder bekannt machen
const ccAPIKey = "yourCCkey";
const CryptoCompareAPI = require("cryptocompare");
CryptoCompareAPI.setApiKey(ccAPIKey);

// Bei einem neune File müssen wir auch das File als Module einbinden w
module.exports = {
    // Eigentlich kommt hier nur das movingAvere VOR die Function
    hourlyMovingAverage: function(cryptoAsset, fiatCurrency, hours, callback) {
        if (hours > 169) {
            console.error("Nur bis 169 Stunden erlaubt");
            // und gleich abbrechen
            return;
        }

        CryptoCompareAPI.histoHour(cryptoAsset, fiatCurrency)
            .then((data) => {
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
                console.log("From Indicators Hour: ", movingAverage);
            })
            .catch(console.error);
    },
    minuteMovingAverage: function(cryptoAsset, fiatCurrency, minutes, callback) {

        CryptoCompareAPI.histoMinute(cryptoAsset, fiatCurrency)
            .then((data) => {
                data = data.reverse();

                // Schritt 2 ist eben den MA zu berechnen
                var sum = 0;
                for (var i = 0; i < minutes; i++) {
                    //console.log(i);
                    //console.log(data[i].close);
                    sum += data[i].close;
                }
                var minMovingAverage = sum / minutes;
                callback(minMovingAverage);
                console.log("From Indicators: ", minMovingAverage);
            })
            .catch(console.error);
    },

};