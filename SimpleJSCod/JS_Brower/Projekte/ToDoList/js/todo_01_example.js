//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete   

document.addEventListener("DOMContentLoaded", () => {
    const addNewTodo = document.querySelectorAll(".new-todo");
    const forTheKey = document.querySelector(".new-todo");
    const todoListElement = document.querySelector(".todo-list");
    //const removeFilters = document.querySelector(".filters");
    console.log("Simpler Hallo Welt Check");

    // // Checken welche Tasten gedrückt werden mit which bekommt man auch gleich die Taste
    // Mit Code erhält man den Namen zurück
    forTheKey.addEventListener("keypress", (event) => {
        //console.log(event.which);
        //console.log(event);
        console.log(event.code);
        // Mal abfragen ob es die Enter taste warum
        if (event.code === "Enter") {
            console.log("Das war die Enter Taste");
            // Button und LABEL Anlegen und HTML Struktur nachbauen 
            const newButtonElement = document.createElement("button");
            newButtonElement.classList.add("destroy");

            const newLabelElement = document.createElement("label");
            newLabelElement.appendChild(
                document.createTextNode(forTheKey.value)
            );

            const newInputCheckbox = document.createElement("input");
            newInputCheckbox.type = "checkbox";
            newInputCheckbox.classList.add("toggle");

            const newDivElement = document.createElement("div");
            newDivElement.classList.add("view");
            newDivElement.appendChild(newInputCheckbox);
            newDivElement.appendChild(newLabelElement);
            newDivElement.appendChild(newButtonElement);

            const newLiElement = document.createElement("li");
            newLiElement.appendChild(newDivElement);

            todoListElement.prepend(newLiElement);

        }
    });


    // Das hier muss ich mit JS erzeugen wird
    // Zuerst Button dann label und input class 
    // Dann das in ein DIV verpacken 
    // und dass dann in ein LI verpacken

    {
        /* <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Buy a unicorn or 2</label>
                    <button class="destroy"></button>
                </div>
        </li> */
    }




    // Nur mal ein Test ob das so kappt
    // for (const addNewTodos of addNewTodo) {
    //     addNewTodos.addEventListener("mouseover", (event) => {
    //         event.preventDefault();
    //         console.log("Jetzt bin ich drin");
    //     });
    // }






    // Simples Removen mit Klick 
    // for (const removeFilter of removeFilters) {
    //     removeFilter.addEventListener("click", (event) => {
    //         event.preventDefault();
    //         console.log("Super die Maus klappt die überflüssigen Felder wurden entfernt");
    //         removeFilter.remove();
    //     });
    // }



    // const listElements = document.querySelectorAll(".list-group-item");




});