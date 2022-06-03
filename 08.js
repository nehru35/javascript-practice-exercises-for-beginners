/*  Exercise 7:
    -----------
    Write a JavaScript program to concatenate two string except their first characters
*/

const concatenator = (str1, str2) => str1.slice(1) + str2.slice(1)

console.log(concatenator('abc', 'def'));
console.log(concatenator('junior', 'developer'));