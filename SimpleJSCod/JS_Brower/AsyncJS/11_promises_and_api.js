//"use strict";
/*jshint esversion: 6 */
//const fs = require("fs");

// Simpler API Call mit Axios , wo ich mir heute und morgen ein paar Daten abhole
const axios = require("axios");
const url =
    "https://downloads.codingcoursestv.eu/041%20-%20javascript/budapest.php";
// const p = axios.get(url).then((response, error) => {
//     console.log("Heute hat es : ", response.data.temperature, " Grad");
//     const tomorrow = response.data.tomorrow;
//     axios.get(tomorrow).then((response2, error) => {
//         console.log("Morgen wahrscheinlich: ", response2.data.temperature, " Grad ");
//     });
// });

// Klappt auch mit einem Return dann simma nimmer in der CbH mit dem aneinanderhängen von Promises
const p = axios.get(url).then((response, error) => {
        console.log("Heute hat es : ", response.data.temperature, " Grad");
        const tomorrow = response.data.tomorrow;
        return axios.get(tomorrow);
    })
    .then((response2, error) => {
        console.log(
            "Morgen wahrscheinlich: ", response2.data.temperature, " Grad ");
    });