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

// Finde s mit einem buchstaben
let difficultSpelling = "Mississippi";
let myRegex12 = /s+/gi; // Change this line
let result12 = difficultSpelling.match(myRegex12);
console.log(result12);

// Ausgabe von 0 oder mehrmal wie immer mit dem Asterix *
let chewieQuote13 = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex13 = /A[a]*/g; // Change this line // um die challenge zu bestehen muss man das ignore wegnehmen 
let result13 = chewieQuote13.match(chewieRegex13);
console.log(result13);

// Winter is comming und die H1 wird angezeigt
let text14 = "<h1>Winter is coming</h1>";
let myRegex14 = /<h1>/; // Change this line
let result14 = text14.match(myRegex14);
console.log(result14);

// Suchen wir mal nach allen CS in dem String
let crowd15 = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals15 = /C+[c+]*/g; // Change this line
let matchedCriminals15 = crowd15.match(reCriminals15);
console.log(matchedCriminals15);
// Die Länge des Strings in einem Array, wenn man die Position kennt :-) und das ist eben hier Position 0
console.log("Es sind: " + matchedCriminals15[0].length + " Verbrecher, auf gehts");

// für den Start wäre eben ^ der Carret Charakter
let rickyAndCal16 = "Cal and Ricky both like racing.";
let calRegex16 = /^Cal/g; // Wir suchen jetzt mal nach Cal
let result16 = calRegex16.test(rickyAndCal16);
console.log(result16); // damit wird true zurückgegeb en 

// Für Start und Ende, ^ ist für den Start und Dollar $ für das Ende
let caboose17 = "The last car on a train is the caboose";
let lastRegex17 = /caboose$/; // Change this line
let result17 = lastRegex17.test(caboose17);
console.log(result17);

// Finde alle Alpahbet buchstaben, w steht demnach für a-z und 0-9 
let quoteSample18 = "The five boxing wizards jump quickly.";
let alphabetRegexV218 = /\w/g; // alle buchstaben 
let zähleWörter = /\w+/g; // zähle die Wörter
let result18 = quoteSample18.match(alphabetRegexV218).length;
let result19 = quoteSample18.match(zähleWörter).length;
console.log("Es sind derzeit: " + result18 + " Buchstaben ");
console.log("Es sind derzeit: " + result19 + " Wörter ");

// Zählen von Wörtern und Strings
let quoteSample20 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex20 = /\w/g; // mit w finde ich die buchstaben
let nonAlphabetRegex21 = /\W/g; // ein uper W gibt mir die Anzahl der Wörter zurück
let result20 = quoteSample20.match(nonAlphabetRegex20).length;
let result21 = quoteSample20.match(nonAlphabetRegex21).length;
console.log("Es sind derzeit: " + result20 + " Buchstaben ");
console.log("Es sind derzeit: " + result21 + " Wörter ");

// Finde alle Zahlen mit d steht für digit
let numString22 = "Your sandwich will be $5.00";
let numRegex22 = /\d/g; // Change this line
let result22 = numString22.match(numRegex22).length;
console.log("Es gibt: " + result22 + " Ziffern");

// Finden aller Buchstaben
let numString23 = "Your sandwich will be $5.00";
let noNumRegex23 = /\D/g; // Change this line
let result23 = numString23.match(noNumRegex23).length;
console.log("Es gibt: " + result23+ " Wörter");


// Finde alle Whitespaces, also Leerzeichen
let sample24 = "Whitespace is important in separating words";
let countWhiteSpace24 = /\s/g; // \s steht für Spaces
let result24 = sample24.match(countWhiteSpace24);
console.log("Aha es gibt also: " + result24.length + " Leerzeichen im Text"); // Aha es gibt also 5 Leerzeichen..  Juhu..

// jetzt zählen wir mal alle außer den LEERzeihen 
let sample25 = "Whitespace is important in separating words";
let countNonWhiteSpace25 = /\S/g; // also für alle NICHT Spaces 
let result25 = sample25.match(countNonWhiteSpace25);
console.log("Aha es gibt also: " + result25.length + " Buchstaben (ohne Leerzeichen im Text)")