let fs = require('fs');
const [input, n ] = fs.readFileSync("2530.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ").map((i) => Number(i))

function solution(arr, n) {
  // const [hour, minute, second] = arr;
  //
  let originHour    = arr[0];  // 23
  let originMinute  = arr[1];  // 48
  let originSecond  = arr[2] + n;  // 59 // n을 second에 추가하고 시작한다.

  // 남은 초를 구한다.
  const second = originSecond % 60;
  // 초를 60으로 나눈 값을 분에 더한다.
  const extraMinute = (originMinute + Math.floor(originSecond / 60));
  // 값이 더해진 분을 60으로 나눠 나머지 분을 구한다.
  const minute =  extraMinute % 60;
  // 추가할 시간을 구한다.
  const extraHour = Math.floor(extraMinute / 60);
  // 시에 추가된 시를 더하고 24로 나눠 나머지를 구한다.
  const hourRest = (originHour + extraHour) % 24;

  return (`${ hourRest } ${ minute } ${ second }`);
}
console.log(solution(inputArr, Number(n)));
