const axios = require('axios');
const urls = require('./urls.json');

(async () => {
  const time = new Date().toLocaleString();
  console.log(`\n[${time}] Pinging URLs...`);

  for (const url of urls) {
    try {
      const response = await axios.get(url);
      console.log(`✅ Pinged ${url} - Status: ${response.status}`);
    } catch (err) {
      console.log(`❌ Error pinging ${url}:`, err.message);
    }
  }
})();
