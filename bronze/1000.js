// let fs = require('fs');
// let input = fs.readFileSync('dev/stdin.txt').toString().split(' ');

const input = require('fs').readFileSync('dev/stdin.txt').toString();
const jsonInput = JSON.parse(input);
console.log(jsonInput);


// console.log(input);
// let num = Number(input[0]);
//
// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }
// console.log(num);
