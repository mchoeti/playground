
// Die Klasse Hund verwenden und Variablen anpassen
function Dog(name, color) {
  this.name = name;   // Jeder Hund hat einen Namen
  this.color = color; // Jeder Hund hat eine Farbe
  this.numLegs = 4 ;  // Aber jeder Hund, sofern gesund, hat 4 Beine 
}

// Hier erstellen wir eine Variable welche die Funktion Dog verwendet und geben ihm gleich mal ein paar Namen mit.
let terrier = new Dog ("Udo", "black");

// Ausgabe des neuen Terriers :-)
console.log(terrier.name + " " + terrier.color + " " + terrier.numLegs);
// Ergebnis:  Udo black 4 v  :-)

//#########################################################