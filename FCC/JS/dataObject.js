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