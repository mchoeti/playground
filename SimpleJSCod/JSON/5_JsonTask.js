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

// let launchYearCount = 0;
// let launchYearSuccess = 0;
// let launchYearFail = 0;

// for (const index of launches) {
//     //console.log(index.launch_year);
//     if (index.launch_year == 2018 && index.launch_success === true) {
//         console.log("YES", 2018);
//         launchYearCount += 1;
//         launchYearSuccess += 1;
//         //console.log(launchYearCount);
//     }
// }

let launchYearCount = 0;
let launchYearSuccess = 0;
let launchYearFail = 0;

function myStarts(year) {
    for (const index of launches) {
        //console.log(index.launch_year);
        if (index.launch_year == year && index.launch_success === true) {
            console.log("YES", year);
            launchYearCount += 1;
            launchYearSuccess += 1;
            //console.log(launchYearCount);
        }
        if (index.launch_year == year && index.launch_success === false) {
            console.log("No", year);
            launchYearFail += 1;
        }
    }
}
console.log(myStarts(2016), launchYearCount, launchYearSuccess, launchYearFail);




// console.log("Im Jahr 2018 ", launchYearCount);
// console.log("Davon erfolgreich ", launchYearSuccess);
// console.log("Davon fehlgeschlagen ", launchYearFail);

// for (const i of rockets) {
//     console.log(i.rocket_name);
// }

// Aufgaben:
//
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
//
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!

//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht!
//
// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//
//    Hinweis:
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!