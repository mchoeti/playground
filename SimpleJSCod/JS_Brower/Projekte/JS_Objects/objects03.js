//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete  // kleine Update
// a normales F5 reicht auch

console.log("Hello World im am back");
const printStudentName = function() {
    console.log("His name is: " + this.lastname + ", " + this.firstname);
};

const students = [{
        firstname: "Max",
        lastname: "Huber",
        printName: printStudentName
    },
    {
        firstname: "Erika   ",
        lastname: "Huber",
        printName: printStudentName
    },

];

// Das this keyword bezieht sich immer auf das for den .
students[0].printName();
students[1].printName();


// ZWecks this
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/this