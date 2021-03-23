//"use strict";
/*jshint esversion: 6 */
//const fs = require("fs");
// Simple Sample für eine API. 
// - zuerst  npm init
// - dann file packagge.json schließen 
// - Axios installieren 
// ``npm install --save axios ``

const axios = require("axios");
const url = "https://api.spacexdata.com/v3/launches/latest"

// Alles in einer Var

const testVar = axios.get(url);
console.log(testVar);

testVar.then((response) => {
    console.log(response.data.rocket);
});