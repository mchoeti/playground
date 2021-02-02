//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete 

document.addEventListener("DOMContentLoaded", () => {
    const addStudentButton = document.getElementById("add-student");
    const nameInput = document.getElementById("nameInput");
    const studentList = document.getElementById("students-list");
    const agbInput = document.getElementById("agbInput");


    addStudentButton.addEventListener("click", (event) => {
        event.preventDefault();

        console.log("agbInput:", agbInput.checked);

        if (agbInput.checked === false) {
            alert("Bitte AGB lesen!");
            return;
        }

        const text = nameInput.value;

        if (text === "") {
            return;
        }

        const strongElement = document.createElement("strong");
        strongElement.appendChild(document.createTextNode(text));

        const liElement = document.createElement("li");
        liElement.appendChild(strongElement);
        liElement.classList.add("list-group-item");

        studentList.appendChild(liElement);

        nameInput.value = "";
    });

    nameInput.addEventListener("keypress", (event) => {
        // Damit geben wir auch gleich mal alle Infs aus. Man kann bspl anhand des keyCode die Taste fixieren
        console.log(event);
        // if (event.keyCode === 13) {
        //     alert("Enter wurde gedrückt");
        // }
        if (event.key === "Enter") {
            alert("Enter wurde gedrückt");
        }

    });


});