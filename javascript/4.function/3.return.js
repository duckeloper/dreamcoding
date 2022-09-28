// return을 명시하지 않으면 자동으로 undefined가 반환됨!
function add(a, b) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  return a + b;
}

const result = add(1, 2);
console.log(`result: ${result}`);

function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
