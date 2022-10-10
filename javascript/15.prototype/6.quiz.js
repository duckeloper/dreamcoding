// 클래스 기반 객체지향 프로그래밍
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName = () => console.log(`${this.name} ${this.emoji}`);
}

class Dog extends Animal {
  play = () => console.log('같이 놀자옹!');
}

class Tiger extends Animal {
  hunt = () => console.log('사냥하자! ..🐇..');
}

const dog1 = new Dog('멍멍이', '🐶', '엘리');
dog1.play();
dog1.printName();
const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
