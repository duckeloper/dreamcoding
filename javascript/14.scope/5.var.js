// var의 특징 (💩)
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕 옴
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함
// 선언인지, 재할당인지 구분하기 어려움
something = '💩';
console.log(something);

// 2. 중복 선언이 가능함
var poo = '💩';
var poo = '💩';
console.log(something);

let num = 0;
// let num = 1; // Cannot redeclare

// 3. 블록 레벨 스코프 안됨 ❌
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}

console.log(apple); // 🍏

// 4. 함수 레벨 스코프만 지원됨
function example() {
  var dog = '🦮';
}

// console.log(dog); // ReferenceError: dog is not defined
