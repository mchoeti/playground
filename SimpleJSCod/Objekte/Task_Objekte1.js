//"use strict";
/*jshint esversion: 6 */

// Das Ziel ist, dass in der Variable "DE_TO_EN" ein Objekt  drinnen steht: {"hallo": "hello", "heute": "today",...}.
// Schreibe also Code, der die beiden Variablen "LANGUAGE_DE" und "LANGUAGE_EN" zu dem Objekt in der Variable "DE_TO_EN" zusammenführt.
// Tipp klappt mit Schleifen

const LANGUAGE_DE = [
    "hallo",
    "heute",
    "sprachkurs",
    "willkommen",
    "mikrofon",
    "und"
];

const LANGUAGE_EN = [
    "hello",
    "today",
    "language course",
    "welcome",
    "microphone",
    "and"
];

let DE_TO_EN = {};

for (const index in LANGUAGE_DE) {
    const deutschesWort = LANGUAGE_DE[index];
    //console.log(deutschesWort);
    const englischesWort = LANGUAGE_EN[index];
    //console.log(englischesWort);

    // Englisches Word auf die Position des Deutschn gesetzt
    DE_TO_EN[deutschesWort] = englischesWort;
}

// Kurze Prüfung pb DE auch En enspricht
console.log("DE_TO_EN", DE_TO_EN);

// aufpassen, keine Funktion sondern ein Arrays
console.log("DE_TO_EN", DE_TO_EN['hallo']);