//"use strict";
/*jshint esversion: 6 */
// Aufgabe 1 Ich darf im Unterricht nicht stören X 25
//  am besten mit Schleifendurchlauf

for (let i = 0; i <= 25; i++) {
    console.log("Ich darf im Unterricht nicht  stören " + i);
}


console.log("#####################################");
// Aufgabe 2 Aufteilung der Kurse in 2 gleich große Gruppen
let students = [
    "Max",
    "Monika",
    "Franziska",
    "Bernd",
    "Tobias",
    "Andreas",
    "Der glorreiche siebente"
];

let students1 = [];
let students2 = [];

// index bezieht sich auf die Position in Array students
for (const index in students) {
    if (index % 2 === 0) {
        students1.push(students[index]);
    } else {
        students2.push(students[index]);
    }
}
// Ausgeben um zu prüfen des
console.log("Gruppe1 ", students1);
console.log("Gruppe2 ", students2);

console.log("*****************************************");
// Task Nummer 3

// a) Wie viel kostet es für einen Teilnehmer, die Sprache bis 
//    einschließlich des Levels "C1" zu lernen? Schreibe deinen Code so
//    universell, dass er auch mit anderen Level-Bezeichnungen / Preisen
//    zurecht käme.
//
// b) Wie viel kostet es, einen Teilnehmer von (einschließlich) A2 bis
//    einschließlich C1 zu bringen?
// 
// c) Ein Teilnehmer möchte (maximal) 1500€ in seine Sprachkenntnisse 
//    investieren. Bis zu welchem Level (bei A1 angefangen) können wir
//    ihn dafür unterrichten?

let levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
let prices = [400, 500, 550, 600, 650, 700];

let totalC1 = 0;
// Preisrechner wieviel von a bis c
for (const index1 in levels) {
    const level = levels[index1];
    const price = prices[index1];

    //totalC1 = totalC1 + price;
    // kompaktere Schreibweise
    totalC1 += price;
    if (level === "C1") {
        break;
    }
}
console.log("Preis inklusive C1: ", totalC1);

// Von A2 bis C1:let totalC1 = 0;
// Preisrechner wieviel von a bis c
let totalA2C1 = 0;
let levelA2seen = false;
for (const index1 in levels) {
    const level = levels[index1];
    const price = prices[index1];

    if (level == "A2") {
        levelA2seen = true;
    }
    if (levelA2seen) {
        totalA2C1 += price;
    }
    if (level === "C1") {
        break;
    }
}
console.log("Pris von A2 bis C1: ", totalA2C1);