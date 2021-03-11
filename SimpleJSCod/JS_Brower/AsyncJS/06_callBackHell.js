//"use strict";
/*jshint esversion: 6 */

const fs = require("fs");

// A bisserl strange ode ? Set Timeout und die sogenannte Callback HELL!!!!
setTimeout(() => {
    fs.exists("datei.txt", (exists) => {
        if (exists) {
            fs.readFile("datei.txt", { encoding: "utf8" }, (err, data) => {
                // Wenn kein Fehlerm , also err dann kommen immmer die Daten Variablennamen is wurscht. Ich verwende hier data
                console.log("err", err);
                console.log("Daten: ", data);
            });
        }
    });
}, 1000);

// Deswegen brauchen wir die promises