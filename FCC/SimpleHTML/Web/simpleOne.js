//
//alert("Hello");
var textToShow = "Hello Wooooooooooorld";
//alert(textToShow);
console.log("This is my script");
console.log(textToShow);

// User Eingaben
//console.log(prompt(" Type what you want to print out below."));
//document.body.onload = addElement;

function addElement() {
    document.body.onload = addElement;
    // erstelle ein neues div Element
    var newDiv = document.createElement("div");
    // und gib ihm etwas Inhalt
    var newContent = document.createTextNode("Ein bisserl Inhalt");
    newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.

    // füge das neu erstellte Element und seinen Inhalt ins DOM ein 
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

//   A bisserl rechnen Element
var a = 19;
var b = 8;
var sum;

console.log("Resultat", a + b);
console.log("Resultat", a * b);
console.log("Resultat", a - b);
console.log("Resultat", a / b);


// var input1 = prompt("Enter the value of x");
// console.log(input1);
// var input2 = prompt("Enter the value of y");
// console.log(input2);
// console.log("The difference between x and y is", (input1 - input2));