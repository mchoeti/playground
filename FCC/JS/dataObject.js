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

