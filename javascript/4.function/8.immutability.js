// 불변성 Immutability
// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값은 값에 의한 복사가 되지만
// 객체값은 참조에 의한 복사

function display(num) {
  num = 5; // ❌
  console.log(num); // 5
}

const value = 4;
display(value);
console.log(value); // 4

function displayObj(obj) {
  obj.name = 'Bob'; // ❌
  console.log(obj);
}

const ellie = { name: 'Ellie' };
displayObj(ellie); // { name: 'Bob' }
console.log(ellie); // { name: 'Bob' } 함수 외부에 선언된 객체가 변경됨

// 함수 내부에서 객체를 변경하고 싶으면
function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'Bob' }; // 반환할 때는 새로운 오브젝트 만들기!
}
