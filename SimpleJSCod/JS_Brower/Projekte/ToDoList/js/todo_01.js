//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete   

document.addEventListener("DOMContentLoaded", () => {
    const addNewTodo = document.querySelectorAll(".new-todo");
    const forTheKey = document.querySelector(".new-todo");
    const todoListElement = document.querySelector(".todo-list");
    //const removeFilters = document.querySelector(".filters");
    console.log("Simpler Hallo Welt Check");

    // Check ob Enter Taster oder nicht
    forTheKey.addEventListener("keypress", (event) => {
        console.log(event.code);
        if (event.code === "Enter") {
            console.log("Es ist die Enter Taste");
            //alert("Enter wurde gedrückt");

            // Nun muss HTML Struktur mit JS erzeugt werden.
            // Zuerst Button dann label und input class 
            // Dann das in ein DIV verpacken 
            // und dass dann in ein LI verpacken
            const newButtonElement = document.createElement('button');
            newButtonElement.classList.add("destroy");
            console.log(newButtonElement);

            // Neues Label 
            const newLabelElement = document.createElement('label');
            newLabelElement.appendChild(
                document.createTextNode(forTheKey.value)
            );
            console.log(newLabelElement);

            // Neue CheckBox und Klasse vergeben
            const newInputCheckbox = document.createElement('input');
            newInputCheckbox.type = "checkbox";
            newInputCheckbox.classList.add("toggle");

            // Neues div
            const newDivElement = document.createElement("div");
            newDivElement.classList.add("view");
            newDivElement.appendChild(newInputCheckbox);
            newDivElement.appendChild(newLabelElement);
            newDivElement.appendChild(newButtonElement);

            // Neues List Elemente
            const newListElement = document.createElement("li");
            newListElement.appendChild(newDivElement);

            //Und Jetzt mit Prepend als erste hinzufügen 
            //todoListElement.prepend(newListElement);
            // oder mit APPEND hinten anhängen
            todoListElement.append(newListElement);
            //todoListElement.prepend(newLiElement);




            //Ausgangsbasis =      
            /* <li>
                    <div class="view">
                        <input class="toggle" type="checkbox">
                        <label>Buy a unicorn or 2</label>
                        <button class="destroy"></button>
                    </div>
                </li> */

        }
    });


});