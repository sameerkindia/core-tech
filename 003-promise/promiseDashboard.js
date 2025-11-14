// Utility: fake API simulation
function fakeAPI(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    console.log(`⏳ ${name} started...`);
    setTimeout(() => {
      if (shouldFail) {
        console.log(`❌ ${name} failed after ${delay}ms`);
        reject(`${name} failed`);
      } else {
        console.log(`✅ ${name} done after ${delay}ms`);
        resolve(`${name} success`);
      }
    }, delay);
  });
}