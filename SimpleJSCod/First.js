//"use strict";
/*jshint esversion: 6 */
// welcome to a single and simple line
// declare some variables
var line;
var number = 10;

//do a simple for loop
for (i = 0; i <= number; i++) {
    console.log("This is just a simple loop where number = " + i);
}

// thank the audience
console.log("Hello World this was just a simple one");

// Ein gute Nacht Code fürs Schafe zählen
let sheep = 0;
for (sheep = 0; sheep <= 100; sheep++) {
    console.log(sheep + " Schaf");
    if (sheep === 7) {
        console.log("Gute Nacht");
        break;
    }
}

// Nach so einem Tag kann man nur ein paar kleiner Programme schreiben
const arbeitsTage = [
    ["Montag", "Dienstag", "Mittwoch"],
    ["Weekend"],
    ["Donnerstag", "Freitag"],
];

function getFunnyDays() {
    console.log(arbeitsTage);
    // Anzahl der kürzesten Wochentage
    let smallestPeriod = 0;
    // als Startvariable, weil -1 kann der Arraywert nicht sein , brauch ich später für IF
    // Hier wird
    let smallestPeriodIndex = -1;
    for (let index in arbeitsTage) {
        let tage = arbeitsTage[index];
        // Array durchgehen Element 0 wird ausgegeben  - im ersten Durchlauf
        console.log(tage);
        // Array durchgehen Länge Element 0 wird ausgegeben - im ersten Durchlauf
        // danach gibt er immer die Länge des Arrays aus.
        console.log(tage.length);

        // Sind wir im ersten Schleigendurchlauf ?
        // Daher Frage ich mal
        if (smallestPeriodIndex === -1) {
            // bin ich also noch im ersten Durchlauf, möchte ich den smallestPeriodIndex von -1 auf aktuellen Wert setzen i steht dabei für den Zähler.
            smallestPeriodIndex = index;
            // hier befülle ich die Var smallestPeriod mir der länge der Tage.
            smallestPeriod = tage.length;
        }
        // Zum besseren Verständnis hab ich hier 2 If Abfragen gemacht.
        // In der ersten wird festgestellt gut, kürzester Kurs
        // In der 2. wird grefragt ob de jetzt betrachtete Kurz kürzer ist als der vorige
        if (tage.length < smallestPeriod) {
            smallestPeriodIndex = index;
            smallestPeriod = tage.length;
        }
    }
    // muss natürlich noch zurückgegeben werden 
    return smallestPeriodIndex;

}
//getFunnyDays();
console.log("Der Kürzeste Intervall ist: ", getFunnyDays());