//"use strict";
/*jshint esversion: 6 */

// 1. Variante Bekannte Funktion | // Funktion declaration

function sayHello() {
    console.log("sayHello");
}
sayHello();

// 2. Variante - Anonyme Function | // Function expression
const sayHello2 = function() {
    console.log("Hello 2");
}
sayHello2();

// 3. Variante Fat Error Funktion | // Function expression
const sayHello3 = () => {
    console.log("Hello 3");
}
sayHello3();

// Funktion ist irgendwie auch ein Wert für eine Variable