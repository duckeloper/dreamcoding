// 원시타입은 메모리에 값이, 객체타입은 메모리에 참조값이 들어 있다

// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // Copy by Value
b = 2;
console.log(`a = ${a}, b = ${b}`);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  // 0x1234
  name: '사과',
};

let orange = apple; // 0x1234
apple.name = '오렌지';

console.log(apple);
console.log(orange);
