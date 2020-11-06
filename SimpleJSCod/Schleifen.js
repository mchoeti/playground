// simples aber einfaches JS für Anfänger.
//"use strict";
/*jshint esversion: 6 */

let counter = 0;
while (counter < 5) {
    //counter +1 
    counter++;
    console.log("Mein Counter hat den Wert " + counter);
}

// for gleich mal um 2 erhöhen +=2 und wenn du reduzieren möchstest dann eben -=2
for (let counter1 = 0; counter1 < 10; counter1 += 2) {
    console.log(counter1);
}
// gleich mal um 3 reduzieren , wenn nur um eines dann eben beispielsweise counter2--
for (let counter2 = 21; counter2 > 1; counter2 -= 3) {
    console.log(counter2);
}

// Und damit wird der Sepplhuber angezeigt.
// Wenn wir eine Liste haben mit Elementen macht es Sinn, das Plural zu verwenden 
const students = ["Max", "Fritz", "Sepplhuber"];
for (let i = 0; i < students.length; i++) {
    console.log("i: ", i);
    console.log(students[i]);
}

// eine bessere und schnellere Schreibweise wäre diese
// aber eben hier wird eben alles ausgegeben
// WICHIG: Hier werden alle Indices ausgegeben
for (let i in students) {
    console.log("i: ", i);
    console.log(students[i]);
}

// Mal eine Zierleiste
console.log("***************************");

// Wenn wir nur den Wert haben wollen also die sogenannte For of Schreibweise
// WICHIG: Hier werden nur die Werte ausgegben
// Hier möchten wir einen Studenten rausholen und daher nehmen wir hier Singular
for (const student of students) {
    console.log(student);
}