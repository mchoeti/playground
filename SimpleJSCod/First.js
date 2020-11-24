//"use strict";
/*jshint esversion: 6 */
// welcome to a single and simple line
// declare some variables
var line;
var number = 10;

//do a simple for loop
for (i = 0; i <= number; i++) {
    console.log("This is just a simple loop where number = " + i);
}

// thank the audience
console.log("Hello World this was just a simple one");

// Ein gute Nacht Code fürs Schafe zählen
let sheep = 0;
for (sheep = 0; sheep <= 100; sheep++) {
    console.log(sheep + " Schaf");
    if (sheep === 7) {
        console.log("Gute Nacht");
        break;
    }
}

// Nach so einem Tag kann man nur ein paar kleiner Programme schreiben
const stressTage = [
    ["Montag", "Dienstag", "Mittwoch"],
    ["Donnerstag", "Freitag"],
];

function getFunnyDays() {
    console.log(stressTage);
    let smallestDay = 0;
    let smallestPeriodIndex = 1;
    for (let index in stressTage) {
        let tage = stressTage[index];
        // Array durchgehen Element 0 wird ausgegeben  - im ersten Durchlauf
        console.log(tage);
        // Array durchgehen Länge Element 0 wird ausgegeben - im ersten Durchlauf
        console.log(tage.length);

        // Hm..  IfAbfrage neu bauen 
        if (stressTage.length < smallestDay) {
            smallestIndex = index;
            console.log("Test" + smallestIndex);
        }
    }
}

getFunnyDays();




// for (let index in courses) {
//     let course = courses[index];
//     // Check ob die For Schleife klappt.
//     //console.log(course);
//     // Hier fragen wir ob wir noch im ersten Schleifendurchlauf sind.
//     if (smallestIndex === -1 || course.length < smallestCourse) {
//         smallestIndex = index;
//         smallestCourse = course.length;
//     }
// }