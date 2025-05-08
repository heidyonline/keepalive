const axios = require('axios');
const urls = require('./urls.json');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


(async () => {
  const time = new Date().toLocaleString();
  console.log(`\n[${time}] Starting randomized ping...`);

  for (const url of urls) {
    const delay = Math.floor(Math.random() * 10 * 60 * 1000); // 0–10 mins
    console.log(`⏳ Waiting ${delay / 1000}s before pinging: ${url}`);
    await sleep(delay);

    try {
      const response = await axios.get(url);
      console.log(`✅ Pinged ${url} - Status: ${response.status}`);
    } catch (err) {
      console.log(`❌ Error pinging ${url}:`, err.message);
    }
  }

  console.log("✅ All URLs pinged with random delays.");
})();
