//  Confirm the Ending - Also das Ende bestätigen 
// Aufgabe: 
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// Verwenden der endsWith() Methode
function confirmEnding(str, target) {
    // We return the method with the target as a parameter
    // The result will be a boolean (true/false)
    var check = str.endsWith(target)
    console.log(check);
    return str // 'Bastian'.endsWith('n')
  }
  confirmEnding('Bastian', 'n');;

// #########################################
// Short Version:
function confirmEndingShort(str, target) {
    return str.endsWith(target)
  }

// Eingabe der "Werte" würde auch klappen wenn man gleich mit console.log arbeitet.
confirmEndingShort("Bastia", "n");
// Ausgeben mit Funktionsaufruf
console.log(confirmEndingShort("Bastia", "n"));

// ###########################################

// Simpler Test Test siehe https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith 
/* var str = 'To be, or not to be, that is the question.';
console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be'));     // false
console.log(str.endsWith('to be', 19)); // true
*/


//#############################################################
// # Solution without endsWith()
// Verwenden von Substring 

var str = 'Christian';
var target = 'c'

// Startet bei 2 und gibt 3 buchstaben aus
console.log(str.substr(2,3));
// expected output: "ris"

// Startet bei 2 und gibts den Rest aus
console.log(str.substr(2));
// expected output: "ristian"

// gibts den letzten Buchstaben aus von Christian  weil target nur ein Zeichen hat
console.log("Chris " + str.substr(-target.length));

// ergibt damit n, möchte ich das auf Gültigkeit prüfen, muss eine Abfrage eingebaut werdeb
console.log(str.substr(-target.length) === target);
// expected output: false


//#################  LÖSUNG ####################
function confirmEndingShort1(str, target) {
   // Ich verwende hier substring ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
   // Die substr() Methode gibt einen Teil des Strings zuzrück, beginnend am spezifizierten Index 
    return str.substr(-target.length) === target;
  }
  console.log(confirmEndingShort1("Christian", "n"));

