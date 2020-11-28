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
        //console.log(currentWord);
        if (currentWord === word) {
            // Wenn gefunden bitte schau im Englischen nach und gib gleiche Position zurück
            return LANGUAGE_EN[i];
        }
    }
    return word;
}

console.log('translateWord("heute")', translateWord("heute"));
console.log('translateWord("Sprachkurs")', translateWord("Sprachkurs"));
console.log('translateWord("Sprachkurs2")', translateWord("Sprachkurs2"));

// Der erste Buchstabe eines Wortes soll in Uppercase umgewandelt werden.
function ucFirst(word) {
    const firstLetter = word[0];
    // Slice gibt mir das zurück was ich möchte, ich beginne beim 2. Zeichen bis zum Ende
    const rest = word.slice(1);
    // Hier ein Test 
    console.log(firstLetter, rest);
    // Erster Buchstabe zu uppercase und dann eben den Rest
    return firstLetter.toUpperCase() + rest;
}

console.log('ucFirst("sprachkurs")', ucFirst("sprachkurs"));


// Jetzt übersetzren wir mal einen gesamten Satz
// Beispielsweise  translateSentence("Hallo und willkommen beim Sprachkurs")
// // Rückgabewert: "Hello and welcome beim language course"

function translateSentence(sentence) {
    // Zerlegen des Satzes
    const words = sentence.split(" ");

    // Achtung for of Schleife weil ich mir die Werte ansehen will.
    const translatedWords = [];
    for (const word of words) {
        const translatedWord = translateWord(word);
        translatedWords.push(translatedWord);
    }
    console.log("translatedWords: ", translatedWords);
    console.log(words);

    // Jetzt bauen wir das wieder Zusammen
    const translatedSentence = translatedWords.join(" ");
    // Nur der Satz 
    //return translatedSentence;
    // Erstes Zeichen groß, also einfach die Funktion die wir schon oben geschrieben haben drum herum.   
    return ucFirst(translatedSentence);

}

console.log("translateSentence: ", translateSentence("Hallo und willkommen beim Sprachkurs"));