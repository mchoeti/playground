// Simples SAMPLE
//"use strict";
/*jshint esversion: 6 */

const axios = require("axios").default;
axios.get("https://api.nal.usda.gov/fdc/v1/food/1102747", {
        params: {
            api_key: "xxPtTpskZ8Xa5Mixq7qAhs9LizA9v9jSMHRzwebVTI"
                //query: "Apple Juice"
        }
    })
    .then(function(response) {
        console.log(response.data);
    });