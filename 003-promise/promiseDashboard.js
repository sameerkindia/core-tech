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


// Promise.all

async function testAll() {
  console.log("\n🔷 Testing Promise.all\n");
  try {
    const results = await Promise.all([
      fakeAPI("Users", 1000),
      fakeAPI("Posts", 1500),
      fakeAPI("Comments", 800, true), // Fail intentionally
    ]);
    console.log("✅ All resolved:", results);
  } catch (error) {
    console.log("❌ Promise.all failed:", error);
  }
}