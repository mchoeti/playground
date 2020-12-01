//"use strict";
/*jshint esversion: 6 */

// Geschweifte Klammern erstellen ein Objekt
// Ich schreib meistens immer links die Eigenschaft ohne Klammer
const student = {
    name: "Max",
    alter: 30,
    kurs: "Deutsch",
    enrolled: false
};

// Wenn Student enrolled ist soll Hallo Welt ausgegeben werden
// Wird überbrüft ob die Eigenschaft existiert und einen positiven Wert hat
if (student.enrolled) {
    console.log("Hallo Welt");
}

// Bei Zugriff auf Eigenschaften die nicht exisitieren wird undefined ausgegeben.
console.log(student.unbkannt);

// Prüfen of Eigenschaft existiert, Wert komplett egal
if ("enrolled" in student) {
    console.log("Enrolled gibts");
}