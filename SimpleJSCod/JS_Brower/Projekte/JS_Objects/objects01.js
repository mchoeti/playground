//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete  // kleine Update
// a normales F5 reicht auch 

console.log("Hello World im am back");

const data = {
    todos: ["JS Kurs anpassen", "Node JS anpassen"],
    addTo: function(Argument) {
        // und jetzt verwenden wir this anstelle von data
        // this ist also der Kontext der Funktion
        //data.todos.push(Argument);
        this.todos.push(Argument);
    },
    printTodos: function() {
        console.log(this.todos);
    }
};

data.addTo("3. TO Do");
data.addTo("4. TO Do");

for (var i = 5; i <= 7; i++) {
    data.addTo([i] + ".es TO Do");
}

data.printTodos();
//console.log(data);