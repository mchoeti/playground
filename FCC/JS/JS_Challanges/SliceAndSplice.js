//Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
// Example frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]. 


function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    //let newArray = arr1.slice(0);
    let newArray = arr1.slice(0, arr1.length);
    newArray.splice(n,0, ...arr2); // Splice, hinzufügen der Werte im Arr 2 mit dem Rest Paramete
    console.log(arr1)
    return newArray;
}
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log("Strings innen " + frankenSplice([1, 2], ["a", "b"], 1));


function frankenSplice2(arr1, arr2, n) {
    // It's alive. It's alive!
    //let newArray = arr1.slice(0);
    let newArray = arr2.slice(0, arr2.length);
    newArray.splice(n,0, ...arr1); // Splice, hinzufügen der Werte im Arr 2 mit dem Rest Paramete
    console.log(arr1)
    return newArray;
}
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log("Strings außen: " + frankenSplice2([1, 2], ["a", "b"], 1));


// Simple Arrays
var arr1 = [1, 2, 3];  // arr1
var arr2 = [4, 5, 6];  // arr2

// Nutzung des REST parameters ... mit ES6
//arr1.splice(1,0, arr2[0], arr2[1], arr2[2]);  // Splice, hinzufügen der Werte im Arr 2 in Arr1 an position 1
arr1.splice(1,0, ...arr2);  // Splice, hinzufügen der Werte im Arr 2 mit dem Rest Parameter
console.log("Mit Rest Parameter ... : " + arr1); // ergibt 1, 4, 5, 6, 2, 3


// Array GRundlagen
var fruits = ['Apple', 'Banana'];
console.log(fruits.length);

// Simple Kopie
var fruitCopy = fruits.slice();
console.log(fruitCopy.length);

// Hinzufügen von Mango an Position 1 und kein löschen
fruitCopy.splice(1,0, "Mango");
console.log(fruitCopy.length);
console.log(fruitCopy);



//Nur die Elemente des Arrays ausgeben
fruits.forEach(function (item, index, array) {
    console.log("Im Array sind: " + item);
});

// jedes Element ausgeben mit Position 
fruits.forEach(function (item, index, array) {
    console.log("Im Array sind: " + item +" und die stehen an Position: " + index);
    console.log("Kompakt: " + item, index);
});







