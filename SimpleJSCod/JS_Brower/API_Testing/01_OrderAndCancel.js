/*jshint esversion: 6 */
console.log("Welcome my API Key");

// Basic SETUP
const GeminiAPI = require("gemini-api").default;
const secret = "yourSecret";
const key = "yourkey";
const restClient = new GeminiAPI({ key, secret, sandbox: true });


// // Order and Cancel the Order in one Stepp
restClient.newOrder({
        amount: 1,
        price: 11,
        side: "buy",
        symbol: "ethusd"
    })
    .then(_res => restClient.cancelOrder({ order_id: _res.order_id }))
    .then(_res => console.log(_res))
    .catch(error => console.log(error));

// Cancel all active Orders
restClient.cancelAllActiveOrders()
    .then(response => console.log(response))
    .catch(error => console.log(error));


restClient.getTradeHistory("ethusd")
    .then(response => console.log(response))
    .catch(error => console.log(error));


restClient.getMyAvailableBalances()
    .then(response => console.log(response))
    .catch(error => console.log(error));


restClient.getMyOrderStatus()
    .then(response => console.log(response))
    .catch(error => console.log(error));

restClient.getMyTradeVolume()
    .then(response => console.log(response))
    .catch(error => console.log(error));