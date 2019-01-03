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

// Test
// var str = 'To be, or not to be, that is the question.';

// console.log(str.endsWith('question.')); // true
// console.log(str.endsWith('to be'));     // false
// console.log(str.endsWith('to be', 19)); // true