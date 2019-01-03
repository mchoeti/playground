// Simple Solution for Number of Four
function largestOfFourBasic(arr) {
   // Erstellen einer Variablen für die Resultate
   var results = [];
   // Initialisierung der ersten for Schleife, also der äußere Loop
   for (var n = 0; n < arr.length; n++) {
      // Definition der Variable um die largest Number im Arr an der bestimmen Position zu speichern.
     var largestNumber = arr[n][0];
     // nächste For Schleife um mit Sub Arrays zu arbeiten 
     for (var sb = 1; sb < arr[n].length; sb++) {
       // Einbau des Vergleich, ob die Nummer gröer ist oder nicht, wenn ja wird die größere Nummer gespeichert.
       if (arr[n][sb] > largestNumber) {
         largestNumber = arr[n][sb];
       }
     }
 
     results[n] = largestNumber;
   }
   // Rückgabe der Werte
   return results;
 }

 console.log(largestOfFourBasic([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
 console.log(largestOfFourBasic([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));