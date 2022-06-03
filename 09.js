/*  Exercise 9:
    -----------
    Given two values, write a javascript program to find out which one is nearst to 100
*/

const nextTo100 = (num1, num2) => 
    100 - num1 < 100 - num2 ? num1 : num2

console.log(nextTo100(80, 70));
console.log(nextTo100(18, 43));
console.log(nextTo100(06, 60));