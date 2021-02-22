//"use strict";
/*jshint esversion: 6 */
// Mit STRG und Leertaste gibts die Autocomplete  // kleine Update
// a normales F5 reicht auch 

console.log("Hello World im am back");

const data = {
    todos: ["JS Kurs anpassen", "Node JS anpassen"],
    addToDo: function(Argument) {
        this.todos.push(Argument);
    }
};

data.addToDo("4. Todo");
console.log(data.todos);



// ZWecks this
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/this