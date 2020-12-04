//"use strict";
/*jshint esversion: 6 */

// Objekte in Arrays
const students = [
    { firstname: "Christian", lastname: "Mustermann" },
    { firstname: "Doris ", lastname: "Mustermann" },
];

//console.log("student", students);

// Damit kann ich das Objekt auch ausgeben
for (const student of students) {
    console.log("Meine Eigenschafen als Student sind: ", student);
}

// Wer das von früher mit einem i kennt, der kann auch das verwenden.
console.log("+++++++++++++++++++++++");
for (const i of students) {
    console.log("Meine Eigenschafen als Student sind: ", i);
}

const testObjekt = {
    items: ["Apfel", "Banane", "Zitrone"]
}
console.log("testObjekt", testObjekt);








// Objekt klappt nur mit Objekten also mit { } definiert
// const studentObjekt = {
//     name: "Max",
//     numberOfCourses: 0
// };

// console.log(Object.keys(studentObjekt));
// console.log(Object.values(studentObjekt));
// console.log(Object.entries(studentObjekt));