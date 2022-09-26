// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수이면 👎을 출력
// if

if (num % 2 === 0) {
  console.log('👍');
} else if (num % 2 === 1) {
  console.log('👎');
}

// ternary
console.log(num % 2 === 0 ? '👍' : '👎');
