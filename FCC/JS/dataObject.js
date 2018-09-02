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