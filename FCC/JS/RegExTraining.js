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

// Das gefundene Extrhieren
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; // Change this line
let result4 = extractStr.match(codingRegex); // Change this line
console.log(result4);

// Mehr als den ersten Match finden
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // suche nach Twinkel und ignoriere die Schreibweise und g steht für global
let result5 = twinkleStar.match(starRegex); // Change this line
console.log(result5);


// Triff Alles mit Wildcards
let exampleStr = "Let's have fun with regular expressions!";
let SucheViaRegex = /.un/; // Punkt steht für die Wildcard. beispiel ha.e würde nach ha*e suchen 
let result6 = SucheViaRegex.test(exampleStr); // Abfrage ob vorhanden 
let result7 = exampleStr.match(SucheViaRegex); // Speichern der results für Ausgabe 
console.log(result6);  // ergibt true
console.log(result7);  // gibt resultate aus

// Finde alle Vokale
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Finde alle Buchstaben a,e,i,o,u ignoriere Groß/Kleinschreibung und suche sie global
let result8 = quoteSample.match(vowelRegex); // Suche die vokale ob sie passen (match) in der Variablen quoteSample
console.log(result8);

// Alle Buchstaben des Alpabeths
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result9 = quoteSample1.match(alphabetRegex); // Change this line
console.log(result9);

// Buchstaben und Nummern
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegexCh1 = /[h-s2-6]/ig; // Change this line
let result10 = quoteSample2.match(myRegexCh1); // Change this line
console.log(result10);

// good morning holiday
// Regex für alle Character erstellen welche nicht Vokale sind, klappt mit invertierung ^
let quoteSample11 = "3 blind mice.";
let myRegex11 = /[^aeiou^2-9]/ig; // Change this line
let result11 = quoteSample11.match(myRegex11); // Change this line
console.log("Result11 = " + result11);