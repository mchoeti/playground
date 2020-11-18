//"use strict";
/*jshint esversion: 6 */
// heute gehts um Funktionen

const message = "Test message";

function sayHello(name) {
    // Achtung das ist eine NEUE Variable !!!
    const message = "Hallo " + name + " !";
    console.log(message);
}

sayHello("Michael");
console.log(message);

// Beispiel mit
const students = ["Michael"];

function addStudent(name) {
    // Student mit PUSH hinzufügen
    // Bisserl umgebaut und eine IF hinzugefügt, wenn Michael schon vorhanden ist soll eine Fehlermeldung kommen
    if (name === "Michael") {
        console.log(name + " ist bereits vorhanden");
        return;
    }
    students.push(name);
}

addStudent("Christian");
addStudent("Sepp");
addStudent("Michael");
addStudent("Trude");
console.log(students);