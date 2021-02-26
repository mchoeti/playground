//"use strict";
/*jshint esversion: 6 */

const studentModule = {
    students: ["Max Müller"],
    onAddStudent: function(name) {
        console.log("Hi");
    },
    addStudent(name) {
        this.students.push(name);
        this.onAddStudent(name);
    },
    removeStudent(name) {
        this.students.pop(name);
    }

};

const bankModule = {
    chargeForStudent(name) {
        console.log("Beitrag wird abgebucht für: " + name);
    }
};

// Hier einfach das studentMOdule ausführen mit der Eigenschaft // Zusätzlich kommt auch 2 mal HI
studentModule.addStudent("Super Rudi");
studentModule.addStudent("Evarello");
console.log(studentModule.students);

// // Ohne Name wird der letze entfernt
studentModule.removeStudent();
console.log("Letzer entfernt: ", studentModule.students);

// Und nun noch den Abbucher einbauen er
// Dann könnte ich beispielswiese das auch gleich überschreiben lassen wenn ein neuer Student kommt 
// Damit wird auch das HI entfernt.
studentModule.onAddStudent = (name) => {
    bankModule.chargeForStudent(name);
};

// Da kommt natürlich erst zum Einsatz wenn ein neuer Student dazukommt
studentModule.addStudent("Rudi Rüssel");