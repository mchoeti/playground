//"use strict";
/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", () => {

    const cardHeaders = document.getElementsByClassName("card-header");
    console.log("CardHeadsers", cardHeaders);

    for (const cardHeader of cardHeaders) {
        //console.log("CardHeadsers", cardHeaders);
        // Array cardHeaders wird Wert für Wert durchgegangen und der Wert in der Variablen cardHeader abgespeichert. Die kann sich natürlich irgendwie  nennen.
        cardHeader.addEventListener("click", () => {

            alert("Aber Hallo du hast den HEader geklickt");
            console.log("und das wird auch in der Konsole ausgegeben");
        });
    }

    // Auch hier werden wieder in der HTML Collection folgende Dinger ausgegeben
    const payElemente = document.getElementsByTagName("p");
    console.log(payElemente);
});