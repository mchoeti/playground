//"use strict";
/*jshint esversion: 6 */

// https://github.com/r-spacex/SpaceX-API
// rockets.json: https://api.spacexdata.com/v3/rockets

const fs = require("fs");
const rocketsAsString = fs.readFileSync("spacex/rockets.json", {encoding: "utf-8"});

// gleich mal in ein JSObjekt umwandeln
const rockets = JSON.parse(rocketsAsString);
// Und dann direkt auf das Objekt zugreigen, 
// Array 0 und dann eben die Eigenschaft rocket_name: 'Falcon 1', 
console.log("rocketsAsString" , rockets[0]['rocket_name']);
// in Dot schreibweise wäre das dann dieses
console.log("rocketsAsString" , rockets[0].rocket_name);


// Oder wir greifen mal auf die Engines zu.
console.log("rocketsAsString" , rockets[0].engines);

// For Schleife um mir alle Racketen Namen zu besorgen 
// Ich verwende mal ein i als Variable um einfach mal zu demonstrieren, dass es nur um eine Zählvariable geht.
for (const i of rockets) {
    console.log(i.rocket_name);
}
