//"use strict";
/*jshint esversion: 6 */

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs");
const launches = JSON.parse(
    fs.readFileSync("spacex/launches.json", { encoding: "utf-8" })
);

console.log("Anzahl launches:", launches.length);
console.log(launches[0].launch_year);

// Clean up definieren der Variablen
let launchYearCount = 0;
let launchYearSuccess = 0;
let launchYearFail = 0;

// Function für das Jahr
function myStarts(year) {
    for (const index of launches) {
        //console.log(index.launch_year);
        if (index.launch_year == year && index.launch_success === true) {
            // crosscheck wieviele Erfolgreich waren
            console.log("YES", year);
            launchYearCount += 1;
            launchYearSuccess += 1;
            //console.log(launchYearCount);
        }
        if (index.launch_year == year && index.launch_success === false) {
            // cross check ob ein Fehlstart dabei war
            console.log("No", year);
            launchYearFail += 1;
        }
    }
}

// Eingabe von Jahr notwendig
console.log(myStarts(2018), launchYearCount, launchYearSuccess, launchYearFail);

// andere Variante ohne Dot notation
let counter2018 = 0;
for (const indexNeu of launches) {
    if (indexNeu["launch_year"] === "2018") {
        counter2018++;
    }
}
console.log("2018er ", counter2018);

// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",dann das entsprechende Payload, und von dem die Eigenschaft "payload_mass_kg".

let sumKG = 0;
for (const index1 of launches) {
    // hier überspringe ich gleich mal alles was nicht 2018 ist und nicht erfolgreich ist
    if (index1.launch_year !== "2018" || index1.launch_success === false) {
        continue;
    }
    //Variante 1
    const second_stage = index1.rocket.second_stage;
    // Variante2 wäre
    //const second_stage = index1["rocket"]["second_stage"];
    //console.log(second_stage);
    // Neue For SChleife schreiben weil in payloads wieder ein Array is
    for (const payloadIndex of second_stage.payloads) {
        console.log(payloadIndex.payload_mass_kg);
        const kg = payloadIndex.payload_mass_kg;
        //gleich mal aufaddieren
        sumKG += kg;
    }

}

// Damit bleibt die Summe auch gleich als Zahl erhalten :-)
console.log("In Summe wurden im Jahr 2018: ", sumKG, " ins All geschickt");