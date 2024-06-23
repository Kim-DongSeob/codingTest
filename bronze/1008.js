let fs = require('fs');
const input = fs.readFileSync('1008.txt').toString().trim().split('\n');

function solution(arr) {
  const [a, b] = input[0].split(' ');
  return (a/b).toString();
}
console.log(solution(input));
