var array = [1, 2, 3, 4];

function reverseArray(array) {
    var arrayOutput = []; //define  array variable for result
    for (let i = array.length - 1; i >= 0; i--) {
        arrayOutput.push(array[i]);
    }
    return arrayOutput;
}
console.log(reverseArray(array));