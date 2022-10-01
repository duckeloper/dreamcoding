// 접근제어자 = 캡슐화
// private(#), public(기본), protected

class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    // function 키워드 붙이면 안 됨
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// apple.#name = 'orange'; // 접근불가
console.log(apple);
