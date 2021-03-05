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
        });
}

search("Apple , raw").then(function(o) {
    console.log(o);
});


//