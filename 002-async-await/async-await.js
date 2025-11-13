function fetchData(data, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`✅ ${data} received after ${delay / 1000}s`);
    }, delay);
  });
}

async function loadData() {
  console.log("⏳ Fetching data...");

  const user = await fetchData("User", 1000);
  console.log(user);

  const posts = await fetchData("Posts", 2000);
  console.log(posts);

  const comments = await fetchData("Comments", 500);
  console.log(comments);

  console.log("✅ All data loaded!");
}

loadData();