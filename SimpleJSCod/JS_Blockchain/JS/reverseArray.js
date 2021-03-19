// Reversing an Array The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order

// Simple One , using RevereFunction
var cars = ["BMW", "MERCL", "Opel", "Sterndal"];
cars.reverse();
console.log("Used Reverse Function ", cars);

// plain JS
var cars = ["BMW", "MERCL", "Opel", "Sterndal"];
console.log("Starting point ", cars);

function reverseArray(cars) {
    var reversedCars = [];
    for (let i = cars.length - 1; i >= 0; i--) {
        reversedCars.push(cars[i]);
    }
    return reversedCars;
}
console.log("Reversed: ", reverseArray(cars));