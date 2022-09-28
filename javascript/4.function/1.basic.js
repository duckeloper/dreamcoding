// 함수: 특정한 일을 수행하는 코드의 집합
// 재사용 가능
// 높은 가독성
// 유지보수성

// 사용예제 1
function add(num1, num2) {
  return num1 + num2;
}

console.log(`add(1, 2): ${add(1, 2)}`);
const result = add(1, 2);
console.log(`result: ${result}`);

// 사용예제 2
let lastName1 = '김';
let firstName1 = '지수';
let fullName1 = `${lastName1} ${firstName1}`;
console.log(fullName);

let lastName2 = '박';
let firstName2 = '철수';
let fullName2 = `${lastName2} ${firstName2}`;
console.log(fullName);

function fullName(firstName, lastName, lang) {
  if (lang === 'KO') {
    return `${lastName} ${firstName}`;
  } else if (lang === 'EN') {
    return `${firstName} ${lastName}`;
  }
}

console.log(fullName('Sean', 'Park', 'EN'));
