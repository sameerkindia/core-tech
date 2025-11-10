function createCounter() {
  let count = 0; // private variable (inside closure)

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3