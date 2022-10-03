// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

const set = new Set(fruits);
console.log(set);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const intersection = function (set1, set2) {
  const newSet = new Set();
  set1.forEach((item) => (set2.has(item) ? newSet.add(item) : null));
  return newSet;
};

const result = intersection(set1, set2);
console.log(result);
