/*
Repeat a given string str (first argument) f
for num times (second argument).
Return an empty string if num is not a positive number.
*/

// Beispielsweise soll repeatStringNumTimes("abc", 3)
// "abcabcabc" ausgeben 

// Repeat Methode
function repeatStringNumTimes(str, num) {
    // einfach wäre es mit der repeat Methode
    return str.repeat(num);
    //würde dann eben abcabcabc ergeben.
}

// hier mal mit einem For Loop
function repeatStringNumTimesBasic(str, num) {
    let store = [];
    for (let i = 0; i < num; i++) {
        store.push(str);
        // Als kleiner Tipp, Ausgabe vor dem Join wäre abc,abc,abc
        console.log("Ausgabe vor Join = " + store)
    }
    // Join verbindet alle innerhalb des Array und gibt es als String aus
    return store.join("");
}

//console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimesBasic("abc", 4));


// ########################
// Simples join() in einer Variation 
var cars = ["Saab", "Volvo", "BMW"];
// Ausgabe als Saab,Volvo,BMW
console.log(cars.join());
// Ausgabe als SaabVolvoBMW
console.log(cars.join(""));

