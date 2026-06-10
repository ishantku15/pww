const fetch = require('node-fetch'); // or native fetch if Node 18+

async function test() {
  const url = 'https://pw.2snfjitu.workers.dev/api/pw/live';
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ batchId: "698ad3519549b300a5e1cc6a" })
    });
    console.log(res.status);
    const text = await res.text();
    console.log(text.substring(0, 500));
  } catch (err) {
    console.error(err);
  }
}
test();
