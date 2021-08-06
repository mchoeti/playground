/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/

function sumAll(arr) {

    //let newArr = [...arr];
    //console.log(newArr);

    const startNum = arr[0];
    const endNum = arr[1];

    console.log(startNum);
    console.log(endNum);

    const numCount = Math.abs(startNum - endNum) + 1;
    const sum = ((startNum + endNum) * numCount) / 2;
    console.log(sum);
    return sum;

}
//console.log(sumAll([1, 4]));
sumAll([1, 4]);