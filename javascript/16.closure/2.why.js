// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 사용
// 캡슐화와 정보은닉

// 💡 캡슐화
// 객체의 속성(data fields)과 행위(메서드, methods)를 하나로 묶고
// 실제 구현 내용 일부를 내부에 감추어 은닉한다 (위키피디아)

// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}

const counter = new Counter();
counter.increase();
