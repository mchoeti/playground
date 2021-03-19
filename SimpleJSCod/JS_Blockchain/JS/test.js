var myArray = [];

// var start = 1;
// var end = 10;
// for (var i = start; i <= end; i++) myArray.push(i);
// console.log(myArray);


// das bauen wir mal in eine Funktionen
function range(start, end) {
    for (var i = start; i <= end; i++) myArray.push(i);
    console.log(myArray);
}

// und rufen sie auf
range(1, 10);

// Summierfunktion schreiben
function sum() {
    var summe = 0;
    for (const position of myArray) {
        summe += position;
    }
    //console.log(summe);
    return summe;
}
console.log("Die Summe ist: ", sum());