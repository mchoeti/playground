//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete 
document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("add-student");
    // Einen neuen Eventlistener um geworfen zu werden wenn Maus das Formular verläss.
    const nameInput = document.getElementById("nameInput");
    const studentList = document.getElementById("students-list");

    addStudentButton.addEventListener("click", (event) => {
        //Speziell ist es so, dass bei einem Formular es immer abgeschickt wird. UM das zu verhindern preventen wir es mal
        event.preventDefault();
        console.log("Click check");
        //const nameInput = document.getElementById("nameInput");
        console.log(nameInput.value);
        const text = nameInput.value;

        // Damit er Leereingaben ignoriert
        if (text === "") {
            return;
        }

        // Elemente erstellen 
        const strongElement = document.createElement("strong");
        strongElement.appendChild(document.createTextNode(text));
        const liElement = document.createElement("li");
        liElement.appendChild(strongElement);
        // muss ich hinzufügen damit es in der Liste da ist. Kommentiert es mal aus wenn du es nicht glaubst
        liElement.classList.add("list-group-item");
        studentList.appendChild(liElement);

        // Wieder auf Ausgangswert setzen
        nameInput.value = "";
    });

});

// Siehe auch dazu
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener