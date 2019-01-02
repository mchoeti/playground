function largestOfFour(arr) {
    // Erstellen eines ersten Arrays
    var largestNumber = [0,0,0,0];
    // Erster For loop der über das Array geht
    for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        // 2. For Loop der über die sub arrays geht
     for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
        // IF Abfrage, welche Nummer größer ist
        if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
           largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
         }
     }
  }
  // Rückgabe der Variable, benötigt halt auch Eingabearrays
  return largestNumber;
}
  
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// To Do, weil derzeit werden die negativen Werte nicht berücksichtigt. 
// Eingabe von 
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
// ergibt: 25, 48, 21, 0
