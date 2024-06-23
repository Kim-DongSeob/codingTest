let fs = require('fs');
const input = fs.readFileSync("2480.txt").toString().trim().split(" ");
const inputNum = input.map((i) => Number(i));

/**
 * 참고로 훨씬 더 쉽게 풀 수 있다..!!ㅋㅋ 내가 어렵게 푼 것이다.
 */
function solution(arr) {
  // 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
  const isAllSame = arr.every((v) => v === arr[0]);
  if ( isAllSame ) {
    return 10000 + (arr[0] * 1000);
  }

  // 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
  for ( const idx in arr ) {
    const filter = arr.filter((v) => v === arr[idx]);
    if ( filter.length === 2 ) {
      return 1000 + (arr[idx] * 100);
    }
  }

  // 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
  const maxNum = Math.max(...arr);
  return maxNum * 100;
}
console.log(solution(inputNum));
