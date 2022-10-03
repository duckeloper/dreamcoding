// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const replace = function (arr, from, to) {
  const newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === from) {
      newArr[i] = to;
    }
  }
  console.log(`input: ${arr} newArr: ${newArr}`);
  return newArr;
};

const input = ['🍌', '🍓', '🍇', '🍓'];
const output = replace(input, '🍓', '🥝');
console.log(`output: ${output}`);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const counter = function (arr, element) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      total += 1;
    }
  }
  return total;
};

const inputArr = ['🍌', '🥝', '🍇', '🥝'];
const inputElement = '🥝';
const totalOutput = counter(inputArr, inputElement);
console.log(totalOutput);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const intersection = function (arr1, arr2) {
  const outputArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      outputArr.push(arr1[i]);
    }
  }
  return outputArr;
};

const output3 = intersection(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']);
console.log(output3);
