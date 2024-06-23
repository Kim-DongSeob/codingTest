let fs = require('fs');
const input = fs.readFileSync('1271.txt').toString().trim().split('\n');

function solution(arr) {
  const [a, b] = input[0].split(' ');

  // 조교가 가진 돈
  const money = BigInt(a);
  // 생명체 수
  const creature = BigInt(b);

  // 1. 조교 돈 / 생명체 수
  const firstResult = money / creature;
  // 2. 1원씩 분배할 수 없는 돈
  const secondResult = money % creature;

  // 개행 문자가 들어갔음으로 자동으로 형변환 되어 n이 사라짐
  return `${firstResult}\n${secondResult}`
}

console.log(solution(input));
