
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

  // Default setting 
  function greeting(name = "Anonymous") {
    return "Hello " + name;
  }
  console.log(greeting("John")); // Hello John
  console.log(greeting()); // Hello Anonymous

// Simple increment function with values
function increment(value = 3) {
  return value + 1;
  //return "Number is" + value;
}
console.log(increment(5, 7)); // Returns 5
console.log(increment()); // Returns 3


const increment1 = (function() {
  "use strict";
  return function increment1(number, value = 1) {
    return number + value;
  };
})();
console.log("This is short " + increment1(5, 20)); // returns 25
console.log("This is default " + increment1(5)); // return 6

// cool destructuring
// with JS 6
var vaxel = { x: 20, y: 30, z: 40 };
const { x,y,z} = vaxel;
console.log(y,z,x);