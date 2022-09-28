// 함수 선언문 function name() { }
// 함수 표현식(값으로 평가될 수 있음) const name = function () { }
// 화살표 함수 const name = () => { }

let add = function (a, b) {
  // 무명 함수
  return a + b;
};

console.log(add(1, 2));

add = (a, b) => a + b;

console.log(add(1, 2));
