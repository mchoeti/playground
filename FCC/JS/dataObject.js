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

