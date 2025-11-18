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

async function testAllSettled() {
  console.log("\n🟣 Testing Promise.allSettled\n");
  const results = await Promise.allSettled([
    fakeAPI("Likes", 500),
    fakeAPI("Followers", 800, true),
    fakeAPI("Analytics", 1000),
  ]);
  console.log("📊 All Settled Results:", results);
}


async function testRace() {
  console.log("\n🏁 Testing Promise.race\n");
  try {
    const winner = await Promise.race([
      fakeAPI("Server A", 2000),
      fakeAPI("Server B", 1200),
      fakeAPI("Server C", 3000),
    ]);
    console.log("🎉 Fastest Response:", winner);
  } catch (error) {
    console.log("❌ Race failed:", error);
  }
}


async function testAny() {
  console.log("\n🟢 Testing Promise.any\n");
  try {
    const firstSuccess = await Promise.any([
      fakeAPI("Mirror 1", 1000, true),
      fakeAPI("Mirror 2", 2000),
      fakeAPI("Mirror 3", 1500, true),
    ]);
    console.log("✅ First Successful Response:", firstSuccess);
  } catch (error) {
    console.log("❌ All failed:", error.errors);
  }
}