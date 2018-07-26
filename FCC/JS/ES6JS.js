
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

// a simple destruction with some additional features
var person = {
  species: 'human',
  weight: 76,
  sex: 'male',
  sound: 'YEAHHHH'
}
// wir destructurieren also person in 2 lokale variablen, 
// species und sound daher werden die eigenschafen 'male' und 'Yeah' zu lokalen variablen assigned was uns wiederum ermöglicht sie anzusprechen 
var { species, sound} = person;
console.log("The " + species + " says " + sound);


// Rest Operator example
// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2)); // You have passed 3 arguments
// console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.


// challenge solved, delete const
const sum = (function() {
  "use strict";
  return function sum(...args) {
    //const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1,2,3,4)); // 10

// Maximalen Wert aus einem Array nehmen
var arr = [6, 1902, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
console.log(maximus); // sollte 1902 sein 

// simpler one
const arr1 = [6, 89, 3, 45];
const maximus1 = Math.max(...arr1); // returns 89
console.log(maximus1); // wäre 89

// solution for an array duplicate ...arr returns an unpacked array. In other words, it spreads the array.
const arrold = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arrNew;
(function() {
  "use strict";
  arrNew = [...arrold]; // change this line
})();
console.log(arrNew);

// reassignemnt with LENGTH
function getLength(str) {
  "use strict";
 // Übernahme der Eingabe (str) und zuweisen auf len 
  const {length : len } = str;  
  return len; 
}
console.log(getLength('It will be counted or something like this')); // sollte 41 sein 

// example
const a = {
  start: { x: 5, y: 902},
  end: { x: 1902, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
const { end: { x: chrisX , y: chrisY}} = a;
// Ausgabe 2 er Werte aus einem geschachteltem Array
console.log(chrisX, startY);


// Solution for Destructuring Assignment to Assign Variables from Nested Objects // challenge
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  //const maxOfTomorrow = undefined; // change this line
  //simple one const maxOfTomorrow = LOCAL_FORECAST.tomorrow.max;
  const { tomorrow: { max: maxOfTomorrow}} = forecast
  return (maxOfTomorrow);
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6