/*jshint esversion: 6 */
console.log("Welcome my API Key");

// Basic SETUP
const GeminiAPI = require("gemini-api").default;
const secret = "yourSecret";
const key = "yourkey";
const restClient = new GeminiAPI({ key, secret, sandbox: true });


// restClient.getAllSymbols()
//     .then(response => {
//         console.log(response);
//     });

// restClient.getTicker("btcusd")
//     .then(response => {
//         console.log(response);
//     });

// Mal einen Error Code einbauen, weil es das PAIR nicht gibt
// Also immer einen CATCH einbauen, also ein PROMISE verwenden
restClient.getOrderBook("btcusd")
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });

// Get active ORders
// restClient.getMyActiveOrders()
//     .then(response => {
//         console.log(response);
//     });

// Cancel active Orders
// restClient.cancelOrder({
//         order_id: 789397474
//     })
//     .then(response => {
//         console.log(response);
//     });


// Get Active Orders
// restClient.getMyActiveOrders()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });


// new ORDER
// restClient.newOrder({
//         amount: 1,
//         price: 10,
//         side: "buy",
//         symbol: "ethusd"
//     })
//     .then(_res => {
//         console.log(_res);
//     })
//     .catch(console.error);