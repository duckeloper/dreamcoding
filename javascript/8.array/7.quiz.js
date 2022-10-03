// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// const replace = function (arr, from, to) {
//   const newArr = arr.slice();
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === from) {
//       newArr[i] = to;
//     }
//   }
//   console.log(`input: ${arr} newArr: ${newArr}`);
//   return newArr;
// };

// const input = ['🍌', '🍓', '🍇', '🍓'];
// const output = replace(input, '🍓', '🥝');
// console.log(`output: ${output}`);

// 내 솔루션
// const replace = function (array, changeFrom, changeTo) {
//   const result = array.map((item) => {
//     if (item === changeFrom) {
//       return changeTo;
//     } else {
//       return item;
//     }
//   });

//   return result;
// };

// 엘리 솔루션
const replace = function (array, changeFrom, changeTo) {
  return array.map((item) => (item === changeFrom ? changeTo : item));
};

const output = replace(['🍌', '🍓', '🍇', '🍓'], '🍓', '🥝');
console.log(output); // [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// const counter = function (arr, element) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       total += 1;
//     }
//   }
//   return total;
// };

// const inputArr = ['🍌', '🥝', '🍇', '🥝'];
// const inputElement = '🥝';
// const totalOutput = counter(inputArr, inputElement);
// console.log(totalOutput);

const counter = function (array, target) {
  const filteredArray = array.filter((item) => item === target);
  const targetTotal = filteredArray.length;
  return targetTotal;
};

const counted = counter(['🍌', '🥝', '🍇', '🥝'], '🥝');
console.log(counted); // 2

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// const intersection = function (arr1, arr2) {
//   const outputArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       outputArr.push(arr1[i]);
//     }
//   }
//   return outputArr;
// };

// const output3 = intersection(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']);
// console.log(output3);

const intersection = function (array1, array2) {
  const newArr = array1.filter((item) => array2.includes(item));
  return newArr;
};

const result = intersection(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']);
console.log(result); // [ '🍌', '🍇' ]

// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];
const avgAboveFive = function (arr) {
  // 5보다 큰 숫자들의 배열
  const aboveFive = arr.filter((x) => x > 5);
  // 숫자들의 합
  const sum = aboveFive.reduce((sum, value) => (sum += value), 0);
  // 숫자들의 평균
  const result = sum / aboveFive.length;
  return result;
};

const average = avgAboveFive(nums);
console.log(average);
