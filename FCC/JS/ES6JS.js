
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


const increment1 = (function () {
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
const { x, y, z } = vaxel;
console.log(y, z, x);

// a simple destruction with some additional features
var person = {
  species: 'human',
  weight: 76,
  sex: 'male',
  sound: 'YEAHHHH'
}
// wir destructurieren also person in 2 lokale variablen, 
// species und sound daher werden die eigenschafen 'male' und 'Yeah' zu lokalen variablen assigned was uns wiederum ermöglicht sie anzusprechen 
var { species, sound } = person;
console.log("The " + species + " says " + sound);


// Rest Operator example
// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2)); // You have passed 3 arguments
// console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.


// challenge solved, delete const
const sum = (function () {
  "use strict";
  return function sum(...args) {
    //const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4)); // 10

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
(function () {
  "use strict";
  arrNew = [...arrold]; // change this line
})();
console.log(arrNew);

// reassignemnt with LENGTH
function getLength(str) {
  "use strict";
  // Übernahme der Eingabe (str) und zuweisen auf len 
  const { length: len } = str;
  return len;
}
console.log(getLength('It will be counted or something like this')); // sollte 41 sein 

// example
const a = {
  start: { x: 5, y: 902 },
  end: { x: 1902, y: -9 }
};
const { start: { x: startX, y: startY } } = a;
console.log(startX, startY); // 5, 6
const { end: { x: chrisX, y: chrisY } } = a;
// Ausgabe 2 er Werte aus einem geschachteltem Array
console.log(chrisX, startY);

// --- next challenge begin
// Solution for Destructuring Assignment to Assign Variables from Nested Objects // challenge
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  //const maxOfTomorrow = undefined; // change this line
  //simple one const maxOfTomorrow = LOCAL_FORECAST.tomorrow.max;
  const { tomorrow: { max: maxOfTomorrow } } = forecast
  return (maxOfTomorrow);
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
// --- next challenge end

//Use Destructuring Assignment to Assign Variables from Arrays
const [ab, bc] = [1, 2, 3, 4, 5, 6];
console.log(ab, bc); // 1, 2
// oder hier wenn ich gerne wert 5 im array hätte
const [aa, bb, , , cc] = [1, 2, 3, 4, 55, 6];
console.log(aa, bb, cc); // 1, 2, 55

// //Lösung für Challenge
// let a = 8,
//     b = 6;
// (() => {
//     "use strict";
//     // change code below this line
//     [a, b] = [b, a];
//     // change code above this line
// })();
// console.log(a); // should be 6
// console.log(b); // should be 8

// Use Destructuring Assignment with the Rest Operator to Reassign Array Elementconst 
[first, second, ...arr] = [1, 2, 3, 4, 5, 7];
console.log("Aus dem Array " + first, second); // 1, 2
console.log("Restliche Werte " + arr); // [3, 4, 5, 7]


// Destructing for Beginners - Part 1 begin
// nett und einfach erklärt wie man destruction kann

const personCH = { name: "Christian", age: 23, occupation: "Defender of the Universe" };
// destructing assignment in function arguments
function whoIsThisDude({ name, occupation: job }) {
  console.log(`Hi! I'm ${name}. I'm a ${job}`);
}
whoIsThisDude(personCH);

// destructuring assignment inside function
function whoIsThisDude2(someDude) {
  const { name, occupation: job } = someDude;
  console.log(`Hi! I'm ${name}. I'm a ${job}`);
}
whoIsThisDude2(personCH);
// Destructing for Beginners - Part 1 end

// Es Destruction Challenge solution
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
//const half = (function() {
"use strict"; // do not change this line
// change code below this line
const half = ({ max, min }) => ((max + min) / 2.0);
// optional with full
const full = ({ max, min }) => ((max + min));
// change code above this line

console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
// optional with full
console.log(full(stats)); // should be 56.03

// simples beispiel für eine perfekte Saison des GAK 
const GAK = {
  pointsWin: 3,
  pointsDraw: 1,
  pointsLoose: 0,
  gamesToPlay: 30,
};

// zuerst die benutzen variablen und hinter => wird was gemacht
// perfect Season ist eine FUNKTION !!!!
const perfectSeason = ({ gamesToPlay, pointsWin }) => ((gamesToPlay * pointsWin));
console.log("Perfect Seasons means " + perfectSeason(GAK) + " points");
console.log("Erstes Match, 3:0 ergibt 3 Punkte !!!")

// Create simple Person
const createPerson = (name, age, gender) => {
  "use strict";
  return ({ name, age, gender });
};
console.log(createPerson("Die Werte sind: " + "Zodiac Hasbro", 56, "male")); // returns a proper object
// mit Return gibts das Objekt zurück

// Functions in ES 6 
// change code below this line
const bicycle = {
  gear: 2,
  // so wars in ES5
  // setGear: function (newGear) {
  //   "use strict";
  //   this.gear = newGear;
  // }
  // so is es in ES 6
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }


};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// Neue Klassen 
function makeClass() {
  "use strict";
  /* Alter code below this line */
  // constructor(Vegetable) {
  //   this.Vegetable = Vegetable;
  // }
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'


// Getter and Setter 
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('Unbekannter Author');
console.log(lol.writer);  // Unbekannter Author
lol.writer = 'Christian';
console.log(lol.writer);  // Christian

//---------------------------------------------
// Das THermostat anpassen und testen
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temperature) {
      this._temperature = temperature;
    }
    get temperature() {
      //umrechnung 
      return (this._temperature - 32.0) * 5.0 / 9.0 ;
    }
    set temperature(updatedTemp) {
       this._temperature = ((updatedTemp * 9.0) / 5.0) + 32.0;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);
//---------------------------------------------

// export Fallback with default values
export default function minus(x, y) { return x - y; }

export default function subtract(x,y) 
{
  return x - y;
}