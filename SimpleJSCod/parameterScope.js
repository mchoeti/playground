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


const items = [15, 25, 30];

function summe(liste) {
    // Summe berechnen
    let sum = 0;
    for (let element of liste) {
        sum += element;
        //console.log("Summe ", sum);
    }
    // gibt die Summe zurück damit ich weiterarbeiten kann
    return sum;
    // ein Return beendet immer die Funktion daher kommt das hier nicht mehr zum Einsatz
    console.log("Hallo Welt");
}

let itemsSum = summe(items);
// ist da die Summe 70 drinnen ?
console.log(itemsSum === 70);
console.log(summe(items));

// Eine Funktion um den INdex zu ermitteln.
function indexOf(liste, value) {
    for (const i in liste) {
        // Ist Liste i gleich der Value ? 
        if (liste[i] === value) {
            //Wenn gefunden gib mir die Position und beende die For Schleife
            return i;
        }
        // Bug warum auch immer er gibt nur mehr - 1 zurück
        // else {
        //     return "Leider nicht gefunden";
        // }
    }
}

const liste = ["Hallo", "Welt", "oder so", "!!"];
// Hier ruf ich gleich mal die Funktion indexOf auf
// und suche nach dem Wert "oder so"
console.log(indexOf(liste, "Welt"));
// oder bei nicht auffinden des Strings
//console.log(indexOf(liste, "sicher nicht"));