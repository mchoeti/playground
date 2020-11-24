//"use strict";
/*jshint esversion: 6 */

const courses = [
    ["Alpha", "Beta", "Gamma"],
    ["Christian", "Anika", "Peter"],
    ["Alpha", "Beta"]
];


function getSmallestCourse() {
    // Hier stehen die Anzahl der Teilnehmer die im kürzesten Kurs sind 
    let smallestCourse = 0;
    // um festzustellen ob wir noch im ersten Schleigenurchlauf sind.
    let smallestIndex = -1;

    // Wir beginnen damit das Array durchzupharen
    for (let index in courses) {
        let course = courses[index];
        // Check ob die For Schleife klappt.
        //console.log(course);
        // Hier fragen wir ob wir noch im ersten Schleifendurchlauf sind.
        if (smallestIndex === -1 || course.length < smallestCourse) {
            smallestIndex = index;
            smallestCourse = course.length;
        }
    }
    // nicht auf den Rückgabewert vergessen
    return smallestIndex;
}
console.log("getSmallestCourse()", getSmallestCourse());

debugger;
// 1B Funktion die einen Teilnehmer in eine Funktion einfügt.
console.log("***************************************");

function addStudent(name) {
    // Zuerst ermitteln welcher Kurs am wenigsten Teilnehmer hat
    const smallestCourse = getSmallestCourse();
    //console.log(smallestCourse);
    courses[smallestCourse].push(name);

}

addStudent("Der Neue");
addStudent("Der Neue1");
addStudent("Der Neue2");
console.log(courses);