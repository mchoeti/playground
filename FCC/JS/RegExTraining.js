// Simples Suchen nach einem Wort in einem String
let myString = "Hello, World!"; // Enthält Wörter usw alles in einem String 
let myString2 = "Das it mein zweiter String, das gibts keine Begrüßung";  // 2. String als Test
let myRegex = /Hello/;   // Der String nach dem wir suchen
let result = myRegex.test(myString);  // Definition eines Results unter verwendung der test() methode. Gibt entweder true oder false
let result2 = myRegex.test(myString2); // Auch hier suchen wir nach dem Sting Hello aber diesmal in myString2
console.log(result);  // Wird gefunden daher auch true :-)
console.log("Sollte false liefern, Ergebnis = " + result2); 

// Nach mehr als einem Ausdruck suchen 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Wie mit Operatoren  also dog|cat usw..
let result1 = petRegex.test(petString);
console.log(result1); // liefert true weil einer der Strings gefunden wird.

// Hier wäre und die Groß und KLeinschreibung egal
let myString3 = "Das it mein zweiter String, das gibts keine Begrüßung, wir suchen nach CHRIS";
let fccRegex = /chris/i; // Change this line
let result3 = fccRegex.test(myString3);
console.log("Wurde Chris gefunden? :" + result3);  // Chris wird gefunden aber die schreibweise ignoriert mit dem i Schlüsselwort


