//"use strict";
/*jshint esversion: 6 */
const items = [15, 20, 30];

/**
 * 
 * @param {number} liste Die Liste die aufsumiert wird
 * @returns {number} Die komplette Summe
 */
function summe(liste) {
    let s = 0; //
    for (let element of liste) {
        s += element;
    }
    return s;
}

let itemsSum = summe(items);
console.log(itemsSum === 70);