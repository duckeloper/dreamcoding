// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action) { }

function print(a) {
  console.log(a);
}

function double(a) {
  console.log(a * 2);
}

function iterate(max, action) {
  for (let i = 0; i <= max; i++) {
    action(i);
  }
}

// iterate(3, print);
// iterate(5, double);
iterate(3, (a) => console.log(a));
iterate(3, (a) => console.log(a * 2));

setTimeout(() => {
  console.log('3초 뒤 이 함수가 실행될 거예요');
}, 3000);
