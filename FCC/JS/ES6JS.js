
// short version of a function.
// In diesem Beispiel weise ich der Variablen magic das Datum als Wert zu, zusätzlich soll die Variable eine Constante sein 
const magic = Date()
console.log("Hey Heo today we have " + magic);

// Übergeben von Argumenten in einer Arrow Funktion
// verdoppeld den input und returned it.
const doubler = (item) => item * 2;
console.log(doubler);

// Array mit einer Arrow Function Ausgangslage
// var myConcat = function(arr1, arr2) {
//     "use strict";
//     return arr1.concat(arr2);
//   };
//   // test your code
//   console.log(myConcat([1, 2], [3, 4, 5]));


// Array mit einer Arrow Function Lösung 
const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  // test your code
  console.log(myConcat([1, 2], [3, 4, 5]));