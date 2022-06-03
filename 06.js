/*  Exercise 6:
    -----------
    Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.
*/

/* There is many way to solve, bellow it is two way that i did */

const makeNewstring = (str) => 
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewstring('abc'));
console.log(makeNewstring('abcdef'));
console.log(makeNewstring('abc123abc123'));
console.log(makeNewstring('ab'));



function newStr(str) {
    let arr = [];
    let word = '';

    if (str.length < 3) {
        return str;
    } else {
        for (let i = 0; i < 3; i++) {
            arr.push(str[i]);
        }
    
        for (let i = 3; i > 0; i--) {
            arr.push(str[str.length - i])
        }
    
        for (let i = 0; i < arr.length; i++) {
            word += arr[i];
        }
    
        return word;
    }    
}

console.log(newStr('abc'));
console.log(newStr('abcdef'));
console.log(newStr('abc123abc123'));
console.log(newStr('ab'));