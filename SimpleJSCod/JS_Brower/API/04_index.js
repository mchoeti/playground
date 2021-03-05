//"use strict";
/*jshint esversion: 6 */


const axios = require("axios").default;
// Mal neu schnelle Suche einbauen
function search(term) {
    return axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
            params: {
                api_key: "PtTpskZ8Xa5Mixq7qAhs9LizA9v9jSMHRzwebVTI",
                query: term
            }
        })
        .then(function(response) {
            return response.data.foods;
            // for (const food of response.data.foods) {
            //     //console.log(food.description);
            //     console.log(food.fdcId + " : " + food.description);
            // }
        })
}

// search("Apple , raw").then(function(o) {
//     console.log(o);
// });


// Nur die Daten
function info(fdcId) {
    return axios.get("https://api.nal.usda.gov/fdc/v1/food/" + fdcId, {
            params: {
                api_key: "PtTpskZ8Xa5Mixq7qAhs9LizA9v9jSMHRzwebVTI"
            }
        })
        .then(function(response) {
            return response.data.description;
            // und hier dann halt die alles was in den Daten drinnensteht vorher aber obenstehendes ausklammen
            //return response.data;
        });
}

info(1103344).then(function(p) {
    console.log(p);
});