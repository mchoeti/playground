//"use strict";
/*jshint esversion: 6 */


// Das is mal meine Basis
document.addEventListener("DOMContentLoaded", function() {

});

// bisserl mit Mouseover spielen
document.addEventListener("DOMContentLoaded", function() {
    const contactMe = document.getElementById("contact-me");
    contactMe.addEventListener("click", (meineVar) => {
        console.log(meineVar);
        //Damirt wird das Ziel, also das Emailöffnen , quasi die Default Aktion verhindert.
        event.preventDefault();
        alert("Kontakt wurde aktiviert");

    });
});

// prevent(verhindern) der STd Aktion und führe anstellen den JS Code aus. nennt sich JS Enhancement
document.addEventListener("DOMContentLoaded", function() {
    const contactMe = document.getElementById("contact-me");
    contactMe.addEventListener("mouseover", (meineVar) => {
        console.log(meineVar);
        console.log("Hallo MouseOver");
        //alert("Kontakt wurde aktiviert");
    });
});