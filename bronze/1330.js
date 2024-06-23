let fs = require('fs');
const input = fs.readFileSync("1330.txt").toString().trim().split(" ");

function solution(arr) {
  const [a, b] = input[0].split(' ');
  const numA = Number(a);
  const numB = Number(b);
  if ( numA > numB ) {
    return '>';
  } else if ( numA < numB ) {
    return '<';
  } else {
    return'=='
  }
}
console.log(solution(input));
