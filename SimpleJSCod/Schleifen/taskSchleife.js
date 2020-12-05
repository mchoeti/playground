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
    "Der glorreiche siebente",
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
console.log("Preis von A2 bis C1: ", totalA2C1);
// Eventuell nochmals anpassen

// Neuer Task, neue Aufgabe Teilnehmer möchte maximal 1500 investieren
console.log("+++++++++++++++++++++++++++");
let budget = 1500;
let usedBudget = 0;
for (const index2 in levels) {
    debugger;
    const level = levels[index2];
    const price = prices[index2];
    usedBudget += price;
    if (usedBudget + price >= budget) {
        console.log(
            "Limit erreicht, du kannst die Kurse bis inklusive: ",
            levels[index2] + " besuchen"
        );
        break;
    }
}
console.log("+++++++++++++++++++++++++++");
// Anpassen vor dem Update
// Aufgabe 4

let studentsPerCourse = [
    ["Max", "Monika"], // Erster Kurs
    ["Erik", "Erika"], // Zweiter Kurs
];

// Berechne die Anzahl der Teilnehmer in allen Kursen zusammen!
let num = 0;
for (const course of studentsPerCourse) {
    console.log("course", course);
    num += course.length;
}
console.log("Wir haben ", num, " Studenten");
console.log("Das war 4A ");
console.log("****** ** ** ** ** ** ** ** ** ** ** ** *");

const studentsToCancel = "Max";
let studentFound = false;
for (const course of studentsPerCourse) {
    if (course.indexOf(studentsToCancel) !== -1) {
        const posStudentsToCancel = course.indexOf(studentsToCancel);
        course.splice(posStudentsToCancel, 1);
        studentFound = true;
        break;
    }
}
// Einbauen wenn Teilnehmer nicht gefunden wurde
if (studentFound === false) {
    console.log("Kein Teilnehmer wurde entfernt");
}
console.log("Aufgabe 4B:", studentFound, studentsPerCourse);


// Wo sind weniger drinnen
let indexLeastStudents = -1;
for (const i in studentsPerCourse) {
    const course = studentsPerCourse[i];

    if (indexLeastStudents === -1) {
        indexLeastStudents = i;
    } else {
        if (course.length < studentsPerCourse[indexLeastStudents].length) {
            indexLeastStudents = i;
        }
    }
}
console.log("Aufgabe 4, C:", indexLeastStudents);