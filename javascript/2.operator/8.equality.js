// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // true ('2'를 숫자로 암묵적 변환)
console.log(2 === '2'); // false (값과 타입을 함께 비교) ✨
console.log(true == 1); // true
console.log(true === 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0);
console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false: 메모리 주소가 다르다
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2;

console.log(obj3 == obj2);
