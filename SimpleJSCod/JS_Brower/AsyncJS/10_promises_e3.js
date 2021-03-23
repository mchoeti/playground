//"use strict";
/*jshint esversion: 6 */
//const fs = require("fs");

// Alles in einer Var

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hallo Welt");
    }, 2000);
});

p.then((value) => {
    console.log("Meine Begrüßung: ", value);
});

const p2 = p.then((value) => {
    console.log("Meine Begrüßung2: ", value);
    return "!!!!!";
});

p2.then((value) => {
    console.log("Meine Begrüßung2: ", value);
});