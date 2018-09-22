// Einfache und simple Datenobjetke und deren Aufgaben
function mixedNumbers(arr) {
    // Mit Unshift füge ich am Array Anfang etwas hinzu
    arr.unshift('I', 2, 'three');
    // Mit Push werden die Zahlen am Ende angeführt
    arr.push(7, 'VIII', 9);
    // change code above this line
    return arr;
  }
  //  Hier wird nun das Arr Ausgegeben mit den Werten aus 
  // Unshift , den Werten hier und Push
  console.log(mixedNumbers(['IV', 5, 'six']));
  // Das Resultat in der Console sind demnach die Zahlen 1-9 dargestellt durch die entsprechenden Ziffern und Strings


  // Entfernen von Elementen aus dem Array
  // pop() entfernt das letzte Element des Arrays und gibt es zurück
  // shift entfernt das erste Element des Arrays und gibt es zurück
  function popShift(arr) {
  let popped = arr.pop(); // gibt complete zurück( Letzes Element im Array)
  let shifted = arr.shift(); // gibt challenge zurück ( 1. Element im Array)
  return [shifted, popped];
}
// Das soll angepasst werden
console.log(popShift(['challenge', 'is', 'not', 'complete']));

 
// Die splice() Methode ändert den Inhalt eines Arrays durch das Hinzufügen neuer und/oder Entfernen alter Elemente.
function sumOfTen(arr) {
  // vor dem Entfernen hat unser Array noch die Sting Elemente inkludiert
  console.log("Vor dem Entfernen: " + arr); 
  // Beginnned mit Platz 3, weil Array beginnt mit 0 und löscht danach 2 Positionen
  arr.splice(2,2);
  // Ausgabe der noch im Array vorhandenen Elemente 2,5,2 und 1 
  console.log("Nach dem Entfernen: " + arr);
  // addiert die noch verbleibenden Elemente 
  return arr.reduce((a, b) => a + b);
}
// Ausgabe der Summe der mit splice() reduzierten Elemente des Arrays
console.log("Die Summer wäre: " + sumOfTen([2, 5, "entfern", "mich", 2, 1]));


function htmlColorNames(arr1) {
  // Wir wollen die ersten beiden Elemente entfernen und dann sollen 'DarkSalmon' and 'BlanchedAlmond ihre Plätze einnehmen.
  // Entfernen klappt wie immer mit Startpunkt angeben und die Anzahl der Elemente
  // Danach müssen die neuen Werte hinzugefügt werden
  arr1.splice(0,2, 'DarkSalmon', 'BlanchedAlmond') ;
  return arr1;
} 
 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

// SLICE Methode slice() Syntax wie folgt: arr.slice([begin[, end]])
function forecast(arr2) {
  // Schneidet das Array on Position 3 bis zum Ende aus und speichert es in einer neuen Variablen
  // Beginnt bei Position 2 und endet bei Position 4 OHNE Position 4 mitzunehmen
  // Null-basierter Index bevor die Extraktion endet. slice extrahiert bis zu, aber nicht inklusive end.
  let sliced = arr2.slice(2, 4);
  return sliced;
}

// Console Log mit Anfangswerten
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy mit SLice 
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Lösung ohne den Spread Operator hier entstehen nur Kopien von dem Originalen
    //newArr.push(arr);
    // Lösung mit Spread Operator, Unterschied hier ist eben, dass es ein neues ARRAY ist
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 3));


// Kombination eines Arrays mit dem Spread Operator
function spreadOut() {
  // in diesem Array stehen also 2 Werte
  let fragment = ['to', 'code'];
  // Nun passen wir das Array mit dem zufor definierten fragment
  let sentence = ['learning', ...fragment, 'is', 'fun']
  // Rückgabe des vollständigen Satzes
  return sentence;
}
// Ausgabe des Satzes mittels der Funktion
console.log(spreadOut());



// Überprüfung ob es einen bestimmten String im Element gibt
// dazu benutzen wir indexOf() 
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
// Gibt aus an welcher Stelle der gesuchte Begriff im Array steht
console.log(fruits.indexOf('peaches')); // hier sollte als Egebnis 3 rauskommen, 


// schau mal nach ob was bestimmtes in einem Array ist
function quickCheck(arr, elem) {
  // nur für die Console
  console.log(arr.indexOf(elem) === -1 ? false : true);
  // Soll der Wert zurückgegeben werden, return nicht vergessen
  //return arr.indexOf(elem) === -1 ? false : true;

  // Längere Variante, also eine Klassiche If/ Else abfrage
  if (arr.indexOf(elem)=== -1 )  {
    return false;
  } else {
    return true;
  }
}

// Anbei die "Eingabe und Ausgabe via Console log"
console.log("Schneller Check für True order False: " + quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
    for ( var i = 0; i < arr.length ; i++) {
    if (arr[i].indexOf(elem) === -1 )  {
       newArr.push(arr[i]);  
    } 
  }
  console.log(newArr);
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// mal was mit Objekten
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " +  this.numLegs + " legs.";}
};
// Ausgabe des Satzes mit Verwendung des this Keywords
console.log(dog.sayLegs());



//Erstellen von neuen komplexen Multidimensionalen Arrays simple aber effektiv
let myNestedArray = [ // first level
  ['Im 2. Stock'],  // level 2 Array in an Array
  [['Level 3']],  // level 3 
  [[['Noch einen Stock höher']]], // level 4
  [[[
    ['on Top', 'level5'], // Position 1 im Level 4
    ['ganz oben an 2. Stelle'], // Poistion 2 im Level 4
  ]]], // level 5
];

// Zugriff auf Level 2
console.log(myNestedArray[0]);
// Zugriff auf level 3
console.log(myNestedArray[1][0])
// und weiter mit Level 4
console.log(myNestedArray[2][0][0])
// und zu guter letzt Level 5
console.log(myNestedArray[3][0][0][1]);



// Einem Objekt neue Werte properties und values hinzufügen
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

//  Nun fügen wir neue Properties mit Werten ein
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Danach noch die Ausgabe via Console

console.log(foods);
// ergibt {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, …}


//Ändern der Werte in einem Nested Array
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
// Wert wird auf 45 gesetzt :-)
userActivity.data.online = 45;
console.log(userActivity);


// Zugreifen auf Werte im Objekt
let foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// Erstellen einer Funktion die eine Eigenschaft benötigt. 
// Diese kann apples , oranges, plumsw..  usw sein, siehe Array 
function checkInventory(scannedItem) {
  // Rückgabe des eingegeben Items der Zugriff sieht dann so aus
  // foods.plums und wird einen Wert, hier 28 zurückgeben
 return foods1[scannedItem];
}

// Ausgabe des Wertes der Eigenschaft plums 
console.log(checkInventory("plums")); 

// Monday Morning Commit, Testing for new laptop settings


// LÖschen von Elementen in einem Array
// im wesentlichen benutzt man einfach das Delete keyword und danach die Eigenschaft im Array.
let foods2 = {
  apples: 48,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Löschen der Eigenschaften inklusive der Werte mit delte Arrayname.eigenschafztz 
delete foods2.oranges;
delete foods2.plums;
delete foods2.strawberries;
// change code above this line

console.log(foods2);

let vereine = {
  GAK: 1,
  AustriaSalzburg: 2,
  Sturm: 3
};

// Nun löschen wir den Stadtverein mit einem einfachen 
delete vereine.Sturm;

// Ausgabe der richtigen Vereine
console.log(vereine);

// ------------------------------###------------------------
// Loop and LOG the ARRAY
// DEfinition eines Users
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: false
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

for (let user in users) {
  console.log(user);
};
// Man könnte auch die EIgetnschaften von Sarah rausholen
for (let info in users.Sarah) {
  console.log("Sarah is :" + info);
};

// Jetzt zählen wir mal den Status wie viele online sind
function countOnline(obj) {
  // Definieren eine variablen
  let anzahlOnline = 0;
  // wir suchen in uers die Eigenschaft
  for(let user in obj)
  {
    // Abfragem wenn der Status false ist bei true könnten wir das weglassen
    if (obj[user].online === false)
    { 
      // wenn true dann um eins erhöhen.
      anzahlOnline++;
    } 
    // ausgeben des Types von users
    // console.log(typeof user);
  }
  return anzahlOnline;
  // change code above this line
}
console.log("Anzahl der Online Personen: " + countOnline(users));

// ------------------------------###------------------------