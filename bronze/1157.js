let fs = require('fs');
const input = fs.readFileSync("1157.txt").toString().trim();

function solution(inputValue) {
  let obj = {};
  const arrLowercase = inputValue.toLowerCase();
  Array.from(arrLowercase).forEach((v) => {
    obj[v] = obj[v] ? obj[v] + 1 : 1;
  });

  let max = 0;
  let objKey = null;
  let sameCount = 0;
  for(const v in obj) {
    if ( obj[v] > max ) {
      max = obj[v];
      objKey = v;
      sameCount = 0;
    } else if ( obj[v] === max ) {
      sameCount += 1;
    }
  }
  if ( sameCount === 0 ) {
    return Object.keys(obj).find((key) => key === objKey).toUpperCase();
  }

  if ( sameCount > 0 ) {
    return '?';
  }
}
console.log(solution(input));
