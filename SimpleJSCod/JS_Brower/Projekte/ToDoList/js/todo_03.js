//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete  // kleine Update 

document.addEventListener("DOMContentLoaded", () => {
    console.log("Simpler Hallo Welt Check");
    const neuesToDo = document.querySelector(".new-todo");
    const todoListElement = document.querySelector(".todo-list");

    const footerElement = document.querySelector(".footer");
    const refreshFooter = () => {
        if (todoListElement.children.length === 0) {
            footerElement.style.display = "none";
        } else {
            footerElement.style.display = "";
        }
    };

    // Und natürlich noch aufrufen
    refreshFooter();


    //const removeFilters = document.querySelector(".filters");
    // Ziel: Nach checken der Buttons soll eine Aktion ausgeführt werden
    // Hier wird eine Funktion definiert welches ein Argument erfordert. Siehe dazu line 80
    const addCallbacksForLi = (liElement) => {
        // Mal schauen was da alles möglich ist beginnend mit CLG
        console.log(liElement.innerHTML);
        const checkBoxElement = liElement.querySelector(".toggle");
        const destroyButtonElement = liElement.querySelector(".destroy");

        checkBoxElement.addEventListener("change", () => {
            console.log("Du hast es geändert");
            console.log(checkBoxElement.checked);
            // Aufpassen klasse hinzufügen wenn es geändert wurde.
            if (checkBoxElement.checked === true) {
                liElement.classList.add("completed");
                console.log(checkBoxElement.checked);
            } else {
                liElement.classList.remove("completed");
                console.log(checkBoxElement.checked);
            }
            // Wieder ein Footer
            refreshFooter();
        });

        // Event Listener auf Klick einbauen und dann entfernen
        destroyButtonElement.addEventListener("click", () => {
            console.log("Es wird zerstört");
            liElement.remove();

            // Footer wieder ausblenden 
            refreshFooter();
        });
    };


    // Check ob Enter Taster oder nicht
    neuesToDo.addEventListener("keypress", (event) => {
        console.log(event.code);
        // Nur Elemente mit Wert sollen hinzugefügt werden
        if (event.code === "Enter" && neuesToDo.value !== ("")) {
            console.log("Es ist die Enter Taste");
            //alert("Enter wurde gedrückt");

            // Nun muss HTML Struktur mit JS erzeugt werden.
            // Zuerst Button dann label und input class 
            // Dann das in ein DIV verpacken 
            // und dass dann in ein LI verpacken
            const newButtonElement = document.createElement('button');
            newButtonElement.classList.add("destroy");
            console.log(newButtonElement);

            // Neues Label Element
            const newLabelElement = document.createElement('label');
            newLabelElement.appendChild(
                document.createTextNode(neuesToDo.value)
            );
            console.log(newLabelElement);

            // Neue CheckBox und Klasse vergeben - Neues Input ELement , type checkbox zuweisen und dann classe toggle vergeben
            const newInputCheckbox = document.createElement('input');
            newInputCheckbox.type = "checkbox";
            newInputCheckbox.classList.add("toggle");

            // Neues div Element hinzufügen alle 3 neuen elemente reinpacken :  Checkbox ; Label und Button
            const newDivElement = document.createElement("div");
            newDivElement.classList.add("view");
            newDivElement.appendChild(newInputCheckbox);
            newDivElement.appendChild(newLabelElement);
            newDivElement.appendChild(newButtonElement);

            // Neues List Elemente
            const newListElement = document.createElement("li");
            newListElement.appendChild(newDivElement);

            // Lektion 2 neu hinzufügen Wichtig dass hier schon alle Div Elemente drinnen sind siehe newListElement.appendChild(newDivElement); 
            addCallbacksForLi(newListElement);

            //Und Jetzt mit Prepend als erste hinzufügen 
            //todoListElement.prepend(newListElement);
            // oder mit APPEND hinten anhängen
            todoListElement.append(newListElement);
            //todoListElement.prepend(newLiElement);



            // Danach Wert wieder zurücksetzen
            neuesToDo.value = "";
            // FOOTer Funktion verwenden fürs wieder einblenen
            refreshFooter();

            // Dieses HTML Element muss ich mit JS erstellen, also LI , div , input , label und button
            /* <li>
                    <div class="view">
                        <input class="toggle" type="checkbox">
                        <label>Buy a unicorn or 2</label>
                        <button class="destroy"></button>
                    </div>
                </li> */

        }
    });

    // Git update
});