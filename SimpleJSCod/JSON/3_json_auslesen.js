//"use strict";
/*jshint esversion: 6 */

const data = [{
        "firstname": "Max",
        "age": 21,
        "enrolled": true
    },
    {
        "firstname": "Susi",
        "age": 35,
        "enrolled": false
    },
];

const dataAsJson = JSON.stringify(data);
console.log("dataAsJson", dataAsJson);
console.log("Type of dataAsJson", typeof dataAsJson);

// JEtzt geben wir mal alle aus
// Mit Writefile Synch ,
const fs = require("fs");
// damit wird data.json erstellt
fs.writeFileSync("data.json", dataAsJson);