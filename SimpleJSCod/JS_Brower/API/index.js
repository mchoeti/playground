// Simples SAMPLE
// https://api.nal.usda.gov/fdc/v1/foods/list?api_key=xxPtTpskZ8Xa5Mixq7qAhs9LizA9v9jSMHRzwebVTI

//"use strict";
/*jshint esversion: 6 */

const axios = require("axios").default;

// Einfach und direkt wäre das so, aber das macht man eigentlich nicht
// axios.get("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=xxPtTpskZ8Xa5Mixq7qAhs9LizA9v9jSMHRzwebVTI&query=Apple")
//     .then(function(response) {
//         //console.log(response);
//         console.log("Status is: ", response.status);
//         console.log("Insgesamt gibts: ", response.data.totalHits);
//         for (const food of response.data.foods) {
//             //console.log(food.description);
//             console.log(food.fdcId + " : " + food.description);
//         }

//     });

axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params: {
            api_key: "xxPtTpskZ8Xa5Mixq7qAhs9LizA9v9jSMHRzwebVTI",
            query: "Apple Juice"
        }
    })
    .then(function(response) {
        //console.log(response);
        console.log("Status is: ", response.status);
        console.log("Insgesamt gibts: ", response.data.totalHits);
        for (const food of response.data.foods) {
            //console.log(food.description);
            console.log(food.fdcId + " : " + food.description);
        }

    });