// 객체: 서로 밀접하게 연관있는 속성과 행동을 묶어주기 위해 사용
// 속성: 데이터(프로퍼티)
// 행동: 함수(메소드)

// 객체 만드는 법
// Object literal { key: value }
// new Object()
// Object.create();

// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
  name: 'apple',
  hello: '✋',
  0: 1,
  ['hello-bye1']: '✋',
  display: function () {
    console.log('');
  },
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation
console.log(apple['name']);

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);
