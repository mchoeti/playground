//"use strict";
/*jshint esversion: 6 */
// heute gehts um Funktionen

// Simple aber Fehlerhaft
function sayHello() {
    console.log("Hello World");
    //console.log(name);
}
// Meine erste Hello World Funktion
sayHello();

// Besser mit Funktionsparameter
function sayHello2(sayHelloName) {
    console.log("Hallo " + sayHelloName + "!");
}
sayHello2("Christian");
sayHello2("Max");
sayHello2("Erika );