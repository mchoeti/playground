//"use strict";
/*jshint esversion: 6 */
// console.log(document);
// Mehr zu Events gibt es Hier
//https://developer.mozilla.org/de/docs/Web/Events

// hier verwendet auch mit surround
//https://stackoverflow.com/questions/42363030/visual-studio-code-surround-with
/* Place the cursor at the start of the first line, press CTRL+ALT+DOWN to add another cursor below on the next line. Keep doing that until you have a cursor in front of all your words.

Then just type " then END then " and all your lines are surrounded by quotes.
*/

//"DOMContentLoaded"
//"mouseenter"
//"mouseleave"

document.addEventListener("DOMContentLoaded", () => {

    const dateElement = document.getElementById("date-countdown");
    dateElement.addEventListener("click", () => {
        console.log("Jetzt aber hab ich geklickt und das Datum auch geändert");
        dateElement.innerText = "28.12.2021";
    });

    dateElement.addEventListener("mouseenter", () => {
        console.log("Omg du hast das Datum geändert");
        dateElement.innerText = "29.12.2021";
    });

    dateElement.addEventListener("mouseleave", () => {
        console.log("Phu nochmals gutgegangen :-)");
        dateElement.innerText = "20.12.2021";
    });

    // Oder mit einer Funktion 
    // Eine Variable hat als Wert eine Funktion
    const meinOnClikElement = () => {
        dateElement.innerText = "24.07.2021";
        console.log("dateElement wurde nochmals geklickt!");
    };

    // Funktion wird sofort ausgeführt
    //dateElement.addEventListener("click", meinOnClikElement());
    // Funkition wird NICHT sofot ausgeführt sondern wir warten auf das Event
    dateElement.addEventListener("click", meinOnClikElement);

});