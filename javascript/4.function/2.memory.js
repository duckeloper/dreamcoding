function add(a, b) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  return a + b;
}

const sum = add;
console.log(sum(1, 2));
console.log(add(1, 2));
