// var์ ํน์ง (๐ฉ)
// -> ์ผ๋ฐ ์ฝ๋ฉ ๋ฐฉ์๊ณผ ์ด๊ธ๋์ ๊ฐ๋ฐํ๋ฉด์๋ ๋ฉ๋ถ ์ด
// -> ์ฝ๋์ ๊ฐ๋์ฑ๊ณผ ์ ์ง๋ณด์์ฑ์ ์ข์ง ์์

// 1. ๋ณ์ ์ ์ธํ๋ ํค์๋ ์์ด ์ ์ธ & ํ ๋น์ด ๊ฐ๋ฅํจ
// ์ ์ธ์ธ์ง, ์ฌํ ๋น์ธ์ง ๊ตฌ๋ถํ๊ธฐ ์ด๋ ค์
something = '๐ฉ';
console.log(something);

// 2. ์ค๋ณต ์ ์ธ์ด ๊ฐ๋ฅํจ
var poo = '๐ฉ';
var poo = '๐ฉ';
console.log(something);

let num = 0;
// let num = 1; // Cannot redeclare

// 3. ๋ธ๋ก ๋ ๋ฒจ ์ค์ฝํ ์๋จ โ
var apple = '์ฌ๊ณผ';
{
  var apple = '๐';
  {
    var apple = '๐';
  }
}

console.log(apple); // ๐

// 4. ํจ์ ๋ ๋ฒจ ์ค์ฝํ๋ง ์ง์๋จ
function example() {
  var dog = '๐ฆฎ';
}

// console.log(dog); // ReferenceError: dog is not defined
