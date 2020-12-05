
//"use strict";
/*jshint esversion: 6 */

// Aufgabe 2
// Die Teilnehmerliste für einen Sprachkurs wird jetzt als Array geführt, das wiederum ein Objekt pro Teilnehmer enthält:
// 
const students = [{
    firstname: "Max",
    lastname: "Mustermann",
    age: 21
},
{
    firstname: "Laura",
    lastname: "Müller",
    age: 25
},
{
    firstname: "Julia",
    lastname: "Schreiber",
    age: 30
},
{
    firstname: "Tobias",
    lastname: "Lieb",
    age: 19
}
];

// 2a) Die Sprachschule hat eine Marketing-Agentur engagiert, die   jetzt erstmal Marktforschung betreibt.
//     Der Chef beauftragt uns / dich, das durchschnittliche Alter der Teilnehmer zu berechnen. Diese Berechnung soll natürlich  mit Hilfe von JavaScript-Code durchgeführt werden!
let ageSum = 0;
for (const index of students) {
    //console.log(index.age);
    ageSum += index.age;
    console.log(ageSum);
}
// Einfach klappt aber nur dann, wenn alle die Eigenschaft Alter haben
console.log("Durchschnittsalter: " , ageSum / students.length + " Jahre");

// 2b) Füge einen neuen Teilnehmer mit dem Namen "Christian Schmidt" hinzu. Lasse bei diesem Teilnehmer die Eigenschaft "age" weg - wir wissen das Alter noch nicht. 

students.push({
    firstname: "Christian",
    lastname: "Schmidt"
});
console.log("Aktuelle Stundenten: " , students);

let ageSum2 = 0;
let studentsWithAge = 0;
for (const index of students) {
    // Nur wenn Teilnehmer die Eigenschaft Alter hat.
    if (index.age) {
        ageSum2 += index.age;
        studentsWithAge++;
        console.log(ageSum2);
    }
}
console.log("Durchschnittsalter: " , ageSum2 / studentsWithAge + " Jahre");
