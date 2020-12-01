//"use strict";
/*jshint esversion: 6 */

// Geschweifte Klammern erstellen ein Objekt
// Ich schreib meistens immer links die Eigenschaft ohne Klammer
const student = {
    name: "Max",
    alter: 30,
    kurs: "Deutsch"
};

console.log(student);

// Alter hat sich erhöht
student.alter = 31;
// neue Eigenschaft setzet
student.subject = "Englisch";

//console.log(student.alter, student.name);
console.log(student.alter);
console.log(student);

// Mal das Alter Löschen
delete student.alter;
console.log(student);


// bei komplexeren Werten gehen auch Zahlen und Strings

const student2 = {
    name: "Sissy",
    alter: 20,
    kurs: "Deutsch",
    "2019-2020": "Ungarisch",
    "gewünschter Kurs": "Portugisisch"
}
console.log(student2);


const property = "name";
console.log(student[property]);