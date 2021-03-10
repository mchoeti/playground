//"use strict";
/*jshint esversion: 6 */

const data = {
    students: ["Max", "Moritz"],
    numberOfStudents: 2
};

if (data.numberOfStudents <= 2) {
    data.students.push("Erika");
    data.numberOfStudents++;
}

console.log(data.students);
console.log(data.numberOfStudents);