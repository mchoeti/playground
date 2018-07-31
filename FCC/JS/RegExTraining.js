// Simples Suchen nach einem Wort in einem String
let myString = "Hello, World!"; // Enthält Wörter usw alles in einem String 
let myString2 = "Das it mein zweiter String, das gibts keine Begrüßung";  // 2. String als Test
let myRegex = /Hello/;   // Der String nach dem wir suchen
let result = myRegex.test(myString);  // Definition eines Results unter verwendung der test() methode. Gibt entweder true oder false
let result2 = myRegex.test(myString2); // Auch hier suchen wir nach dem Sting Hello aber diesmal in myString2
console.log(result);  // Wird gefunden daher auch true :-)
console.log("Sollte false liefern, Ergebnis = " + result2); 


