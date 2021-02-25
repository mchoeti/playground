//"use strict";
/*jshint esversion: 6 */

const studentModule = {
    students: ["Susi Sorglos"],
    addStudent(name) {
        this.students.push(name);
        console.log(name);
    }
};

const bankModule = {
    chargeStudent(name) {
        console.log("Beitrag wird abgebucht für: " + name);
    }
};

// Neuen Studenten hinzufügen
const name = "Stefan Super";
studentModule.addStudent(name);
bankModule.chargeStudent(name);

// Mal alle Studtenten ausgeben
console.log(studentModule);
console.log(studentModule.students);