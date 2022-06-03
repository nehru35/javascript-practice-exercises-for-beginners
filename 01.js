/*  Exercise 1:
    -----------
    Write a JavaScript program to check two numbers and return true if one of two number is 100 or if the sum of the two number is 100
*/


/* List of some way to solve it */

function checkNumber(num1, num2) {
    if (num1 == 100 || num2 == 100 || num1 + num2 == 100) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNumber(100, 0));
console.log(checkNumber(0, 100));

console.log(checkNumber(10, 0));
console.log(checkNumber(0, 10));

console.log(checkNumber(20, 80));
console.log(checkNumber(50, 50));


function isEqual100(num1, num2) {
    return num1 == 100 || num2 == 100 || num1 + num2 == 100;
}

console.log(isEqual100(100, 0));
console.log(isEqual100(0, 100));

console.log(isEqual100(10, 0));
console.log(isEqual100(0, 10));

console.log(isEqual100(20, 80));
console.log(isEqual100(50, 50));


const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(0, 100));

console.log(isEqualTo100(10, 0));
console.log(isEqualTo100(0, 10));

console.log(isEqualTo100(20, 80));
console.log(isEqualTo100(50, 50));
