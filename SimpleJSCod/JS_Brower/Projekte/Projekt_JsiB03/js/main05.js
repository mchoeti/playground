//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete 
document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("add-student");
    // Einen neuen Eventlistener um geworfen zu werden wenn Maus das Formular verläss.
    const nameInput = document.getElementById("nameInput");

    addStudentButton.addEventListener("click", (event) => {
        //Speziell ist es so, dass bei einem Formular es immer abgeschickt wird. UM das zu verhindern preventen wir es mal
        event.preventDefault();
        console.log("Click check");
        //const nameInput = document.getElementById("nameInput");
        console.log(nameInput.value);

    });

    nameInput.addEventListener("change", (event) => {
        console.log("Du bist aus dem Fomular: ", nameInput.value);
    });

    // Acuh cool ein Key Up Event
    nameInput.addEventListener("keyup", (event) => {
        console.log("KeyUp: ", nameInput.value);
    });

});

// Siehe auch dazu
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener