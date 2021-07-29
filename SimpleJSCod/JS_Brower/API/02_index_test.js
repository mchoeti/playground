//"use strict";
/*jshint esversion: 6 */

const myNumbers = [1102747, 1102748];

const axios = require("axios").default;
myNumbers.forEach(element => {
    console.log("Call 1 ", element);
});

axios.get("https://api.nal.usda.gov/fdc/v1/food/1102747", {
        params: {
            api_key: "PtTpskZ8Xa5Mixq7qAhs9LizA9v9jSMHRzwebVTI"
            //query: "Apple Juice"
        }
    })
    .then(function (response) {
        console.log(response.data);
    });