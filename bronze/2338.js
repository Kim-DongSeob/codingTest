let fs = require('fs');
const input = fs.readFileSync("2338.txt").toString().trim().split("\n");

const a = BigInt(input[0]);
const b = BigInt(input[1]);
function solution(a,b) {
  console.log((a + b).toString());
  console.log((a - b).toString());
  if ( a * b === 0 ) {
    console.log(0)
  } else {
    console.log((a * b).toString());
  }
}
solution(a,b);
