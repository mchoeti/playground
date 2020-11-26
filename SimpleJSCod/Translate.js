//"use strict";
/*jshint esversion: 6 */

// Einfaches Wörterbuch entwickeln
// Deutsch und Englisch
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

function translateWord(word) {
    word = word.toLowerCase();
    for (const i in LANGUAGE_DE) {
        const currentWord = LANGUAGE_DE[i];
        // mal schauen ob was rauskommt
        console.log(currentWord);
    }
}

console.log('translateWord("Sprachkurs")', translateWord("Sprachkurs"));