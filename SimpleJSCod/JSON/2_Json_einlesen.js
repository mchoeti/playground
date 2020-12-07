//"use strict";
/*jshint esversion: 6 */

const fs = require("fs");
const data = fs.readFileSync("data.json", { encoding: "utf-8" })

console.log("data", data);
console.log("type of data", typeof data);

// Damit wird das als String geholt und in ein JS Objekt umgewandetl 
// Kann alles sein, hier is es eben ein Arrray
console.log(JSON.parse(data));
// und hier holen wir uns das erste element des Arrays
const dataObj = JSON.parse(data);
console.log("Erstes Elemen im Array", dataObj[0]);