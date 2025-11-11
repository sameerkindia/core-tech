function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log("Increment:", count);
    },
    decrement: function() {
      count--;
      console.log("Decrement:", count);
    },
    reset: function() {
      count = 0;
      console.log("Reset:", count);
    },
    value: function() {
      console.log("Current value:", count);
    }
  };
}

const counter = createCounter();
counter.increment(); // Increment: 1
counter.increment(); // Increment: 2
counter.value();     // Current value: 2
counter.decrement(); // Decrement: 1
counter.reset();     // Reset: 0



// - createCounter() creates a function and returns it.
// - When we call counter(), JS **remembers** `count` because of closure.
// - Even though createCounter() has finished executing, its variables stay alive in memory.




// Why it’s powerful

// - We created *private variables* in JS without classes.
// - No one can modify `count` directly — only via provided methods.
// - This pattern is used in **React hooks**, **custom hooks**, and **service functions**.