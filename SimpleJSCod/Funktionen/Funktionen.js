//"use strict";
/*jshint esversion: 6 */
// heute gehts um Funktionen

// Simple aber Fehlerhaft
// FUnktionsdefinition
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
sayHello2("Erika");

// Funktionsaufruf einer bestehenden Funktion
console.log(Math.max(1, 2, 3));

// Erweiterung mehrerer Funktionsparameter
function sayHello2(sayHelloName, language) {
    if (language === "de") {
        console.log("Hallo und Willkommen " + sayHelloName + "!");
    } else if (language === "en") {
        console.log("Hello and welcome " + sayHelloName + "!");
    }
}
sayHello2("Christian", "de");
sayHello2("Max", "de");
sayHello2("Erika", "en");


// Was sind eigentlich Standardparameter
// Wenn ich immer einen Standardwert vergebe, dann kann ich den auch so setzen.
/// Beispielsweise eine standardmäßige deutsche Begrüßung
function sayHello2(sayHelloName, language = "de") {
    if (language === "de") {
        console.log("Hallo und Willkommen " + sayHelloName + "!");
    } else if (language === "en") {
        console.log("Hello and welcome " + sayHelloName + "!");
    }
}

console.log("Werte mit Standardparameter");
sayHello2("Chris", "en");
sayHello2("Hermann");
sayHello2("Trude");