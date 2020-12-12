//"use strict";
/*jshint esversion: 6 */

const https = require("https");
const http = require("http");

const url = "https://api.spacexdata.com/v3/launches/latest";

// Rufe mal die URL auf und dann gibt eine Antwort zurück
// Damit kann ich mit dieser einzelnen Funktion gleich alles zurückholen. GEIL !!!!
https.get(url, res => {

    let myData = "";
    // hier teilen wir data gleich mal in Packete ab
    res.on("data", chunk => {
        console.log("chunk", chunk);
        myData += chunk;
    });
    // Wenn das dann fertig ist, dann kann ich mittels Event end in der on() Funktion mir auch gleich myData ausgeben
    res.on("end", () => {
        console.log(myData);
        // und dann machen wir gleich mal ein JSON Parse um das in ein JavaScript Objekt umwandeln.
        console.log(JSON.parse(myData));
        // Aber aufpassen, ich kann nur innerhalb dieser Callback Funktion zugreifen.
        // beispielsweise erstellen
        dataAsObject = JSON.parse(myData);
        console.log("##############################");
        console.log("Flugnummer " , dataAsObject.flight_number);
    });
    
    // damit geben wir mal schnell den Statuscode zurück, also bei einem 200er alles super.
    console.log(res.statusCode);
});

