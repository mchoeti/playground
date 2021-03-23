//"use strict";
/*jshint esversion: 6 */

//const fs = require("fs");


// Simple Sample für eine API.

// Endpunkt:  
// https://api.nal.usda.gov/fdc/v1/foods/list?api_key=xxxxxxxxxxxxxxxxxxxxx

// - zuerst  npm init
// - dann file packagge.json schließen 
// - Axios installieren 
// ``npm install --save axios ``

const axios = require("axios");
const url = "https://api.spacexdata.com/v3/launches/latest"

// Nur AXIOS
axios.get(url).then((response) => {
    console.log(response.data.rocket);
});

// Dann in eine Variable
/*
const testVar = axios.get(url);
console.log(testVar);

testVar.then((response) => {
    console.log(response.data.rocket);
});
*/