/*jshint esversion: 6 */
console.log("Welcome my API Key");

// Basic SETUP
const GeminiAPI = require("gemini-api").default;
const secret = "yourSecret";
const key = "yourkey";
const restClient = new GeminiAPI({ key, secret, sandbox: true });


restClient.getMyAvailableBalances()
    .then(response => console.log(response))
    .catch(error => console.log(error));


restClient.newOrder({
        amount: 1,
        price: 11,
        side: "buy",
        symbol: "ethusd"
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

restClient.newOrder({
        amount: 1,
        price: 12,
        side: "buy",
        symbol: "ethusd"
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

restClient.newOrder({
        amount: 1,
        price: 13,
        side: "buy",
        symbol: "ethusd"
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

restClient.getMyActiveOrders()
    .then(response => console.log(response))
    .catch(error => console.log(error));

restClient.cancelAllActiveOrders()
    .then(response => console.log(response))
    .catch(error => console.log(error));

restClient.getMyActiveOrders()
    .then(response => console.log(response))
    .catch(error => console.log(error));