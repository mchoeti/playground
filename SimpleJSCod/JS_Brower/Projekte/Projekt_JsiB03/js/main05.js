//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete 
document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("add-student");

    addStudentButton.addEventListener("click", (event) => {
        //Speziell ist es so, dass bei einem Formular es immer abgeschickt wird. UM das zu verhindern preventen wir es mal
        event.preventDefault();
        console.log("Click check");
        const nameInput = document.getElementById("nameInput");
        console.log(nameInput.value);
    });

});