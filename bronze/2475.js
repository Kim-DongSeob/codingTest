let fs = require('fs');
const input = fs.readFileSync("2475.txt").toString().trim().split(" ");
const inputNum = input.map((i) => Number(i));

function solution(arr) {
  // 1. 배열을 반복하며 각 수의 제곱을 누적 더한다.
  const rest = arr.reduce((result, curValue) => result + (curValue * curValue), 0) % 10;
  return rest;
}
console.log(solution(inputNum));
