//"use strict";
/*jshint esversion: 6 */

const b = function b() {
    console.log("B wurde ausgeführt");
};

const a = function a() {
    const text = "A()!";
    b();
    console.log(text);
};

console.log("Start!!!!" + 1111);

//debugger;

a();