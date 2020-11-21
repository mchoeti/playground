//"use strict";
/*jshint esversion: 6 */

const courses = [
    ["Julia", "Max", "Doris"],
    ["Alpha", "Beta", "Gamma", "Delta"],
    ["Christian", "Anika"],
    ["Alpha", "Beta", "Gamma", "Delta", "Peta"],
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
    return smallestCourse;
}
console.log("getSmallestCourse()", getSmallestCourse());