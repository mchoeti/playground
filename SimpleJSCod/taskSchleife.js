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