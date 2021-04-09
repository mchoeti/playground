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


// CryptoCompareAPI.coinList()
//     .then(coinList => {
//         console.log(coinList)
//     })
//     .catch(console.error);

// CryptoCompareAPI.price('BTC', ['USD', 'EUR'])
//     .then(prices => {
//         console.log("Aktuelle Preise");
//         console.log(prices);
//         // -> { USD: 1100.24, EUR: 1039.63 }
//     })
//     .catch(console.error);


CryptoCompareAPI.priceHistorical('BTC', ['USD', 'EUR'], new Date('2021-01-01'))
    .then(prices => {
        console.log(prices);
        // -> { BTC: { USD: 997, EUR: 948.17 } }
    })
    .catch(console.error);



// restClient.getMyAvailableBalances()
//     .then(response => console.log(response))
//     .catch(error => console.log(error));



// restClient.newOrder({ amount: 1, price: 11, side: "buy", symbol: "ethusd" })
//     .then(response => console.log(response))
//     .catch(error => console.log(error));