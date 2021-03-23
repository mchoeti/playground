//"use strict";
/*jshint esversion: 6 */

//const fs = require("fs");

// Versprechen das hier ein Wert drinnen stehen wird !!!
//const p = Promise.resolve("Hallo Zusammmen");

// Versprechen wir noch nicht eingelöst. Nur wenn was drinnensteht wird sie ausgeführt
const p = new Promise(() => {});

p.then((value) => {
    console.log("Das is mal eine Begrüßung : ", value);
});

// Hier wird ein Versprechen eingelöst.
const q = new Promise((resolve, reject) => {
    // Usus : immer die Variablen oben verwenden ist best practise.
    setTimeout(() => {
        resolve("HALLOOOOOOOOOOOOOOOOO");
    }, 2000);
});

q.then((value) => {
    console.log("Das is mal eine Begrüßung : ", value);
});