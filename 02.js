/*  Exercise 2:
    -----------
    Write a JavaScript program to get the extension of a filename.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
const fileExtension = (str) => str.slice(str.indexOf('.'));

console.log(getFileExtension('index.html'));
console.log(fileExtension('webpack.onfig.js'));