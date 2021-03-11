//"use strict";
/*jshint esversion: 6 */

// Heute entwickeln wir mal einen Countdown
console.log("3................");

/*
// Simples counten 
setTimeout(() => {
    console.log("2...........");
}, 1000);
setTimeout(() => {
    console.log("1...........");
}, 2000);
setTimeout(() => {
    console.log("START !!!!");
}, 3000);
*/

// Das würde ja auch noch klappen
setTimeout(() => {
    console.log("2............");
    setTimeout(() => {
        console.log("1...........");
        setTimeout(() => {
            console.log("Start!!");
        }, 1000);
    }, 1000);
}, 1000);