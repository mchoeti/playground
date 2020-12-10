//"use strict";
/*jshint esversion: 6 */

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

const fs = require("fs");
const launches = JSON.parse(
    fs.readFileSync("spacex/launches.json", { encoding: "utf-8" })
);

console.log("Anzahl launches:", launches.length);
console.log(launches[0].launch_year);

// Klassisches For Schleife
for (let index = 0; index < launches.length; index++) {
    console.log("Älter: ", launches[index].launch_year);
}

// Modernere und schnellere Varianten 
// er nimmt hier die Werte aus dem launchens.json file
for (const index of launches) {
    console.log("Besser", index.launch_year);
}